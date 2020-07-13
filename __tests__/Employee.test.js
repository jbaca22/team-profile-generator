const Employee = require('../lib/Employee');

test ('creates an employee object', () => {
    const employee = new Employee('')

    expect(employee.name).toBe('')
    expect(employee.id).toBe('')
    expect(employee.email).toBe('')
})

test('get the employee name', () => {
    const employee = new Employee('');

});