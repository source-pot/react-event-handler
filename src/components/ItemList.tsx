import {useTaskList} from "../lib/task-list/useTaskList.ts";
import {Item} from "./Item.tsx";

export function ItemList() {
  const items = useTaskList()

  return (
    <section className={'p-4'}>
      <h2 className={'border-b'}>Items</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index} name={item.name} completed={item.completed}/>
        ))}
      </ul>
    </section>
  )
}