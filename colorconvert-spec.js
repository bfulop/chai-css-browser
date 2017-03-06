/* global describe it before, expect  */

// var expect = chai.expect

describe('checking equality', function () {
  describe('checking same type color', function () {
    it('same hex colors', function () {
      expect(colorsMatch('#ffffff', '#ffffff')).to.equal(true)
    })
    it('same rgb colors, but with space', function () {
      expect(colorsMatch('rgb(0 , 0,0)', 'rgb( 0,0, 0)')).to.equal(true)
    })
    it('same rgb colors, but with space', function () {
      expect(colorsMatch('rgb(0 , 0,1)', 'rgb( 0,0, 0)')).to.equal(false)
    })
  })
  it('normalises white spaces', function () {
    expect(colorsMatch('#f f ffff', 'rgb(255 ,255 , 255)')).to.equal(true)
  })
  it('converts and checks equality', function () {
    expect(colorsMatch('#BBCCDD', 'rgb(187, 204, 221)')).to.equal(true)
  })
})

describe('get rgba opacity', function () {
  it('returns opacity value', function () {
    expect(getRgbaOpacity('rgba(13,14,15,0.2)')).to.equal(0.2)
  })
  it('values above 100', function () {
    expect(getRgbaOpacity('rgba(130,140,150,0.3)')).to.equal(0.3)
  })
})

describe('get target color mode', function () {
  it('detects hex mode', function () {
    expect(getColorMode('#tttttt')).to.equal('hex')
  })
  it('detects rgb mode', function () {
    expect(getColorMode('rgb(23,23,23)')).to.equal('rgb')
  })
  it('rgba mode', function () {
    expect(getColorMode('rgba(23,23,23,1)')).to.equal('rgba')
  })
  it('unknown mode', function () {
    expect(getColorMode('pants')).to.equal('pants')
  })
})

describe('convert color to another mode', function () {
  it('hex to rgb', function () {
    expect(convertColorMode('#ffffff', 'rgb')).to.equal('rgb(255,255,255)')
  })
  it('#FFEEFF to rgb', function () {
    expect(convertColorMode('#FFEEFF', 'rgb')).to.equal('rgb(255,238,255)')
  })
  it('rgb to hex', function () {
    expect(convertColorMode('rgb(42,255,12)', 'hex')).to.equal('#2AFF0C')
  })
  it('rgba to hex (full opacity)', function () {
    expect(convertColorMode('rgb(42,255,12,1)', 'hex')).to.equal('#2AFF0C')
  })
  it('hex to rgba', function () {
    expect(convertColorMode('#eeaabb', 'rgba')).to.equal('rgb(238,170,187,1)')
  })
  it('rgb to rgba', function () {
    expect(convertColorMode('rgb(42,42,12)', 'rgba')).to.equal('rgb(42,42,12,1)')
  })
  it('rgba to hex (half opacity)', function () {
    expect(convertColorMode('rgba(42,255,12,0.5)', 'hex')).to.equal('rgba(42,255,12,0.5)')
  })
  it('rgba to rgb (half opacity', function () {
    expect(convertColorMode('rgba(42,43,44,0.2)', 'rgb')).to.equal('rgba(42,43,44,0.2)')
  })
})

describe('extending chai', function () {
  before('adding helper to chai', function () {
    chai.use(addChaiColorConvert)
  })
  it('can use the color helper', function () {
    expect('#BBCCDD').to.be.color('rgb(187, 204, 221)')
  })
  it('can use the color helper', function () {
    expect('#BBCCDD').to.not.be.color('rgb(187, 204, 222)')
  })
})

