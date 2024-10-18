import { FiberComponent } from "./FiberComponent";
// import { ThreeDimensionalThing } from "./ThreeDimensionalThing";

export default function HomePage() {
  return (
    <main className="min-h-screen min-w-full">
      <div className="absolute h-screen w-screen bg-slate-600" />
      {/* <ThreeDimensionalThing /> */}
      <FiberComponent />
    </main>
  );
}
