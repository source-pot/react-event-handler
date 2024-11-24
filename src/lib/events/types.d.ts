import {Item} from "../task-list/types";

export type EventPayload = object

export interface Event<Payload extends EventPayload> {
  name: string;
  payload: Payload;
}

export interface AddTaskEvent extends Event {
  name: 'addTask'
  payload: {
    item: Item
    time: Date
  }
}

export interface DeleteTaskEvent extends Event {
  name: 'deleteTask'
  payload: {
    item: Item
    time: Date
  }
}

export interface CompleteTaskEvent extends Event {
  name: 'completeTask'
  payload: {
    item: Item
    time: Date
  }
}
