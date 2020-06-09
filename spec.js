const expect = chai.expect

mocha.setup("bdd")
// mocha.growl()
mocha.checkLeaks()

describe("Commands", function () {
  it("sortNumerically", function () {
    let lines = ["8 h", "11 k", "2 b", "1 a", "21 v"]
    let expected = ["1 a", "2 b", "8 h", "11 k", "21 v"]

    let sorted = Commands.sortNumerically(lines)

    expect(sorted).to.deep.equal(expected)
  })
})

mocha.run()
