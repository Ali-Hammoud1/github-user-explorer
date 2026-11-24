function EmptyRepos() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-gray-900 px-6 py-12 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-7 w-7 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-9Z"
          />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-gray-200">لا توجد مستودعات</h3>
      <p className="mt-1 max-w-xs text-sm text-gray-500">
        هذا المستخدم لم ينشر أي مستودع عام حتى الآن.
      </p>
    </div>
  );
}

export default EmptyRepos;
