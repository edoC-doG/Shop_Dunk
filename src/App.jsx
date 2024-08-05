import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLight from "./components/HighLight";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLight />
      <Model />
    </main>
  );
}

export default Sentry.withProfiler(App);
