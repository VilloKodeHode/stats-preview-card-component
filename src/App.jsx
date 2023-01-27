import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <body>
      <main className="flex flex-row width-full max-w-[1440px]">
        <section class="text-content">
          <h1>
            Get <span class="accent">insights</span> that help your business
            grow.
          </h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div class="stats">
            <div>
              <h3>10k+</h3>
              <h3 class="stat-heading">companies</h3>
            </div>
            <div>
              <h3>314</h3>
              <h3 class="stat-heading">templates</h3>
            </div>
            <div>
              <h3>12m+</h3>
              <h3 class="stat-heading last-stat">queries</h3>
            </div>
          </div>
        </section>
        <section class="aside-bg"></section>
      </main>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor.
        </a>
        Coded by <a href="#">Joakim Villo</a>.
      </div>
    </body>
  );
}

export default App;
