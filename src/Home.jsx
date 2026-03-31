import "./App.css";
import googlePlay from "../src/assets/google_play.png";
import appStore from "../src/assets/app_store.png";
import banerLogo from "../src/assets/hero.png";
import { useLoaderData, useNavigate } from "react-router";
import TrendingApps from "./components/TrendingApps/TrendingApps";

function Home() {
  const apps = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="text-center mx-auto space-y-6 bg-gray-100 pt-6">
      <div className="text-3xl md:text-5xl font-bold space-y-4">
        <h1>We Build</h1>
        <h1>
          <span className="font-bold bg-gradient-to-tr from-[#6C4CF1] to-[#8B6CF6] bg-clip-text text-transparent mr-2">
            Productive
          </span>
          Apps
        </h1>
      </div>

      <div className="font-news">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter and move exciting. Our goal is to turn ideas into
        digital experiences that truly make an impact.
      </div>

      <div className="flex justify-center gap-2">
        <div className="flex items-center  gap-1 border-2 border-gray-200 p-2 rounded-md">
          <img src={googlePlay} alt="" />
          <h2 className="font-bold">Google Play</h2>
        </div>
        <div className="flex items-center  gap-1 border-2 border-gray-200 p-2 rounded-md">
          <img src={appStore} alt="" />
          <h2 className="font-bold">App Store</h2>
        </div>
      </div>

      <div>
        <div className="flex justify-center">
          <img src={banerLogo} alt="" />
        </div>

        <section class="bg-gradient-to-tr from-[#4c35c2] to-[#8b5cf6] py-16 px-4">
          <div class="max-w-6xl mx-auto text-center">
            <h2 class="text-white text-3xl md:text-5xl font-bold mb-12">
              Trusted By Millions, Built For You
            </h2>

            <div class="flex flex-col md:flex-row justify-between items-center gap-10">
              <div class="flex flex-col items-center text-white">
                <p class="uppercase text-xs tracking-wider text-white/80 font-semibold">
                  Total Downloads
                </p>
                <h3 class="text-5xl md:text-6xl font-bold my-2">29.6M</h3>
                <p class="text-sm text-white/90">21% More Than Last Month</p>
              </div>

              <div class="flex flex-col items-center text-white">
                <p class="uppercase text-xs tracking-wider text-white/80 font-semibold">
                  Total Reviews
                </p>
                <h3 class="text-5xl md:text-6xl font-bold my-2">906K</h3>
                <p class="text-sm text-white/90">46% More Than Last Month</p>
              </div>

              <div class="flex flex-col items-center text-white">
                <p class="uppercase text-xs tracking-wider text-white/80 font-semibold">
                  Active Apps
                </p>
                <h3 class="text-5xl md:text-6xl font-bold my-2">132+</h3>
                <p class="text-sm text-white/90">31 More Will Launch</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="space-y-4  p-6">
          <h1 className="text-3xl md:text-4xl font-bold">Treding Apps</h1>
          <div className="font-news ">
            Explore All Trending Apps on the market developed by us
          </div>
        </div>

        <div className="space-y-4">
          <div className="w-[75%] mx-auto">
            <TrendingApps apps={apps}></TrendingApps>
          </div>
          <div className="pt-6 pb-10">
            <a
              onClick={() => navigate("/apps")}
              className="btn border-none my-auto text-white font-semibold text-lg px-6 bg-gradient-to-br from-[#7C3AED] to-[#A855F7] hover:from-[#6D28D9] hover:to-[#9333EA] shadow-md transition-all"
            >
              Show All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
