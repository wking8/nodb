-- everthing used to create table

create table whl8 (
id serial primary key,
name varchar(100),
phone varchar(20),
address varchar(255)
);

insert into whl8 (name, phone, address)
values ('wyatt', '555-5555', 'my street'),
('dez', '444-4444', '456 awesome ave' ),
('matt', '666-6666', '555 street' );