import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/events", () => {
    return HttpResponse.json([{ id: 1, title: "Mock Event", date: "2026-09-07" }]);
  }),
];
