CREATE TABLE minmax (
	ID varchar(10) NOT NULL PRIMARY KEY,
	Seq varchar(255), 
	A INT,
	C INT,
	D INT,
	E INT,
	F INT,
	G INT,
	H INT,
	I INT,
	K INT,
	L INT,
	M INT,
	N INT,
	P INT,
	Q INT,
	R INT,
	S INT,
	T INT,
	V INT,
	W INT,
    Y INT,
	FOREIGN KEY (ID) REFERENCES master(ID)
);