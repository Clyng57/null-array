
# NullArray
Create a null prototype Array. The created array will have no methods.
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

<br />

## Table of Contents
- [ Installation ](#install)
- [ Usage ](#Usage)

<br />

<a name="install"></a>
## Install

```console
npm i null-array
```

<br />

<a name="Usage"></a>
## Usage

```js
import NullArray from 'null-array'

const nullArray = new NullArray()
nullArray.length // returns 0
nullArray.push // returns undefined
```


```js
import NullArray from 'null-array'

const nullArray = new NullArray('a', 'b', 'c')
nullArray.length // returns 3
nullArray.push // returns undefined
nullArray[-1] // returns 'c'
```
