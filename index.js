const mysql = require('mysql2');
const inquirer = require('inquirer');
cTable = require('console.table');

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
                    // console.log("this will be view departments")
                    db.query('SELECT * FROM department', function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        init();
                    });
                    break;

                case "View all roles":
                    // console.log("this will be view roles");
                    db.query('SELECT role.title AS Position, role.id, department.name AS Department,  role.salary FROM role JOIN department ON department.id = role.department_id;', (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        init();
                    });
                    break;
                case "View all employees":
                    // console.log("this will be view employees");
                    db.query("SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, ' ' , m.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee m on employee.manager_id = m.id", (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.table(result);
                        init();
                    });
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