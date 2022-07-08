
const tax = require("./tax_calculator")

describe("tax", function(){

    test("for less than 2,50,000", function ()
    {
        expect(tax(10000,2500)).toBe("no tax")
       
    })
 test("for 2,50,000 to 500000", function ()
    {
        expect(tax(300000,50000)).toBe(2500)
       
    })

    test("for greater than 1000000", function ()
    {
        expect(tax(1100000,300000)).toBe(174000)
       
    })
 test("for 1000000", function ()
    {
        expect(tax(1000000,500000)).toBe(80000)
       
    })
    test("for 500000", function ()
    {
        expect(tax(500000,100000)).toBe(
            20000)
       
    })

})