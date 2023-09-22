
declare module 'null-array'

export default class NullArray<E> extends null {
  constructor (...args: Array<E>)
  constructor (arrayLength: number)
  [Index: number]: E
  get length (): number
  set length (newLength: number)
}
