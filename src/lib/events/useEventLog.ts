import {useEffect, useState} from "react";
import {subscribe} from "./emitter.ts";
import {AddTaskEvent, CompleteTaskEvent, DeleteTaskEvent} from "./types";

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
