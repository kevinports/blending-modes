
blendingModes =
  normal: (a, b) ->
    a

  lighten: (a, b) ->
    (if (b > a) then b else a)

  darken: (a, b) ->
    (if (b > a) then a else b)

  multiply: (a, b) ->
    (a * b) / 255

  average: (a, b) ->
    (a + b) / 2

  add: (a, b) ->
    Math.min 255, a + b

  substract: (a, b) ->
    (if (a + b < 255) then 0 else a + b - 255)

  difference: (a, b) ->
    Math.abs a - b

  negation: (a, b) ->
    255 - Math.abs(255 - a - b)

  screen: (a, b) ->
    255 - (((255 - a) * (255 - b)) >> 8)

  exclusion: (a, b) ->
    a + b - 2 * a * b / 255

  overlay: (a, b) ->
    (if b < 128 then (2 * a * b / 255) else (255 - 2 * (255 - a) * (255 - b) / 255))

  softLight: (a, b) ->
    (if b < 128 then (2 * ((a >> 1) + 64)) * (b / 255) else 255 - (2 * (255 - ((a >> 1) + 64)) * (255 - b) / 255))

  hardLight: (a, b) ->
    @overlay b, a

  colorDodge: (a, b) ->
    (if b is 255 then b else Math.min(255, ((a << 8) / (255 - b))))

  colorBurn: (a, b) ->
    (if b is 0 then b else Math.max(0, (255 - ((255 - a) << 8) / b)))

  linearDodge: (a, b) ->
    @add a, b

  linearBurn: (a, b) ->
    @substract a, b

  linearLight: (a, b) ->
    (if b < 128 then @linearBurn(a, 2 * b) else @linearDodge(a, (2 * (b - 128))))

  vividLight: (a, b) ->
    (if b < 128 then @colorBurn(a, 2 * b) else @colorDodge(a, (2 * (b - 128))))

  pinLight: (a, b) ->
    (if b < 128 then @darken(a, 2 * b) else @lighten(a, (2 * (b - 128))))

  hardMix: (a, b) ->
    (if @vividLight(a, b) < 128 then 0 else 255)

  reflect: (a, b) ->
    (if b is 255 then b else Math.min(255, (a * a / (255 - b))))

  glow: (a, b) ->
    @reflect b, a

  phoenix: (a, b) ->
    Math.min(a, b) - Math.max(a, b) + 255