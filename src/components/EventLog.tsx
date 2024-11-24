import {useEventLog} from "../lib/events/useEventLog.ts";

export function EventLog() {
  const {events, clearEvents} = useEventLog();

  return (
    <section className={'space-y-4'}>
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
      <button onClick={() => clearEvents()} className={'rounded border px-2 py-1'}>Clear events</button>
    </section>
  )
}
