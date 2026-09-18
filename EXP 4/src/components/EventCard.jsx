import React from "react";
import { useDrag } from "react-dnd";

const EventCard = React.memo(({ event, onDelete }) => {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "EVENT",
    item: { id: event.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={dragRef}
      className="event-card"
      style={{
        opacity: isDragging ? 0.4 : 1,
        transform: isDragging ? "scale(0.95)" : "scale(1)",
      }}
    >
      <span>{event.title}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          onDelete(event.id);
        }}
        title="Delete event"
      >
        ×
      </button>
    </div>
  );
});

EventCard.displayName = "EventCard";
export default EventCard;
