
"use client";
import { useInView } from "react-intersection-observer";
import { WorldMap } from "@/components/ui/world-map";

export default function JoinMission() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const testDots = [
      {
        start: { lat: 61.2176, lng: -149.8997, label: "Alaska" },
        end: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" }
      },
      {
        start: { lat: 34.0522, lng: -118.2437, label: "Los Angeles" },
        end: { lat: -14.235, lng: -51.9253, label: "Brazil" }
      },
      {
        start: { lat: -14.235, lng: -51.9253, label: "Brazil" },
        end: { lat: 38.7169, lng: -9.1399, label: "Lisbon" }
      },
      {
        start: { lat: 38.7169, lng: -9.1399, label: "Lisbon" },
        end: { lat: 28.6139, lng: 77.209, label: "New Delhi" }
      },
      {
        start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
        end: { lat: 43.1155, lng: 131.8855, label: "Vladivostok" }
      }
    ]
    

  return (
    <div className="relative w-full min-h-screen bg:background">
      {/* World Map as Background */}
      <div className="absolute inset-0 -z-10">
      <WorldMap dots={testDots} />;

      </div>

      {/* Overlay Section */}
      <section className="relative flex justify-center items-center min-h-screen opacity-70 ">
        <div
          ref={ref}
          className={`border-2 gradient-border max-w-5xl rounded-3xl px-6 sm:px-10 md:px-12 py-16 sm:py-20 md:py-24 bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-70 backdrop-blur-md shadow-lg transition-all duration-700 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="flex flex-col items-center max-w-5xl text-center gap-4 sm:gap-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[40px] font-extrabold text-[#92a3b8] leading-tight">
              <span className="font-bold text-slate-900 dark:text-white">
                Join Our
              </span>
              <span className="bg-gradient-to-r from-pink-500 via-blue-400 to-yellow-300 bg-clip-text text-transparent ml-2">
                Mission
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-xl text-slate-700 dark:text-gray-300">
              Help us reimagine the future of hiring in the tech industry.
            </p>
            <button className="h-11 rounded-md px-8 text-md bg-black text-white dark:bg-white dark:text-black hover:scale-[1.02] transition">
              Start Here →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

