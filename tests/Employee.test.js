const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initilization", () => {
        it('should return create the id, name, and email', () => {
    
        const employeeMain = new Employee ("John", 21, "john@gmail.com", "San Jose State")
     

        expect(typeof(employeeMain)).toBe("object")
        });
    
    }) 
    })
        
   
 



