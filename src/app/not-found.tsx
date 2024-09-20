import DividerSVG from "./components/DividerSVG";

export default function NotFound() {
  return (
    <div className="flex h-full flex-grow items-center justify-center">
      <h1 className="text-2xl font-medium">404</h1>
      <DividerSVG />
      <h2 className="text-sm">This page could not be found.</h2>
    </div>
  );
}
