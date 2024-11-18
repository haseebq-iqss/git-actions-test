const {add, sub, mul, div} = require("./app")

describe("Math function tests", () => {
    it("Should properly add 2 numbers", () => {
        expect(add(1,2)).toBe(3)
    })
    it("Should properly subtract 2 numbers", () => {
        expect(sub(4,2)).toBe(2)
    })
    it("Should properly multiply 2 numbers", () => {
        expect(mul(2,2)).toBe(4)
    })
    it("Should properly divide 2 numbers", () => {
        expect(div(4,2)).toBe(2)
    })
})