CREATE TABLE pp (
	ID varchar(17) NOT NULL PRIMARY KEY,
	Aliphatic INT,
	Aromatic INT,
	Polar INT,
	Hydrophobic INT,
	Positive_Charges INT,
	Negative_Charges INT,
	FOREIGN KEY (ID) REFERENCES master(ID)
);