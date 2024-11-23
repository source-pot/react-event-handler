import {emit} from "../lib/events/emitter.ts";

export function Item({ name }: { name: string }) {

  function deleteItem() {
    emit('deleteButtonClicked', {time: new Date(), item: name})
  }

  return (
    <li className={'flex justify-between items-center hover:bg-slate-800 rounded'}>
      <span>{name}</span>
      <button onClick={deleteItem}>Delete</button>
    </li>
  )
}