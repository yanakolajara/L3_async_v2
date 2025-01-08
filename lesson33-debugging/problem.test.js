const EventManager = require("./problem");

describe("Event Manager", () => {
  let eventManager;

  beforeEach(() => {
    eventManager = new EventManager();
  });

  it("should add an event", () => {
    eventManager.addEvent("Birthday Party", "2022-01-01");
    expect(eventManager.events.length).toBe(1);
  });

  it("should remove an event", () => {
    eventManager.addEvent("Meeting", "2022-02-15");
    eventManager.removeEvent("Meeting");
    expect(eventManager.events.length).toBe(0);
  });

  it("should get all events", () => {
    eventManager.addEvent("Conference", "2022-03-20");
    eventManager.addEvent("Workshop", "2022-04-10");
    expect(eventManager.getAllEvents()).toEqual(["Conference", "Workshop"]);
  });

  it("should get events on a specific date", () => {
    eventManager.addEvent("Meeting", "2022-05-05");
    eventManager.addEvent("Party", "2022-05-05");
    eventManager.addEvent("Conference", "2022-06-10");
    expect(eventManager.getEventsByDate("2022-05-05")).toEqual([
      "Meeting",
      "Party",
    ]);
  });

  it("should return an empty array if no events found on a specific date", () => {
    eventManager.addEvent("Conference", "2022-07-15");
    expect(eventManager.getEventsByDate("2022-07-20")).toEqual([]);
  });
});
