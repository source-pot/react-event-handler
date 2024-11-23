
export type Subscriber = (data: unknown) => void

const subscribers = new Map<string, Set<Subscriber>>()

export function emit(eventName: string, data: unknown) {
  if (subscribers.has(eventName)) {
    subscribers.get(eventName)!.forEach(subscriber => subscriber(data));
  }

  if (subscribers.has('*')) {
    subscribers.get('*')!.forEach(subscriber => subscriber(data));
  }
}

export function subscribe(eventName: string, subscriber: Subscriber) {
  if (!subscribers.has(eventName)) {
    subscribers.set(eventName, new Set())
  }

  subscribers.get(eventName)!.add(subscriber)
  return () => {
    subscribers.get(eventName)!.delete(subscriber)
  }
}
