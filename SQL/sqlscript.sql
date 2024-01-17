INSERT INTO employees
(emp_id,
emp_name,
job_name,
manager_id,
hire_date,
salary,
dep_id)
VALUES
(69320,
"ABHI LASH",
"CLERK",
67832, 
"1991-01-23",
1400.00,
 1001);
select * from employees;
select salary from employees;
select  distinct job_name from employees;
SELECT emp_name,CONCAT('$',ROUND(1.15*salary)) As"salary"FROM employees;
select concat(emp_name,"    ",job_name) As "EMPLOYEE & JOB"from employees;
select emp_id,emp_name,salary, DATE_FORMAT(hire_date, "%M %d, %Y") AS "date_format" from employees;
select LENGTH(TRIM(emp_name))As "length" from employees;
select emp_id,salary,commission from employees;


SELECT * FROM employees WHERE dep_id NOT IN (2001);
SELECT * FROM employees WHERE hire_date<('1991-1-1');
select avg(salary) AS "avg" from employees where job_name="ANALYST";
select * from employees where emp_name="BLAZE";
select * from employees where salary*1.25>3000;
SELECT * FROM employees WHERE DATE_FORMAT(hire_date, '%M')='JANUARY';
SELECT * FROM employees WHERE hire_date<('1991-04-01');
insert into salary_grade(grade,min_salary,max_salary) VALUES(1,800,1300);
insert into salary_grade(grade,min_salary,max_salary) VALUES(2,1301,1500);
insert into salary_grade(grade,min_salary,max_salary) VALUES(3,1501,2100);
insert into salary_grade(grade,min_salary,max_salary) VALUES(4,2101,3100);
insert into salary_grade(grade,min_salary,max_salary) VALUES(5,3101,9999);
select * from salary_grade;
SELECT e.emp_name,e.salary FROM employees e,salary_grade s
WHERE e.emp_name = 'FRANK' 
AND e.salary BETWEEN s.min_salary 
AND s.max_salary
AND e.salary = s.max_salary;
SELECT *
FROM employees
WHERE job_name NOT IN ('PRESIDENT','MANAGER')
ORDER BY salary ASC;
select max(salary) AS "MAX" from employees;
SELECT job_name,avg(salary),avg(salary+commission)
FROM employees
GROUP BY job_name;
select* from department;
SELECT e.emp_id,
       e.emp_name,
       e.dep_id,
       d.dep_location,
       d.dep_name
FROM employees e,
     department d
WHERE e.dep_id = d.dep_id
  AND e.dep_id IN (1001,
                   2001);
select*from department;
insert into department(dep_id)values(4001);
insert into department(dept_name,dep_location)values('FINANCE','SYDNEY');
update department set dept_name='FINANCE' where dep_id=1001;
update department set dep_location='SYDNEY' where dep_id=1001;
update department set dept_name='AUDIT' where dep_id=2001;
update department set dep_location='MELBOURNE' where dep_id=2001;
update department set dept_name='PRODUCTION' where dep_id=4001;
update department set dep_location='BRISBANE' where dep_id=4001;
SELECT e.emp_id,e.emp_name,e.dep_id,d.dep_location,d.dept_name
FROM employees e,department d
WHERE e.dep_id = d.dep_id
AND e.dep_id IN (1001,2001);
SELECT w.manager_id,count(*)AS "count"
FROM employees w,employees m
WHERE w.manager_id = m.emp_id
GROUP BY w.manager_id
ORDER BY w.manager_id ASC;
SELECT dep_id,count(*) AS "count"
FROM employees
GROUP BY dep_id
HAVING count(*) >= 2;
select * from employees where emp_name like '%AR%';
alter table employees add GENDER varchar(2);
select*from employees;
update employees set GENDER="F" where emp_id=63679;
select*from employees;
update employees set GENDER="F" where emp_id=64989;
select*from employees;
update employees set GENDER="M" where emp_id=65271;
select*from employees;
update employees set GENDER="M" where emp_id=65646;
select*from employees;
update employees set GENDER="M" where emp_id=66564;
select*from employees;
update employees set GENDER="M" where emp_id=66928;
select*from employees;
update employees set GENDER="F" where emp_id=67832;
select*from employees;
update employees set GENDER="F" where emp_id=67858;
select*from employees;
update employees set GENDER="F" where emp_id=68319;
select*from employees;
update employees set GENDER="M" where emp_id=68454;
select*from employees;
update employees set GENDER="M" where emp_id=68736;
select*from employees;
update employees set GENDER="F" where emp_id=69000;
select*from employees;
update employees set GENDER="M" where emp_id=69062;
select*from employees;
update employees set GENDER="M" where emp_id=69324;






