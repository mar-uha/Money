/* Parents categories */
INSERT INTO Categories
	(Id, Name, ParentId)
VALUES (1, 'Auto & transport', null),
	(2, 'Bills & utilities', null),
	(3, 'Children', null),
	(4, 'Education', null),
	(5, 'Entertainment', null),
	(6, 'Fees', null),
	(7, 'Finances', null),
	(8, 'Food & dining', null),
	(9, 'Gifts and donations', null),
	(10, 'Health & fitness', null),
	(11, 'Home', null),
	(12, 'Investments', null),
	(13, 'Miscellaneous', null),
	(14, 'My business', null),
	(15, 'Personal care', null),
	(16, 'Pets', null),
	(17, 'Revenue', null),
	(18, 'Shopping', null),
	(19, 'Taxes', null),
	(20, 'Transfer', null),
	(21, 'Travel', null);

/* 'Auto & transport' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Auto & transport (All)', 1),
	('Car insurance', 1),
	('Car payment', 1),
	('Gas & fuel', 1),
	('Parking', 1),
	('Parts & service', 1),
	('Public transportation', 1);

/* 'Bills & utilities' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Bills & utilities (All)', 2),
	('Cable', 2),
	('Domain name', 2),
	('Fraud protection', 2),
	('Home phone', 2),
	('Internet', 2),
	('Internet hosting', 2),
	('Mobile phone', 2),
	('Utilities', 2);

/* 'Children' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Children (All)', 3),
	('Allowance', 3),
	('Baby supplies', 3),
	('Babysitter & daycare', 3),
	('Child support', 3),
	('Kids activities', 3),
	('Toys', 3);

/* 'Education' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Education (All)', 4),
	('Books & supplies', 4),
	('Student loan', 4),
	('Tuition', 4);

/* 'Entertainment' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Entertainment (All)', 5),
	('Arts', 5),
	('Entertainment', 5),
	('Movies', 5),
	('Music', 5),
	('Newspapers & magazines', 5);

/* 'Fees' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Fees (All)', 6),
	('Abm fee', 6),
	('Bank fee', 6),
	('Financing charge', 6),
	('Late fee', 6),
	('Service fee', 6),
	('Trade commission', 6);

/* 'Finances' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Finances (All)', 7),
	('Financial advisor', 7),
	('Life insurance', 7);

/* 'Food & dining' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Food & dining (All)', 8),
	('Alcohol/bars', 8),
	('Coffee shops', 8),
	('Fast food', 8),
	('Groceries', 8),
	('Restaurants', 8);

/* 'Gifts and donations' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Gifts and donations (All)', 9),
	('Charitable donation', 9),
	('Gifts', 9);

/* 'Health & fitness' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Health & fitness (All)', 10),
	('Dentist', 10),
	('Doctor', 10),
	('Gym', 10),
	('Health insurance', 10),
	('Optometrist', 10),
	('Pharmacy', 10),
	('Sports', 10);

/* 'Home' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Home (All)', 11),
	('Cleaning services', 11),
	('Home furnishing', 11),
	('Home insurance', 11),
	('Home supplies', 11),
	('Lawn & garden', 11),
	('Mortgage & rent', 11),
	('Renovations', 11);

/* 'Investments' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Investments (All)', 12),
	('Deposits', 12),
	('Profits from dividends', 12),
	('Purchases', 12),
	('Sale', 12),
	('Withdrawal', 12);

/* 'Miscellaneous' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Miscellaneous (All)', 13),
	('Cash', 13),
	('Cheque', 13);

/* 'My business' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('My business (All)', 14),
	('Advertising', 14),
	('Legal', 14),
	('Office supplies', 14),
	('Printing', 14),
	('Shipping', 14);

/* 'Personal care' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Personal care (All)', 15),
	('Hairdresser', 15),
	('Laundry', 15),
	('Spa & massage', 15);

/* 'Pets' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Pets (All)', 16),
	('Food & supplies', 16),
	('Pet grooming', 16),
	('Veterinary', 16);

/* 'Revenue' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Revenue (All)', 17),
	('Bonus', 17),
	('Income from interest', 17),
	('Reimbursement', 17),
	('Rental income', 17),
	('Return of purchased items', 17),
	('Salary', 17);

/* 'Shopping' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Shopping (All)', 18),
	('Books', 18),
	('Clothing', 18),
	('Electronics and software', 18),
	('Hobbies', 18),
	('Sporting goods', 18);

/* 'Taxes' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Taxes (All)', 19),
	('Federal tax', 19),
	('Municipal tax', 19),
	('Provincial tax', 19),
	('Sales tax', 19),
	('School tax', 19);

/* 'Transfer' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Transfer (All)', 20),
	('Cash withdrawal', 20),
	('Credit card payment', 20),
	('Mortgage payment', 20);

/* 'Travel' categories */
INSERT INTO Categories
	(Name, ParentId)
VALUES ('Transfer (All)', 21),
	('Air travel', 21),
	('Car rentals & taxis', 21),
	('Hotel', 21),
	('Vacation', 21);
	