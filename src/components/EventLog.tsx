import {useEffect, useState} from "react";
import {subscribe} from "../lib/events/emitter.ts";

export function EventLog() {
  const [events, setEvents] = useState<string[]>([])

  useEffect(() => (
    subscribe('addButtonClicked', (data) => {
      setEvents(events => [...events, `addButtonClicked: ${data.time.toLocaleString()}`])
    })
  ), [])

  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  )
}
