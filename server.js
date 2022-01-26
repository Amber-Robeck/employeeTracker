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
            choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "I'm finsished"]
        },
    ])
        .then(choices => {
            console.log(choices.name);
            switch (choices.name) {
                case "View all departments":
                    console.log("this will be view departments")
                    break;

                case "View all roles":
                    console.log("this will be view roles");
                    break;
                case "View all employees":
                    console.log("this will be view employees");
                    break;

                case "Add a department":
                    console.log("this will be add department");
                    break;

                case "Add a role":
                    console.log("this will be add a role");
                    break;

                case "Add an employee":
                    console.log("this will be add an employee");
                    break;

                case "Update an employee role":
                    console.log("this will be update employee role");
                    break;

                case "I'm finsished":
                    console.log("all done");
                    break;

            }
        });
}
init();