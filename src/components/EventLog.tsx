import {useEventLog} from "../lib/events/useEventLog.ts";

/**
 * For the purposes of this demo, the Event Log just lists out a count of events emitted while being used.
 */
export function EventLog() {
  const {events, clearEvents} = useEventLog();

  return (
    <section className={'space-y-4'}>
      <ul>
        {(Object.entries(events)).map(([event, count], index) => (
          <li key={index}>{event}: <code>{count}</code></li>
        ))}
      </ul>
      <button onClick={() => clearEvents()} className={'rounded border px-2 py-1'}>Clear events</button>
    </section>
  )
}
