CREATE TABLE master (
	ID varchar(17) NOT NULL PRIMARY KEY,
	Name varchar(255),
	Year varchar(4),
	PubmedID varchar(25),
	Sequence varchar(255),
	NatureType varchar(255),
	Source varchar(255),
	Origin varchar(255),
	TaxonomicID varchar(255),
	UniportID varchar(255),
	Family varchar(255),
	Length INT,
	Charge INT,
	Weight varchar(255),
	PI varchar(20),
	Encoding varchar(255),
	Nature varchar(255),
	Chirality varchar(255),
	Structure varchar(255),
	NTerminal varchar(255),
	CTerminal varchar(255),
	Modification text,
	Type varchar(255),
	Target varchar(255),
	Species varchar(255),
	Strain varchar(255),
	Stage varchar(255),
	Disease varchar(255),
	Activity varchar(255),
	CellTarget varchar(255),
	Mechanism text,
	Hemolytic varchar(255),
	Cytotoxicity varchar(255),
	Vitro_Vivo varchar(255),
	CellLine varchar(255),
	Model varchar(255),
	Assay varchar(255),
	doi varchar(100)
);

--- INSERT INTO master VALUES ('Batroxicidin (BatxC)','2017','28246023','KRFKKFFKKLKNSVKKRVKKFFRKPRVDFFDSHVCDE','natural','Bothrops atrox ','venom gland','8723 [NCBI]','U5KJC9','cathelicidin famiy',28,-3,'4258.63 g/mol',4.5,'linear','anionic','D',NULL,'Fatty acid, Lauryl','Amidation','O= Ornithine','parasite','Trypanosoma ','Trypanosoma cruzi','Y strain','Epimastigote forms','Chagas disease','Epimastigote (T. cruzi) 24hr-11.3 Â± 1.6, 48 h 6.33 Â± 1.7, 72 h- 9.6 Â± 3.5uM','cell membrane','induces necrosis','HC50- 12.5 ÂµM','mammalian cell (LLC-MK) 138.8 Â± 20 24 hr MTT assay','in vitro','Rat Myoblast L6 Cells ',NULL,'hemocytometer;','PROTOZ_002');

-- .map(o => Object.entries(o).map(item =>
--     (item[1] == "-" || item[1] == "N/A" || item[1] == "NA") ?
--         `NULL` :
--         item[0].match(/^Length$|^Net charge$|^PI$/i) ?
--             item[1] :
--             item[0] == "ID" ?
--                 `'Protoz_${item[1]}'` : `'${item[1]}'`
-- )).join('), (');