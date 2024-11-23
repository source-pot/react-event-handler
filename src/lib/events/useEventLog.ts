import {useEffect, useState} from "react";
import {subscribe} from "./emitter.ts";
import {AddButtonClickedEvent, DeleteButtonClickedEvent} from "./types";

export function useEventLog() {
  const [events, setEvents] = useState<string[]>([])

  useEffect(() => (
    subscribe<AddButtonClickedEvent>('addButtonClicked', (payload) => {
      setEvents(events => [...events, `addButtonClicked: ${payload.item}`])
    })
  ), [])

  useEffect(() => (
    subscribe<DeleteButtonClickedEvent>('deleteButtonClicked', (payload) => {
      setEvents(events => [...events, `deleteButtonClicked: ${payload.item}`])
    })
  ), [])

  return {
    events,
    clearEvents: () => setEvents([])
  };
}
