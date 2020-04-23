import { expect } from "chai"

describe("Simple mocha spec", () => {
    it("shoud run pass", () => {
        expect(true).to.be.true
    })

    it("should fail", () => {
        expect(true).to.be.false
    })
})
