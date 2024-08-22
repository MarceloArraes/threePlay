import Link from "next/link";
import { ThreeDimensionalThing } from "./ThreeDimensionalThing.tsx";

export default function HomePage() {
  return (
    <main className="min-h-screen min-w-full">
      <div className="absolute h-screen w-screen bg-slate-600" />
      <ThreeDimensionalThing />
    </main>
  );
}
