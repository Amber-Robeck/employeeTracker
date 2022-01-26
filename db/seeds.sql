INSERT INTO department (name)
VALUE ("Engineering"),
("Testing"),
("Grapic Design"),
("Sales"),
("Human Resources");

INSERT INTO role (title, salary, department_id)
VALUE ("Payroll", 75000, 5),
("Senior Engineer", 175000, 1),
("Developer", 70000, 1),
("Quality tester", 75000, 2),
("Customer Tech", 80000, 4),
("Sales Lead", 175000, 4),
("Front-end Dev", 50000, 3),
("Design Lead", 110000, 3),
("Senior Test Writer", 135000, 2);


INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUE ("Mark", "Stevens", NULL, 3);