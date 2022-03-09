use test;
INSERT INTO admins(username,email,password) VALUES ("admin","admin@admin.com","12345678");

insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'A',"1001",1);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,2);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'A',"1020",3);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,4);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,5);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,6);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,7);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'A',"1010",8);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'A',"1030",9);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,10);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,11);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,12);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,13);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,14);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,15);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'A',NULL,16);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'B',NULL,17);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'B',"1060",18);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'B',"1040",19);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'B',NULL,20);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'B',NULL,21);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'B',NULL,22);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'B',"1050",23);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'C',NULL,24);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'C',"1070",25);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'C',NULL,26);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'C',"1100",27);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'C',"1080",28);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (true,'C',NULL,29);
insert into rooms(available,roomtype,bookedBy,roomNo) VALUES (false,'C',"1090",30);


insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(10,140,1001,1,3);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(20,50,1001,1,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(30,210,1001,1,8);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(40,140,1010,8,10);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(50,200,1010,8,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(60,30,1010,8,19);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(70,150,1020,3,5);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(80,50,1020,3,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(90,210,1020,3,8);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(100,250,1030,9,18);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(110,50,1030,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(120,210,1030,9,17);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(130,140,1040,19,10);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(140,200,1040,19,16);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(150,210,1040,19,17);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(160,30,1050,23,19);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(170,50,1050,23,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(180,210,1050,23,8);


insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(190,30,1060,18,11);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(200,30,1060,18,13);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(210,210,1060,18,17);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(220,30,1070,25,11);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(230,50,1070,25,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(240,210,1070,25,17);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(250,140,1080,28,18);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(260,150,1080,28,9);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(270,210,1080,28,8);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(280,140,1090,30,3);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(290,50,1090,30,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(300,210,1090,30,8);

insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(310,150,1100,27,3);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(320,30,1100,27,2);
insert into foodOrders(id,amt,orderedBy,roomId,itemId) VALUES(330,210,1100,27,8);

INSERT INTO items (name, price) VALUES
('roti', 10),
('rice', 50),
('paneer tikka', 140),
('Malai Kofta', 100),
('Paneer Biryani', 150),
('Chicken Biryani', 200),
('Tandoori Toti', 30),
('Chicken Tikka', 210),
('Paneer Masala', 150),
('Dum Aloo', 140),
('Masala Tea', 30),
('Nescafe', 30),
('Green Tea', 30),
('Jeera Rice', 120),
('Veg Thali', 150),
('Fish Thali', 200),
('Chicken Thali', 210),
('Dum Biryani', 250),
('Rumali Roti', 30);

INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1001,"ram","ram@ram.com","2d32d23f32","1","[10,20,30]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1010,"shyam","shym@m.com","2d32d23fwdw32","2","[40,50,60]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1020,"rock","rock@ram.com","2d3wefwef2d23f32","3","[70,80,90]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1030,"naruto","naruto@m.com","2d32d2wef3f32","4","[100,110,120]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1040,"kakashi","kakashi@m.com","2d32dwefew23f32","5","[130,140,150]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1050,"rdj","rdj@m.com","2d32d23wefwf32","6","[160,170,180]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1060,"thor","thor@m.com","2d32d23wefewf32","7","[190,200,210]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1070,"sasuke","sasuke@m.com","2d32d23weff32","8","[220,230,240]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1080,"shinchan","shinchan@m.com","2d32wefd23f32","9","[250,260,270]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1090,"nobita","nobita@ram.com","2d32dewf23f32","10","[280,290,300]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1100,"aman","tulsi@ram.com","2d32d2wef3f32","11","[310,320,330]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1110,"anurag","anurag@m.com","2d32d2ewfw3f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1120,"arihant","tanhira@m.com","2d32d2wfewe3f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1130,"aryan","nayraryan@m.com","2d32d2wefe3f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1140,"someone","raefwfm@m.com","2d3wefwf2d23f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1150,"kety perry","perry@m.com","2d3wef2d23f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1160,"justin","tinjust@m.com","2d32dwefw23f32",NULL,"[]");
INSERT INTO users(id,username,email,password,bookingId,foodOrderedIds) VALUES(1170,"Alan Walker","justwalk@keepwalking.com","2d3ewfwef2d23f32",NULL,"[]");

insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1001","A",1);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1010","A",8);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1020","A",3);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1030","A",9);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1040","B",19);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1050","B",23);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1060","B",18);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1070","C",25);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1080","C",28);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1090","C",30);
insert into bookings(bookstatus,custId,roomtype,roomId) values(TRUE,"1100","C",27);