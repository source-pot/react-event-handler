import {FormEvent, useRef} from "react";
import {emit} from "../lib/events/emitter.ts";

export function AddItemForm() {
  const itemRef = useRef<HTMLInputElement>(null)

  function addItem(e: FormEvent) {
    e.preventDefault()

    emit('addButtonClicked', {time: new Date(), item: itemRef.current!.value})
    itemRef.current!.value = ''
  }

  return (
    <form onSubmit={addItem} className={'space-x-2'}>
      <input type={'text'} ref={itemRef} className={'border rounded bg-slate-500 text-slate-50 px-2 py-1'}/>
      <button className={'border rounded px-2 py-1'}>Add</button>
    </form>
  )
}