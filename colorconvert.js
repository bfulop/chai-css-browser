/*
  Credits to http://www.javascripter.net/faq/hextorgb.htm
  for the hex to rgb and rgb to hex conversion
*/

function toHex (n) {
  n = parseInt(n, 10)
  if (isNaN(n)) return '00'
  n = Math.max(0, Math.min(n, 255))
  return '0123456789ABCDEF'.charAt((n - n % 16) / 16)
      + '0123456789ABCDEF'.charAt(n % 16)
}

function convertRgbToHex (colordef) {
  var components = colordef.substr(4, 12).split(',')
  components
  return `#${toHex(components[0])}${toHex(components[1])}${toHex(components[2])}`
}

function hexToR (h) { return parseInt((cutHex(h)).substring(0, 2), 16) }
function hexToG (h) { return parseInt((cutHex(h)).substring(2, 4), 16) }
function hexToB (h) { return parseInt((cutHex(h)).substring(4, 6), 16) }
function cutHex (h) { return (h.charAt(0) == '#') ? h.substring(1, 7) : h }

function convertHexToRgb (colordef) {
  return `rgb(${hexToR(colordef)},${hexToG(colordef)},${hexToB(colordef)})`
}

function convertHexToRgbA (colordef) {
  return `rgb(${hexToR(colordef)},${hexToG(colordef)},${hexToB(colordef)},1)`
}

function getRgbaOpacity (colordef) {
  var components = colordef.substr(4, 16).split(',')
  components
  return parseFloat(components[3])
}

function convertColorMode (colordef, target) {
  var currentcolordef = getColorMode(colordef)
  if (currentcolordef === target) {
    return colordef
  } else {
    switch (currentcolordef + 'to' + target) {
      case 'hextorgb':
        return convertHexToRgb(colordef)
      case 'hextorgba':
        return convertHexToRgbA(colordef)
      case 'rgbtohex':
        return convertRgbToHex(colordef)
      case 'rgbtorgba':
        return colordef.replace(')', ',1)')
      default:
        return colordef
    }
  }
}

function getColorMode (colordef) {
  switch (colordef.replace(/#/, 'h').replace(/rgba/, 'o').substr(0, 1)) {
    case 'h':
      return 'hex'
    case 'r':
      return 'rgb'
    case 'o':
      return 'rgba'
    default:
      return colordef
  }
  return colordef
}

function colorsMatch (source, target) {
  source = source.replace(/\s/g, '')
  target = target.replace(/\s/g, '')
  return convertColorMode(source, getColorMode(target)) === target
}
