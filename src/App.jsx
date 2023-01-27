import HEADERDESKTOP from "./assets/image-header-desktop.jpg";
import HEADERMOBILE from "./assets/image-header-mobile.jpg";
import "./App.css";

function App() {
  return (
    <body className="h-screen flex justify-center items-center">
      <main className="flex lg:flex-row flex-col-reverse justify-center lg:w-[90%] w-fit lg:h-2/3 h-[90%] m-auto">
        <section class="text-content flex flex-col items-center lg:h-full lg:w-[30rem] w-[25rem] p-8 lg:rounded-l-xl lg:rounded-br-none rounded-b-xl">
          <h1 className="font-bold">
            Get <span class="accent">insights</span> that help your business
            grow.
          </h1>
          <p className="my-8">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div class="stats flex lg:flex-row flex-col m-auto">
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
        <section class="aside-bg lg:w-[30rem] w-[25rem] lg:h-full h-[13rem] lg:rounded-r-xl lg:rounded-lr-none  rounded-t-xl object-cover -z-10">
          <picture>
            <img
              className="lg:hidden object-cover opacity-70 object-center rounded-t-xl"
              src={HEADERMOBILE}
              alt="header mobile"
            />
            <img
              className="lg:block hidden object-cover opacity-70 h-full rounded-r-xl"
              src={HEADERDESKTOP}
              alt="header desktop"
            />
          </picture>
        </section>
      </main>
    </body>
  );
}

export default App;
