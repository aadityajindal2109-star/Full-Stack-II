import React from "react";
import { useDrop } from "react-dnd";
import EventCard from "./EventCard";

const DayColumn = React.memo(({ date, events, onDropEvent, onDelete }) => {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "EVENT",
    drop: (item) => onDropEvent(item.id, date),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const dayLabel = new Date(date + "T00:00:00").toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div ref={dropRef} className={`day-column ${isOver ? "day-column-over" : ""}`}>
      <h4>{dayLabel}</h4>
      {events.map((event) => (
        <EventCard key={event.id} event={event} onDelete={onDelete} />
      ))}
      {events.length === 0 && <div className="empty-hint">Drop here</div>}
    </div>
  );
});

DayColumn.displayName = "DayColumn";
export default DayColumn;
