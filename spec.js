const expect = chai.expect

mocha.setup("bdd")
// mocha.growl()
mocha.checkLeaks()

describe("Commands", function () {
  it("sorts numerically", function () {
    let lines = ["8 h", "11 k", "2 b", "1 a", "21 v"]
    let expected = ["1 a", "2 b", "8 h", "11 k", "21 v"]

    let sorted = Commands.sortNumerically(lines)

    expect(sorted).to.deep.equal(expected)
  })

  it("filters unique lines", function () {
    let lines = ["a", "b", "c", "a", "b", "c", "d"]
    let expected = ["a", "b", "c", "d"]

    let sorted = Commands.unique(lines)

    expect(sorted).to.deep.equal(expected)
  })

  it("keeps order of unique lines", function () {
    let lines = ["d", "c", "b", "a", "c", "b", "a"]
    let expected = ["d", "c", "b", "a"]
    
    let sorted = Commands.unique(lines)

    expect(sorted).to.deep.equal(expected)
  })
})

mocha.run()
