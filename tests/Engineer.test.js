const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe(" ", () => {
    it('should return getrole for engineer', () => {

        const type = "Engineer"
        const engineer = new Engineer ("Paul", 25, "paul@gmail.com", "paul@github.com")
 
    expect(engineer.getRole()).toBe(type)
    });

}) 
})






describe("Engineer", () => {
    describe(" ", () => {
    it('should get school', () => {

    const github = "paul@github.com"
    const engineer = new Engineer ("Paul", 25, "paul@gmail.com", "paul@github.com")
 
    expect(engineer.getGithub()).toBe(github)
    });

}) 
})