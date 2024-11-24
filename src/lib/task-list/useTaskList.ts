import {useEffect, useState} from "react";
import {subscribe} from "../events/emitter.ts";
import {AddTaskEvent, CompleteTaskEvent, DeleteTaskEvent} from "../events/types";
import {Item} from "./types";

/**
 * This is where the whole task list is stored.  We just listen to the events that should modify the list and update
 * it accordingly when they happen.  The only "whole list" state is stored here and the list will be unique to the
 * component that uses this hook.
 */
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
