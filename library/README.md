<h1 align="center"><code>concall.js</code></h1>

<p align="center">Debouncing, throttling and more</p>

## ⚙️ Installation

```terminal
npm i concall
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/concall
- https://www.unpkg.com/concall

## 📖 Usage

#### ◉ Import

```js
// ES6
import concall from "concall";

// commonjs
const concall = require("concall");
```

#### ◉ Debounce

```js
const func = concall.debounce((text) => {
    console.log(text);
}, 2000); // (function, delay)

func("Hello world!");

func("Hello world!");

func("Hello world!");
```

#### ◉ Throttle

```js
const func = concall.throttle((text) => {
    console.log(text);
}, 2000); // (function, delay)

func("Hello world!");

func("Hello world!");

func("Hello world!");
```

#### ◉ Delay

```js
const func = concall.delay((text) => {
    console.log(text);
}, 2000); // (function, delay)

func("Hello world!");
```

#### ◉ Repeat forever

```js
const func = concall.repeat((text) => {
    console.log(text);
}, 2000); // (function, delay)

func("Hello world!");
```

#### ◉ Repeat "n" times

```js
const func = concall.repeat((text) => {
    console.log(text);
}, 2000, 2); // (function, delay, times)

func("Hello world!"); // will repeat 2 times
```

---

[Support me on Patreon](https://www.patreon.com/axorax) — 
[Check out my socials](https://github.com/axorax/socials)