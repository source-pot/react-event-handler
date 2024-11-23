import {Event, EventPayload} from './types'

type Subscriber<Payload extends EventPayload> = (payload: Payload) => void

const subscribers = new Map<string, Set<Subscriber<EventPayload>>>()

export function emit<T extends Event<EventPayload>>(eventName: T['name'], payload: T['payload']) {
  if (subscribers.has(eventName)) {
    subscribers.get(eventName)!.forEach(subscriber => subscriber(payload));
  }
}

export function subscribe<T extends Event<EventPayload>>(eventName: T['name'], subscriber: Subscriber<T['payload']>) {
  if (!subscribers.has(eventName)) {
    subscribers.set(eventName, new Set())
  }

  subscribers.get(eventName)!.add(subscriber)
  return () => {
    subscribers.get(eventName)!.delete(subscriber)
  }
}
