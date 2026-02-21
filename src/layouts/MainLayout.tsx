import { Navbar } from "@/components/layouts/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer</footer>
    </>
  );
}
