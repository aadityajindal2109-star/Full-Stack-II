import React, { useState, useMemo, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DayColumn from "./DayColumn";
import { initialEvents, dateRange } from "../data/events";

export default function Calendar() {
  const [events, setEvents] = useState(initialEvents);
  const [title, setTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(dateRange[0]);

  const handleDropEvent = useCallback((eventId, newDate) => {
    setEvents((prev) =>
      prev.map((ev) => (ev.id === eventId ? { ...ev, date: newDate } : ev))
    );
  }, []);

  const handleDelete = useCallback((eventId) => {
    setEvents((prev) => prev.filter((ev) => ev.id !== eventId));
  }, []);

  const handleAdd = useCallback(
    (e) => {
      e.preventDefault();
      if (!title.trim()) return;
      setEvents((prev) => [
        ...prev,
        { id: Date.now(), title: title.trim(), date: selectedDate },
      ]);
      setTitle("");
    },
    [title, selectedDate]
  );

  const allDates = useMemo(() => {
    const eventDates = events.map((ev) => ev.date);
    const combined = [...new Set([...dateRange, ...eventDates])];
    return combined.sort();
  }, [events]);

  const eventsByDate = useMemo(() => {
    const map = {};
    allDates.forEach((date) => {
      map[date] = events.filter((ev) => ev.date === date);
    });
    return map;
  }, [events, allDates]);

  return (
    <DndProvider backend={HTML5Backend}>
      <h2 className="calendar-title">Interactive Calendar</h2>

      <form className="add-event-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="New event title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>

      <div className="calendar-grid">
        {allDates.map((date) => (
          <DayColumn
            key={date}
            date={date}
            events={eventsByDate[date]}
            onDropEvent={handleDropEvent}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </DndProvider>
  );
}
