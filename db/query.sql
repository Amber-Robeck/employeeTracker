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

SELECT *
FROM department
JOIN role ON role.department_id = department.id;

--Joins role and department brings back job title, id, department name and salary
SELECT role.title AS Position, role.id, department.name AS Department,  role.salary
FROM role
JOIN department ON department.id = role.department_id;

--joins employee and role brings back employee id, first, last position and salary
SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary, employee.manager_id
FROM employee
JOIN role ON role.id = employee.role_id;


--
SELECT employee.id, employee.first_name AS First, employee.last_name AS Last, role.title AS Position, role.salary AS Salary, department.name AS Department, CONCAT(m.first_name, ' ' , m.last_name) AS Manager 
FROM employee 
INNER JOIN role on role.id = employee.role_id 
INNER JOIN department on department.id = role.department_id 
left join employee m on employee.manager_id = m.id;
