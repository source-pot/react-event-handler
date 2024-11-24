import {useEffect, useState} from "react";
import {subscribe} from "../events/emitter.ts";
import {AddTaskEvent, CompleteTaskEvent, DeleteTaskEvent} from "../events/types";
import {Item} from "./types";

export function useTaskList() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => (
    subscribe<AddTaskEvent>('addTask', ({item}) => {
      setItems(items => [...items, item])
    })
  ), [])

  useEffect(() => (
    subscribe<DeleteTaskEvent>('deleteTask', ({item}) => {
      setItems(items => items.filter(i => i.name !== item.name))
    })
  ), [])

  useEffect(() => (
    subscribe<CompleteTaskEvent>('completeTask', ({item}) => {
      setItems(items => items.map(i => i.name === item.name ? {...i, completed: !i.completed} : i))
    })
  ), [])

  return items
}
