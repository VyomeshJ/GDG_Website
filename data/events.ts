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
        id: "Club Expo Day #1",
        title: "Club Expo Day #1",
        date: "2026-03-02",
        date_month: "MAR",
        date_day: "2",
        time: "10:00 AM - 3:00 PM",
        location: "City Campus",
    },
    {
        id: "Club Expo Day #2",
        title: "Club Expo Day #2",
        date: "2026-03-03",
        date_month: "MAR",
        date_day: "3",
        time: "10:00 AM - 3:00 PM",
        location: "City Campus",
    },
    {
        id: "Club Expo Day #3",
        title: "Club Expo Day #3",
        date: "2026-03-04",
        date_month: "MAR",
        date_day: "4",
        time: "10:00 AM - 3:00 PM",
        location: "City Campus",
    },
  
];
