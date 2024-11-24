import {Event, EventPayload} from './types'

/**
 * This is what a "listener" function looks like.  It's just a function that accepts an event payload and returns nothing.
 */
type Subscriber<Payload extends EventPayload> = (payload: Payload) => void | Promise<void>

/**
 * This is the list of all events that have subscribers.  It'll build up dynamically as subscribers are added and removed.
 */
const subscribers = new Map<string, Set<Subscriber<EventPayload>>>()

/**
 * The way we subscribe is by calling this function with the event we want to subscribe to (a simple string) and the
 * function we want to have called when that event is emitted.
 * For completeness, we'll return an unsubscribe function here for React to use in useEffect cleanup.
 */
export function subscribe<T extends Event<EventPayload>>(eventName: T['name'], subscriber: Subscriber<T['payload']>) {
  if (!subscribers.has(eventName)) {
    subscribers.set(eventName, new Set())
  }

  subscribers.get(eventName)!.add(subscriber)
  return () => {
    subscribers.get(eventName)!.delete(subscriber)
  }
}

/**
 * This is the function that emits an event.  It takes the event name and the payload to send to all subscribers of that
 * event.
 */
export function emit<T extends Event<EventPayload>>(eventName: T['name'], payload: T['payload']) {
  if (subscribers.has(eventName)) {
    subscribers.get(eventName)!.forEach(subscriber => subscriber(payload));
  }
}
