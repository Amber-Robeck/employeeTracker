const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'my_company_db'
    },
    console.log(`Connected to the my_company_db database.`)
);

const init = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "name",
            message: "What would you like to do today?",
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ])
        .then(choices => {
            console.log(choices.name);
        });
}
init();