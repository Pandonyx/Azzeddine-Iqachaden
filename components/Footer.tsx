export default function Footer() {
  return (
    <footer className='w-full py-6 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700'>
      <div className='max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400'>
        <p>© {new Date().getFullYear()} Pandonyx. All rights reserved.</p>
        <p className='mt-2 sm:mt-0'>
          Built with{" "}
          <span className='text-indigo-600 dark:text-indigo-400'>Next.js</span>{" "}
          &{" "}
          <span className='text-indigo-600 dark:text-indigo-400'>
            TailwindCSS
          </span>
        </p>
      </div>
    </footer>
  );
}
