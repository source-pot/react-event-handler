import {EventLog} from "./components/EventLog.tsx";
import {ItemList} from "./components/ItemList.tsx";
import {AddItemForm} from "./components/AddItemForm.tsx";

export function App() {
  return (
    <main className={'flex flex-col gap-4 max-w-xl w-xl mx-auto border rounded-xl p-8'}>
      <section className={'flex flex-col gap-2 items-start'}>
        <AddItemForm/>
      </section>
      <ItemList/>
      <section>
        <EventLog/>
      </section>
    </main>
  )
}
