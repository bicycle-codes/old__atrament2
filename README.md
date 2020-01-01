# Atrament

**A small JS library for beautiful drawing and handwriting on the HTML Canvas**

---

![](demo/img/muchotravka.png)

[![Build Status](https://travis-ci.org/jakubfiala/atrament.js.svg?branch=master)](https://travis-ci.org/jakubfiala/atrament.js)

Atrament is a library that enables the user to draw smooth, natural drawings and handwriting on the HTML canvas.
The algorithm was originally developed about 2 weeks after I started learning JavaScript, as I wanted to build a
collaborative drawing space on the web, which ended up being [1WALL](http://fiala.uk/1wall). I wanted the drawing to
feel natural and comfortable, and the result to be smooth and pleasing. Years later, I've taken the algorithm,
improved it, rewrote it in ES6 and made it into a neat little library.

**FEATURES:**

- Draw/Fill/Erase modes
- Adjustable adaptive smoothing
- Events tracking the drawing - this allows the app to "replay" or reconstruct the drawing, e.g. for undo functionality
- Adjustable opacity, line thickness and colour

[Here's a basic demo.](http://fiala.uk/atrament.js/demo/)

Enjoy!

- [Atrament](#atrament)
  - [Installation](#installation)
      - [as a module](#as-a-module)
      - [script tag](#script-tag)
      - [polymer](#polymer)
  - [Usage](#usage)
  - [Options &amp; config](#options-amp-config)
  - [Events](#events)
    - [Dirty/clean](#dirtyclean)
    - [Stroke start/end](#stroke-startend)
    - [Fill start/end](#fill-startend)
    - [Stroke recording](#stroke-recording)
  - [Development](#development)

## Installation

#### as a module

If you're using a tool like webpack or browserify to bundle your code, you can install it using npm.

- install atrament as a dependency using `npm install --save atrament`.
- You can access the Atrament class using `const Atrament = require('atrament');`

#### script tag

Include the script located at [dist/atrament.min.js](https://github.com/jakubfiala/atrament.js/raw/master/dist/atrament.min.js) in the `<head>` tag of your HTML.

Alternatively, you can use Bower: `bower install atrament` and include `bower_components/atrament/dist/atrament.min.js` as a script tag.

#### polymer

Thanks to [rubenstolk](https://github.com/rubenstolk), you can also use the [sc-atrament](https://github.com/safetychanger/sc-atrament) Polymer element.

## Usage

- create a `<canvas>` tag, e.g.:

```html
<canvas id="sketchpad" width="500" height="500"></canvas>
```

- in your JavaScript, create an `Atrament` instance passing it your canvas object:

```js
const canvas = document.querySelector('#sketchpad');
const sketchpad = new Atrament(canvas);
```

- you can also pass the width, height and default colour to the constructor:

```js
const sketchpad = new Atrament(canvas, {
  width: 500,
  height: 500,
  color: 'orange',
});
```

- that's it, happy drawing!

## Options & config

- clear the canvas:

```js
sketchpad.clear();
```

- change the line thickness:

```js
sketchpad.weight = 20; //in pixels
```

- change the color:

```js
sketchpad.color = '#ff485e'; //just like CSS
```

- toggle between modes:

```js
sketchpad.mode = 'erase'; // eraser tool
sketchpad.mode = 'fill'; // click to fill area
sketchpad.mode = 'draw'; // default
```

- tweak smoothing - higher values make the drawings look much better, lower values make drawing feel a bit more responsive. Set to `0.85` by default.

```js
sketchpad.smoothing = false;
```

- toggle adaptive stroke, i.e. line width changing based on drawing speed for a more natural effect. `true` by default.

```js
sketchpad.adaptiveStroke = false;
```

- change the opacity:

```js
sketchpad.opacity = 0.5; //number between 0-1
```

- export as image:

```js
//we have to get the dataURL of the image
const dataURL = sketchpad.toImage();
//then we can, for instance, open a new window with it
window.open(dataURL);
```

## Events

### Dirty/clean

These events fire when the canvas is first drawn on, and when it's cleared.
The state is stored in the `isDirty` property.

```js
sketchpad.addEventListener('dirty', () => console.info(sketchpad.isDirty));
sketchpad.addEventListener('clean', () => console.info(sketchpad.isDirty));
```

### Stroke start/end

These events don't provide any data - they just inform that a stroke has started/finished.

```js
sketchpad.addEventListener('strokestart', () => console.info('strokestart'));
sketchpad.addEventListener('strokeend', () => console.info('strokeend'));
```

### Fill start/end

These only fire in fill mode. The `fillstart` event also contains `x` and `y` properties
denoting the starting point of the fill operation (where the user has clicked).

```js
sketchpad.addEventListener('fillstart', ({ x, y }) =>
  console.info(`fillstart ${x} ${y}`),
);
sketchpad.addEventListener('fillend', () => console.info('fillend'));
```

### Stroke recording

Fires at the same time as `strokeend` and contains data necessary for reconstructing the stroke.

```js
sketchpad.addEventListener('strokerecorded', ({ stroke }) =>
  console.info(stroke),
);
/*
{
  points: Array<Point>,
  color,
  weight,
  opacity,
  smoothing,
  adaptiveStroke,
}
*/
```

## Development

To obtain the dependencies, `cd` into the atrament directory and run `npm install`.
You should be able to then build atrament by simply running `npm run build`.

I didn't bother writing tests because it's such a small package. Contributions are welcome!
