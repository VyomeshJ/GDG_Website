'use client'

import Image from "next/image";
import { events } from "@/data/events";
import Footer from "@/components/Home/footer";

export default function Home() {
  const upcomingEvents = events
    .filter(e => new Date(e.date) >= new Date())
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  return (
    <div className="min-h-screen flex flex-col bg-[#ededed]">

      {/* Main content */}
      <main className="flex-1 flex flex-col">

        {/* Header */}
        
        <div className="flex flex-col items-center pt-8">
          <h1
            className={`mb-8 font-bold text-4xl pt-[100px] md:pt-[180px] ${
              upcomingEvents.length === 0
                ? "text-transparent"
                : "text-black"
            }`}
          >
            Upcoming Events
          </h1>
        </div>


        {/* Events list / Empty state */}
        <div
          className="
            flex flex-col items-center w-full
            overflow-y-visible
            md:flex-1 md:overflow-y-auto
          "
        >
          {upcomingEvents.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center text-center mt-16 text-[#7b7b7b]">
              <h2 className="text-2xl font-bold mb-2">
                No upcoming events
              </h2>
              <p className="text-sm md:text-base max-w-md">
                Please check back later — new events will be announced soon.
              </p>
            </div>
          ) : (
            upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="w-[80vw] md:w-[50vw] h-40 bg-white rounded-lg flex items-center m-2"
              >
                {/* Date section */}
                <div
                  className={`w-[30%] md:w-[20%] h-full p-4 flex flex-col justify-center ${
                    index === 0 ? "bg-[#062838]" : "bg-black"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-center text-white">
                    {event.date_month}
                  </h3>
                  <p className="text-5xl font-bold text-center text-white">
                    {event.date_day}
                  </p>
                </div>

                {/* Event content */}
                <div className="w-[70%] md:w-[80%] flex items-center p-4">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg md:text-2xl font-bold text-black">
                      {event.title}
                    </h2>

                    <p className="text-sm md:text-lg font-bold text-[#7b7b7b]">
                      Location: {event.location}
                    </p>

                    <div className="rounded-lg bg-[#d5d5d5] p-2 flex items-center gap-2 w-fit">
                      <Image
                        src="/icons/clockIcon.png"
                        alt="Time"
                        width={20}
                        height={20}
                      />
                      <span className="font-bold text-black">
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
