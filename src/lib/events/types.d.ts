
export type EventPayload = object

export interface Event<Payload extends EventPayload> {
  name: string;
  payload: Payload;
}

export interface AddButtonClickedEvent extends Event<AddButtonClickedPayload> {
  name: 'addButtonClicked'
  payload: {
    item: string
    time: Date
  }
}

export interface DeleteButtonClickedEvent extends Event<DeleteButtonClickedPayload> {
  name: 'deleteButtonClicked'
  payload: {
    item: string
    time: Date
  }
}
