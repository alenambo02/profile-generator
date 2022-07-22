const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe(" ", () => {
    it('should return getrole for intern', () => {
    
    const type = "Intern"
    const intern = new Intern ("John", 21, "john@gmail.com", "San Jose State")
 
    expect(intern.getRole()).toBe(type)
    });

}) 
})

describe("Intern", () => {
    describe(" ", () => {
    it('should get school', () => {

    const school = "San Jose State"
    const intern = new Intern ("John", 21, "john@gmail.com", "San Jose State")
 
    expect(intern.getSchool()).toBe(school)
    });

}) 
})


