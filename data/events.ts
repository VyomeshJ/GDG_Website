// src/data/events.ts
export type Event = {
  id: string;
  title: string;
  date: string;
  date_month: string; // ISO format
  date_day: string;
  time: string;
  location: string;
};

export const events: Event[] = [
    {
        id: "old event",
        title: "old event",
        date: "2026-03-03",
        date_month: "Mar",
        date_day: "3",
        time: "4:00 PM - 6:00 PM",
        location: "Auckland, NZ",
    },
  {
    id: "Launch Night!",
    title: "Launch Night!",
    date: "2026-03-04",
    date_month: "Mar",
    date_day: "4",
    time: "4:00 PM - 6:00 PM",
    location: "Auckland, NZ",
  },
  {
    id: "Event 2 lmao",
    title: "Event 2 lmao",
    date: "2026-03-06",
    date_month: "Mar",
    date_day: "6",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
  {
    id: "Event 3 lmao",
    title: "Event 3 lmao",
    date: "2026-03-09",
    date_month: "Mar",
    date_day: "9",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
  {
    id: "Event 4 lmao",
    title: "Event 4 lmao",
    date: "2026-03-12",
    date_month: "Mar",
    date_day: "12",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
];
