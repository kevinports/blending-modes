blending-modes
==============

Photoshop two-color blending formulas in JS
based on: http://media.chikuyonok.ru/canvas-blending/


Basic usage:

```coffeescript

multiply = blendingModes.multiply

pixelA = 
  r: 0
  g: 60
  b: 255

pixelB = 
  r: 45
  g: 27
  b: 134

pixelC = 
  r: multiply( pixelA.r, pixelB.r )
  g: multiply( pixelA.g, pixelB.g )
  b: multiply( pixelA.b, pixelB.b )

```