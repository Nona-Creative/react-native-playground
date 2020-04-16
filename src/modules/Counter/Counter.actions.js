export const INCREMENT_COUNT = '[Counter] Increment Count'
export const incrementCount = amount => ({ type: INCREMENT_COUNT, payload: amount })

export const DECREMENT_COUNT = '[Counter] Decrement Count'
export const decrementCount = amount => ({ type: DECREMENT_COUNT, payload: amount })
