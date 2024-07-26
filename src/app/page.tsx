import Image from "next/image";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitch />
      <p>Next Line of action is working on left side drawer witht the three lines icon</p>
    </main>
  );
}
