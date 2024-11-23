import {useEffect, useState} from "react";
import {subscribe} from "../events/emitter.ts";
import {AddButtonClickedEvent, DeleteButtonClickedEvent} from "../events/types";

export function useTaskList() {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => (
    subscribe<AddButtonClickedEvent>('addButtonClicked', ({item}) => {
      setItems(items => [...items, item])
    })
  ), [])

  useEffect(() => (
    subscribe<DeleteButtonClickedEvent>('deleteButtonClicked', ({item}) => {
      setItems(items => items.filter(i => i !== item))
    })
  ), [])

  return items
}
