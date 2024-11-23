import {useEventLog} from "../lib/events/useEventLog.ts";

export function EventLog() {
  const {events, clearEvents} = useEventLog();

  return (
    <>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <button onClick={() => clearEvents()} className={'rounded border px-2 py-1'}>Clear events</button>
    </>
  )
}
