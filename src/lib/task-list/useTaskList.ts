import {useEffect, useState} from "react";
import {subscribe} from "../events/emitter.ts";
import {AddTaskEvent, CompleteTaskEvent, DeleteTaskEvent} from "../events/types";
import {Item} from "./types";

export function useTaskList() {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => (
    subscribe<AddTaskEvent>('addTask', async ({item}) => {
      setItems(items => [...items, item])
    })
  ), [])

  useEffect(() => (
    subscribe<DeleteTaskEvent>('deleteTask', async ({item}) => {
      setItems(items => items.filter(i => i.id !== item.id))
    })
  ), [])

  useEffect(() => (
    subscribe<CompleteTaskEvent>('completeTask', async ({item}) => {
      setItems(items => items.map(i => i.id === item.id ? {...i, completed: !i.completed} : i))
    })
  ), [])

  return items
}
