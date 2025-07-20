import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function Layout() {
  return (
    <>
      <header>
        <NavigationBar />
      </header>

      <main className="mt-4 px-4">
        <Outlet />
      </main>
    </>
  );
}
