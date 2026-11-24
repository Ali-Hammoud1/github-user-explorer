import Header from "./components/layout/Header";
import UserSearchForm from "./components/search/UserSearchForm";
import UserProfile from "./components/profile/UserProfile";
import ProfileStats from "./components/profile/ProfileStats";
import RepositorySection from "./components/repositories/RepositorySection";
import { useEffect, useState } from "react";

import LoadingState from "./components/feedback/LoadingState";
import ErrorState from "./components/feedback/ErrorState";
import EmptyState from "./components/feedback/EmptyState";

// ترجع JSON أو ترمي خطأ، وما تلمس أي state
async function getJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

export default function App() {
  const [username, setUsername] = useState("octocat");
  const [userdata, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reposError, setReposError] = useState(null);

  function handleSearch(name) {
    setUsername(name.trim());
  }

  useEffect(() => {
    if (!username) return;

    setError(null);
    setReposError(null);
    setLoading(true);
    setUserData(null);
    setRepos([]);

    const controller = new AbortController();
    const name = encodeURIComponent(username);

    async function fetchData() {
      const [userResult, reposResult] = await Promise.allSettled([
        getJson(`https://api.github.com/users/${name}`, controller.signal),
        getJson(
          `https://api.github.com/users/${name}/repos`,
          controller.signal,
        ),
      ]);

      // إذا انلغى الطلب لا تحدّث أي state
      if (controller.signal.aborted) return;

      if (userResult.status === "fulfilled") {
        setUserData(userResult.value);
      } else {
        setError(`Error fetching user data: ${userResult.reason.message}`);
      }

      if (reposResult.status === "fulfilled") {
        setRepos(reposResult.value);
      } else {
        setReposError(
          `Error fetching repositories: ${reposResult.reason.message}`,
        );
      }

      setLoading(false);
    }

    fetchData();

    return () => controller.abort();
  }, [username]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 pb-20 sm:px-6">
        <UserSearchForm onSearch={handleSearch} />

        <div className="space-y-8">
          {loading && <LoadingState />}

          {!loading && error && <ErrorState message={error} />}

          {!loading && userdata && (
            <>
              <UserProfile user={userdata} />
              <ProfileStats user={userdata} />
            </>
          )}

          {!loading && userdata && reposError && (
            <ErrorState message={reposError} />
          )}

          {!loading  && !reposError && userdata && <RepositorySection repos={repos} />}

          {!loading && !error && !userdata && !reposError && <EmptyState />}
        </div>
      </main>
    </div>
  );
}