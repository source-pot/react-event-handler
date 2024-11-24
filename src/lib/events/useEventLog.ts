import {useEffect, useState} from "react";
import {subscribe} from "./emitter.ts";
import {AddTaskEvent, CompleteTaskEvent, DeleteTaskEvent} from "./types";

/**
 * This hook subscribes to the 3 events we're using in this demo and keeps track of how many times each event has been
 * emitted in a local state variable.  Each time an event is emitted, the state update causes the UI component this is
 * attached to to re-render and display the new counts.
 */
export function useEventLog() {
  const [events, setEvents] = useState<Record<string,number>>({})

  useEffect(() => (
    subscribe<AddTaskEvent>('addTask', () => {
      setEvents(events => ({
        ...events,
        addTask: (events.addTask ?? 0) + 1
      }))
    })
  ), [])

  useEffect(() => (
    subscribe<DeleteTaskEvent>('deleteTask', () => {
      setEvents(events => ({
        ...events,
        deleteTask: (events.deleteTask ?? 0) + 1
      }))
    })
  ), [])

  useEffect(() => (
    subscribe<CompleteTaskEvent>('completeTask', () => {
      setEvents(events => ({
        ...events,
        completeTask: (events.completeTask ?? 0) + 1
      }))
    })
  ), [])

  return {
    events,
    clearEvents: () => setEvents(_ => ({}))
  };
}
