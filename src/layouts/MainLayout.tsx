import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>this nav</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer</footer>
    </>
  );
}
