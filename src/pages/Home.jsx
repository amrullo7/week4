import React from "react";
import img1 from "/public/robot area.png";
import img2 from "/public/72355892508 1.png";
import img3 from "/public/72355892508 1 (1).png";
import img4 from "/public/72355892508 1 (2).png";
const Home = () => {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="grid w-full items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-20 lg:py-24">
          <div>
            <h1 className="text-5xl font-bold lg:text-7xl">
              Transforming Data
              <br />
              into
              <span className="inline-block rounded-2xl bg-blue-500 px-4 pb-1">
                Decisions
              </span>
            </h1>

            <p className="mt-10 w-full text-lg text-white/60 lg:w-[440px]">
              Leverage the power of machine learning and AI to unlock insights
              and drive business growth
            </p>

            <button className="mt-10 rounded-xl bg-blue-500 px-8 py-4 text-sm font-semibold text-white">
              Book a Meeting
            </button>

            <div className="mt-10 flex items-center gap-4">
              <p className="text-xs text-white/70">
                Over <b className="text-white">100+</b> clients have worked with
                us
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-700/40 blur-3xl" />
            <img
              src={img1}
              alt=""
              className="relative h-auto w-full lg:w-[480px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-black font-sans text-white">
    
        <section className="w-full px-6 py-16 lg:px-20">
          <h2 className="text-center text-2xl font-semibold lg:text-3xl">
            Our Ultimate Set of Services for Your
            <br />
            Ideas Implementation
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-8 py-10 text-center">
              <img
                src={img2}
                alt="Predictive Analytics"
                className="h-40 w-auto"
              />
              <h3 className="mt-8 text-lg font-semibold">
                Predictive Analytics
              </h3>
              <p className="mt-4 text-xs text-white/80">
                Forecast trends and make data-driven decisions with our advanced
                ML models.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-8 py-10 text-center">
              <img src={img3} alt="AI Consulting" className="h-40 w-auto" />
              <h3 className="mt-8 text-lg font-semibold">AI Consulting</h3>
              <p className="mt-4 text-xs text-white/80">
                Expert guidance on implementing AI solutions for your business
                needs.
              </p>
            </div>

            <div className="flex flex-col items-center rounded-3xl bg-neutral-900 px-8 py-10 text-center">
              <img src={img4} alt="Data Engineering" className="h-40 w-auto" />
              <h3 className="mt-8 text-lg font-semibold">Data Engineering</h3>
              <p className="mt-4 text-xs text-white/80">
                Build robust data pipelines and infrastructure for ML
                operations.
              </p>
            </div>
          </div>
        </section>

      
        <section className="w-full px-6 py-16 lg:px-20">
          <h2 className="text-center text-2xl font-semibold lg:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-12 flex w-full flex-col gap-4 lg:w-[860px]">
          
            <div className="flex items-start gap-6 rounded-3xl bg-neutral-900 px-8 py-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-xl font-semibold text-blue-500">
                01
              </span>
              <div className="flex-1">
                <h3 className="pt-3 text-base font-semibold text-blue-500">
                  What services does Catalyst Analytics provide?
                </h3>
                <p className="mt-3 text-sm text-white/70">
                  Catalyst Analytics offers a range of services including
                  design, engineering, and project management. We specialize in
                  user experience design, web development, mobile app
                  development, custom software development, branding and
                  identity, and more.
                </p>
              </div>
              <span className="pt-3 text-xl text-blue-500">✕</span>
            </div>

            <div className="flex items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-xl font-semibold">
                02
              </span>
              <h3 className="flex-1 text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <span className="text-2xl">+</span>
            </div>

            <div className="flex items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-xl font-semibold">
                03
              </span>
              <h3 className="flex-1 text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <span className="text-2xl">+</span>
            </div>

            <div className="flex items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-xl font-semibold">
                04
              </span>
              <h3 className="flex-1 text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <span className="text-2xl">+</span>
            </div>

            <div className="flex items-center gap-6 rounded-3xl bg-neutral-900 px-8 py-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-neutral-800 text-xl font-semibold">
                05
              </span>
              <h3 className="flex-1 text-base font-medium">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <span className="text-2xl">+</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
