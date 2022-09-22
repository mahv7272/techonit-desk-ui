export default function Layout({ children }) {
  return (
    <>
      <main role="main" className="bg-noise-light dark:bg-noise-dark h-[100vh]">
        {children}
      </main>

    </>
  );
}
