import React from "react";
import { upcomingEvents } from "@/data/events";

function formatEventDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-CA", { day: "2-digit" }),
    month: d.toLocaleDateString("en-CA", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
  };
}

export default function EventsSidebar() {
  return (
    <aside className="bg-[#0c1a2e] p-6 md:p-8">
      {/* Header */}
      <p className="eyebrow text-[#edc058]/60 mb-2">On the Calendar</p>
      <h2 className="font-[family-name:var(--font-Roboto)] text-2xl font-black text-white uppercase tracking-tight mb-8">
        Upcoming Events
      </h2>

      <div className="flex flex-col gap-6">
        {upcomingEvents.map((event) => {
          const { day, month, full } = formatEventDate(event.date);
          return (
            <div key={event.id} className="flex gap-4 group">

              {/* Date block */}
              <div className="flex-shrink-0 w-14 h-14 bg-[#edc058] flex flex-col items-center justify-center">
                <span className="font-[family-name:var(--font-Roboto)] text-[#0c1a2e] text-xl font-black leading-none">
                  {day}
                </span>
                <span className="font-[family-name:var(--font-Cabin)] text-[#0c1a2e] text-[10px] font-bold tracking-widest mt-0.5">
                  {month}
                </span>
              </div>

              {/* Event details */}
              <div className="flex-1 min-w-0">
                <p className="font-[family-name:var(--font-Roboto)] text-white text-sm font-bold leading-snug mb-1 uppercase tracking-tight">
                  {event.title}
                </p>
                <time
                  dateTime={event.date}
                  className="font-[family-name:var(--font-Cabin)] text-[#edc058]/70 text-xs block"
                >
                  {full}{event.time && ` · ${event.time}`}
                </time>
                <p className="font-[family-name:var(--font-Cabin)] text-gray-400 text-xs mt-1 leading-snug">
                  {event.location}
                </p>
                {event.description && (
                  <p className="font-[family-name:var(--font-Cabin)] text-gray-500 text-xs mt-1 leading-snug italic">
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Divider + contact */}
      <div className="mt-10 pt-6 border-t border-white/10">
        <p className="font-[family-name:var(--font-Cabin)] text-gray-400 text-xs leading-relaxed">
          Want to stay updated?{" "}
          <a href="/alumni" className="text-[#edc058] underline underline-offset-2 hover:text-[#f5d27a]">
            Join the alumni mailing list
          </a>{" "}
          or follow us on{" "}
          <a
            href="https://www.instagram.com/dutoronto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#edc058] underline underline-offset-2 hover:text-[#f5d27a]"
          >
            Instagram
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
