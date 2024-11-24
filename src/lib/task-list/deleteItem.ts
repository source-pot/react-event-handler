import {emit} from "../events/emitter.ts";
import {Item} from "./types";

/**
 * The way we "delete" a task is by emitting this event with the item attached.
 */
export function deleteItem(item: Item) {
  emit('deleteTask', {
    time: new Date(), item
  })
}
