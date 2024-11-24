import {useTaskList} from "../lib/task-list/useTaskList.ts";
import {Item} from "./Item.tsx";

/**
 * This component renders the list of items it receives from its useTaskList hook.
 */
export function ItemList() {
  const items = useTaskList()

  return (
    <section className={'p-4'}>
      <h2 className={'border-b'}>Items</h2>
      <ul>
        {items.map(item => (
          <Item key={item.id} item={item}/>
        ))}
      </ul>
    </section>
  )
}