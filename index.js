
class ArrayProxyHandler {
  get (target, key, receiver) {
    if (typeof key !== 'string') {
      return Reflect.get(target, key, receiver)
    }

    if (key === 'length') {
      return Reflect.get(target, key, receiver)
    }

    let index = Number(key)

    if (Number.isNaN(index)) {
      return Reflect.get(target, key, receiver)
    }

    if (index < 0) {
      index += target.length
    }

    return target[index]
  }

  set (target, key, value, receiver) {
    if (typeof key !== 'string') {
      return Reflect.set(target, key, value, receiver)
    }

    let index = Number(key)

    if (Number.isNaN(index)) {
      return Reflect.set(target, key, value, receiver)
    }

    if (index < 0) {
      index += target.length
    }

    target[index] = value

    return true
  }
}

export default class NullArray extends null {
  constructor (...args) {
    const self = Reflect.construct(Array, args, new.target)

    return new Proxy(
      self,
      new ArrayProxyHandler()
    )
  }
}
