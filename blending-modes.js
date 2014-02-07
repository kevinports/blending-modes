
var blendingModes = {
    normal: function(a, b) {
      return a;
    },
    lighten: function(a, b) {
      if (b > a) {
        return b;
      } else {
        return a;
      }
    },
    darken: function(a, b) {
      if (b > a) {
        return a;
      } else {
        return b;
      }
    },
    multiply: function(a, b) {
      return (a * b) / 255;
    },
    average: function(a, b) {
      return (a + b) / 2;
    },
    add: function(a, b) {
      return Math.min(255, a + b);
    },
    substract: function(a, b) {
      if (a + b < 255) {
        return 0;
      } else {
        return a + b - 255;
      }
    },
    difference: function(a, b) {
      return Math.abs(a - b);
    },
    negation: function(a, b) {
      return 255 - Math.abs(255 - a - b);
    },
    screen: function(a, b) {
      return 255 - (((255 - a) * (255 - b)) >> 8);
    },
    exclusion: function(a, b) {
      return a + b - 2 * a * b / 255;
    },
    overlay: function(a, b) {
      if (b < 128) {
        return 2 * a * b / 255;
      } else {
        return 255 - 2 * (255 - a) * (255 - b) / 255;
      }
    },
    softLight: function(a, b) {
      if (b < 128) {
        return (2 * ((a >> 1) + 64)) * (b / 255);
      } else {
        return 255 - (2 * (255 - ((a >> 1) + 64)) * (255 - b) / 255);
      }
    },
    hardLight: function(a, b) {
      return this.overlay(b, a);
    },
    colorDodge: function(a, b) {
      if (b === 255) {
        return b;
      } else {
        return Math.min(255, (a << 8) / (255 - b));
      }
    },
    colorBurn: function(a, b) {
      if (b === 0) {
        return b;
      } else {
        return Math.max(0, 255 - ((255 - a) << 8) / b);
      }
    },
    linearDodge: function(a, b) {
      return this.add(a, b);
    },
    linearBurn: function(a, b) {
      return this.substract(a, b);
    },
    linearLight: function(a, b) {
      if (b < 128) {
        return this.linearBurn(a, 2 * b);
      } else {
        return this.linearDodge(a, 2 * (b - 128));
      }
    },
    vividLight: function(a, b) {
      if (b < 128) {
        return this.colorBurn(a, 2 * b);
      } else {
        return this.colorDodge(a, 2 * (b - 128));
      }
    },
    pinLight: function(a, b) {
      if (b < 128) {
        return this.darken(a, 2 * b);
      } else {
        return this.lighten(a, 2 * (b - 128));
      }
    },
    hardMix: function(a, b) {
      if (this.vividLight(a, b) < 128) {
        return 0;
      } else {
        return 255;
      }
    },
    reflect: function(a, b) {
      if (b === 255) {
        return b;
      } else {
        return Math.min(255, a * a / (255 - b));
      }
    },
    glow: function(a, b) {
      return this.reflect(b, a);
    },
    phoenix: function(a, b) {
      return Math.min(a, b) - Math.max(a, b) + 255;
    }
  };

