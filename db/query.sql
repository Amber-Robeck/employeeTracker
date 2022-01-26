--view all departments
SELECT name FROM department;

--view all roles
SELECT title FROM role;

--view all employees
SELECT first_name, last_name FROM employee;

--add a department
INSERT INTO department (name)
VALUE ("New Department");

--add a role
INSERT INTO role (title, salary, department_id)
VALUE ("New Role", 75000, 6);

--add an employee
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("New", "Employee", NULL, 3);

--update an employee role
UPDATE employee
SET role_id = 1
WHERE id = 1;
