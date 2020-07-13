const prompting = require('../index')

test ('creates an employee object', () => {
    const intern = new Intern('Employee')

    expect(intern.name).toBe(answers.internName)
});