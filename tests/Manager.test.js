const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe(" ", () => {
    it('should return getrole for manager', () => {

    const type = "Manager"
    const manager = new Manager ("Anika", 28, "anika@gmail.com", "505")
 
    expect(manager.getRole()).toBe(type)
    });

}) 
})

describe("Manager", () => {
    describe(" ", () => {
    it('should get office number', () => {

    const office = "505"
    const manager = new Manager ("Anika", 28, "anika@gmail.com", "505")
 
    expect(manager.getOfficeNumber()).toBe(office)
    });

}) 
})
