import Card from "@/components/common/Card";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const filterOptions = [
  { label: "All" },
  { label: "Top Villa" },
  { label: "Free Reschedule" },
  { label: "Book Now, Pay Later" },
  { label: "Self CheckIn" },
  { label: "Instant Book" },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  return (
    <div className={`${geistSans.className} ${geistMono.className} `}>
      <div className="container mx-auto px-0">
        {/* Hero Banner */}
        <div
          style={{
            backgroundImage: "url(/assets/image/hero-banner-image.jpg)",
          }}
          className="h-[min(calc(100vh-350px),550px)] w-full rounded-3xl bg-cover bg-center flex flex-col items-center justify-center text-white gap-4"
        >
          <h1 className="font-semibold max-w-[867px] leading-28 text-7xl text-center drop-shadow-2xl">
            Find your favorite place here!
          </h1>
          <p className="text-2xl text-center">
            The best prices for over 2 million properties worldwide
          </p>
        </div>

        <div className="flex items-center mt-10 mb-6 gap-4">
          {filterOptions.map((option, index) => (
            <Pill
              {...option}
              active={activeFilter === option.label}
              onClick={setActiveFilter}
            />
          ))}
        </div>

        <div className="grid grid-cols-4 gap-x-5 gap-y-6">
          {PROPERTYLISTINGSAMPLE.filter((prop => {
            if(activeFilter === 'All') {
              return true
            } else prop.category.includes(activeFilter)
          })).map((property, index) => {
            return <Card {...property} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
