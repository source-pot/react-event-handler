import {EventLog} from "./components/EventLog.tsx";
import {emit} from "./lib/events/emitter.ts";

export function App() {
  return (
    <main className={'grid grid-cols-3'}>
      <section>
        <button onClick={() => emit('addButtonClicked', {time: new Date()})} className={'border rounded px-2 py-1'}>addButtonClick</button>
      </section>
      <section>
        something that responds to events
      </section>
      <section>
        <EventLog/>
      </section>
    </main>
  )
}
