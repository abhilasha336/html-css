use db2trigger;
show tables;
#before insert trigger works

create table customers(id int,age int,name varchar(30));

delimiter //
create trigger age_verify before insert on customers for each row if new.age<0 then
set  new.age=0;
end if;//
insert into customers values(1,23,"Abhi"),(2,-23,"Lash");
select * from customers;

#after insert trigger works
create table customers1(id int primary key  auto_increment,name varchar(30) not null,
email varchar(30),birthdate date);

create table message(id int auto_increment,messageId int,message varchar(300) not null,
primary key(id,messageId));

delimiter //
create trigger dob_check after insert on customers1 
for each row begin if new.birthdate is null
then insert into message(messageId,message)values
(new.id,concat('hi',new.name,',please insert dob'));
end if;
end //
delimiter ;

insert into customers1(name,email,birthdate) values("devan","devan@gmail.com",NULL),
("maha","maha@gmail.com","1996-11-10");

select * from message;

#before update

create table employees(emp_id int primary key,
emp_name varchar(25),age int,salary float);

insert into employees values(102,"jimmcby",25,23000);
insert into employees values(103,"jrewrimmcby",55,28000);

delimiter //
create trigger update_trigger 
 before update on employees 
 for each row 
 begin
 if new.salary=10000 then
 set new.salary=85000;
 elseif new.salary<10000 then
 set new.salary=72000;
 end if;
 end //
 delimiter ;

update employees set salary=10000;
select * from employees;


#before delete trigger





