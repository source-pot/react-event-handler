import {EventLog} from "./components/EventLog.tsx";
import {ItemList} from "./components/ItemList.tsx";
import {AddItemForm} from "./components/AddItemForm.tsx";

export function App() {
  return (
    <main className={'p-8 grid lg:grid-cols-2 gap-4'}>
      <section className={'flex flex-col gap-4'}>
        <AddItemForm/>
        <ItemList/>
      </section>
      <EventLog/>
    </main>
  )
}
