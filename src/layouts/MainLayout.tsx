import { Footer } from "@/components/layouts/Footer";
import { Navbar } from "@/components/layouts/NavBar/Navbar";
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
      <Footer />
    </>
  );
}
