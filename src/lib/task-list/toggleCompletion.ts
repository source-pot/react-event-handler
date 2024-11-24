import {emit} from "../events/emitter.ts";
import {Item} from "./types";

/**
 * The way we "complete" a task (we'll toggle completion just for this demo) is by emitting this event with the item
 * attached.
 */
export function toggleCompletion(item: Item) {
  emit('completeTask', {
    time: new Date(), item
  })
}
