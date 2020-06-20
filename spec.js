/* eslint-env mocha */
/* global chai, Commands */

const expect = chai.expect

mocha.setup('bdd')
// mocha.growl()
mocha.checkLeaks()

describe('Commands', function () {
  it('sorts numerically', function () {
    const lines = ['8 h', '11 k', '2 b', '1 a', '21 v']
    const expected = ['1 a', '2 b', '8 h', '11 k', '21 v']

    const sorted = Commands.sortNumerically(lines)

    expect(sorted).to.deep.equal(expected)
  })

  it('filters unique lines', function () {
    const lines = ['a', 'b', 'c', 'a', 'b', 'c', 'd']
    const expected = ['a', 'b', 'c', 'd']

    const sorted = Commands.unique(lines)

    expect(sorted).to.deep.equal(expected)
  })

  it('keeps order of unique lines', function () {
    const lines = ['d', 'c', 'b', 'a', 'c', 'b', 'a']
    const expected = ['d', 'c', 'b', 'a']

    const sorted = Commands.unique(lines)

    expect(sorted).to.deep.equal(expected)
  })
})

mocha.run()
