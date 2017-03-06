/* global describe it before, expect  */

describe('checking equality', function () {
  describe('checking same type color', function () {
    it('same hex colors', function () {
      expect(colorsMatch('#ffffff', '#ffffff')).to.be(true)
    })
    it('same rgb colors, but with space', function () {
      expect(colorsMatch('rgb(0 , 0,0)', 'rgb( 0,0, 0)')).to.be(true)
    })
    it('same rgb colors, but with space', function () {
      expect(colorsMatch('rgb(0 , 0,1)', 'rgb( 0,0, 0)')).to.be(false)
    })
  })
  it('normalises white spaces', function () {
    expect(colorsMatch('#f f ffff', 'rgb(255 ,255 , 255)')).to.be(true)
  })
})

describe('get rgba opacity', function () {
  it('returns opacity value', function () {
    expect(getRgbaOpacity('rgba(13,14,15,0.2)')).to.be(0.2)
  })
  it('values above 100', function () {
    expect(getRgbaOpacity('rgba(130,140,150,0.3)')).to.be(0.3)
  })
})

describe('get target color mode', function () {
  it('detects hex mode', function () {
    expect(getColorMode('#tttttt')).to.be('hex')
  })
  it('detects rgb mode', function () {
    expect(getColorMode('rgb(23,23,23)')).to.be('rgb')
  })
  it('rgba mode', function () {
    expect(getColorMode('rgba(23,23,23,1)')).to.be('rgba')
  })
  it('unknown mode', function () {
    expect(getColorMode('pants')).to.be('pants')
  })
})

describe('convert color to another mode', function () {
  it('hex to rgb', function () {
    expect(convertColorMode('#ffffff', 'rgb')).to.be('rgb(255,255,255)')
  })
  it('#FFEEFF to rgb', function () {
    expect(convertColorMode('#FFEEFF', 'rgb')).to.be('rgb(255,238,255)')
  })
  it('rgb to hex', function () {
    expect(convertColorMode('rgb(42,255,12)', 'hex')).to.be('#2AFF0C')
  })
  it('rgba to hex (full opacity)', function () {
    expect(convertColorMode('rgb(42,255,12,1)', 'hex')).to.be('#2AFF0C')
  })
  it('hex to rgba', function () {
    expect(convertColorMode('#eeaabb', 'rgba')).to.be('rgb(238,170,187,1)')
  })
  it('rgb to rgba', function () {
    expect(convertColorMode('rgb(42,42,12)', 'rgba')).to.be('rgb(42,42,12,1)')
  })
  it('rgba to hex (half opacity)', function () {
    expect(convertColorMode('rgba(42,255,12,0.5)', 'hex')).to.be('rgba(42,255,12,0.5)')
  })
  it('rgba to rgb (half opacity', function () {
    expect(convertColorMode('rgba(42,43,44,0.2)', 'rgb')).to.be('rgba(42,43,44,0.2)')
  })
})

