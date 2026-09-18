import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EventCard from "./EventCard";

describe("EventCard", () => {
  it("renders event title", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <EventCard event={{ id: 1, title: "Meeting" }} onDelete={() => {}} />
      </DndProvider>
    );
    expect(screen.getByText("Meeting")).toBeInTheDocument();
  });

  it("calls onDelete when the delete button is clicked", () => {
    const onDelete = vi.fn();
    render(
      <DndProvider backend={HTML5Backend}>
        <EventCard event={{ id: 1, title: "Meeting" }} onDelete={onDelete} />
      </DndProvider>
    );
    screen.getByTitle("Delete event").click();
    expect(onDelete).toHaveBeenCalledWith(1);
  });
});
