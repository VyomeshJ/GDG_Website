// src/data/events.ts
export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  date_month: string; // ISO format
  date_day: string;
  time: string;
  location: string;
};

export const events: Event[] = [
  {
    id: "Launch Night!",
    title: "Launch Night!",
    description: "A 48-hour hackathon focused on AI and Web.",
    date: "04-03-2026",
    date_month: "Mar",
    date_day: "4",
    time: "4:00 PM - 6:00 PM",
    location: "Auckland, NZ",
  },
  {
    id: "Event 2 lmao",
    title: "Event 2 lmao",
    description: "Official launch of my new portfolio.",
    date: "06-03-2026",
    date_month: "Mar",
    date_day: "6",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
  {
    id: "Event 3 lmao",
    title: "Event 3 lmao",
    description: "Official launch of my new portfolio.",
    date: "09-03-2026",
    date_month: "Mar",
    date_day: "9",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
  {
    id: "Event 4 lmao",
    title: "Event 4 lmao",
    description: "Official launch of my new portfolio.",
    date: "12-03-2026",
    date_month: "Mar",
    date_day: "12",
    time: "4:00 PM - 6:00 PM",
    location: "Online",
  },
];
