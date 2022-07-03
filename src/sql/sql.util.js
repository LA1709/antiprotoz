export const colNames = {
    Name: "Name",
    Year: "Year",
    PubmedID: "PubMed ID",
    Sequence: "Sequence",
    NatureType: "Synthetic/Natural",
    Source: "Source",
    Origin: "Origin",
    TaxonomicID: "Taxonomic ID",
    UniportID: "Uniport ID",
    Family: "Family",
    Length: "Length",
    Charge: "Net Charge",
    Weight: "Molecular Weight",
    PI: "PI",
    Encoding: "Linear/Cyclic",
    Nature: "Nature",
    Chirality: "Chirality",
    Structure: "3D Structure",
    NTerminal: "N-Terminal Modification",
    CTerminal: "C-Terminal Modification",
    Modification: "Chemical Modification",
    Type: "Free Living/Parasitic",
    Target: "Target Organism",
    Species: "Species",
    Strain: "Strain",
    Stage: "Stage",
    Disease: "Disease",
    Activity: "Activity",
    CellTarget: "Target Part",
    Mechanism: "Mechanism of Action",
    Hemolytic: "Hemolytic Activity",
    Cytotoxicity: "Cytotoxicity",
    Vitro_Vivo: "In Vitro/In Vivo",
    CellLine: "Cell Line",
    Model: "In Vivo Model",
    Assay: "Assay",
}

export const organisms = {
    Trypanosoma: [
        'Trypanosoma cruzi',
        'Trypanosoma brucei brucei',
        'Trypanosoma brucei rhodesiense',
        'Trypanosoma brucei gambiense',
        'Trypanosoma evansi',
        'Trypanosoma equiperdum',
        'Trypanosoma carassii',
    ],
    Leishmania: [
        'Leishmania infantum',
        'Leishmania mexicana',
        'Leishmania major',
        'Leishmania tropica',
        'Leishmania amazonensis',
        'Leishmania donovani',
        'Leishmania braziliensis',
        'Leishmania panamensis',
        'Leishmania pifanoi',
        'Leishmania aethiopica',
        'Leishmania infantum chagasi',
    ],
    Plasmodium: [
        'Plasmodium gallinaceum',
        'Plasmodium falciparum',
        'Plasmodium berghei',
        'Plasmodium yoelii nigeriensis',
        'Plasmodium yoelii',
        'Plasmodium vinckei',
    ],
    Eimeria: [
        'Eimeria tenella',
        'Eimeria acervulina',
    ],
    Babesia: [
        'Babesia bigemina',
        'Babesia equi',
    ],
    Acanthamoeba: [
        'Acanthamoeba castellanii',
        'Acanthamoeba polyphaga',
    ],
    Blastocystis: [
        'Blastocystis hominis',
        'Blastocystis spp',
    ],
    Cryptocaryon: ['Cryptocaryon irritans'],
    Toxoplasma: ['Toxoplasma gondii'],
    Miamiensis: ['Miamiensis avidus'],
    Entamoeba: ['Entamoeba histolytica'],
    Tetrahymena: ['Tetrahymena pyriformis'],
    Ichthyophthirius: ['Ichthyophthirius multifiliis'],
    Paramecium: ['Paramecium caudatum'],
    Neospora: ['Neospora caninum'],
    Trichomonas: ['Trichomonas vaginalis'],
    Besnoitia: ['Besnoitia jellisoni'],
    Cryptosporidium: ['Cryptosporidium parvum'],
    Amoeba: ['Amoeba proteus'],
    Euglena: ['Euglena gracilis'],
    Caryospora: ['Caryospora bigenetica'],
}

export const peptideInfo = {
    "Peptide Description": [
        'Source',
        'TaxonomicID',
        'UniportID',
        'NatureType',
        'Origin',
        'Family',
        'Modification',
        'Type',
        'Vitro_Vivo',
        'CellLine',
        'Model',
        'Assay',
    ],
    "Antiprotozoal Activity": [
        'Target',
        'Species',
        'Strain',
        'Stage',
        'Disease',
        'Activity',
        'CellTarget',
        'Mechanism',
        'Hemolytic',
        'Cytotoxicity',
    ],
    "Physiochemical Properties": [
        'Length',
        'Charge',
        'Weight',
        'PI',
        'Encoding',
        'Nature',
        'Chirality',
        'Structure',
        'NTerminal',
        'CTerminal',
    ],
    "Literature Reference": [
        'PubmedID',
        'Year',
    ]
}

export const sources = [
    'Natural',
    'Synthetic',
]

export const families = [
    'frog skin active peptide (FSAP) family. Dermaseptin subfamily',
    'Defensin',
    'MCD family. Protonectin subfamily',
    'Temporin subfamily. frog skin active peptide (FSAP) family',
    'cationic peptide 04 (cupiennin) family. 01 subfamily',
    'cathelicidin family',
    'phospholipase A2 family. Group II subfamily. K49 sub-subfamily',
    'major royal jelly protein family',
    'MCD family. Mastoparan subfamily',
    'hepcidin family',
    'transferrin family',
    'Longicin derived',
    'piscidin',
    'Saposin',
    'NPY family',
    'thiocillin family',
    'cecropin family',
    'gastrin/cholecystokinin family. Magainin subfamily',
    'tachyplesin/polyphemusin family',
    'magainin family',
    'Thiostrepton family ',
    'Analogs of dermaseptin S4 derivative(P)',
    'melittin family',
    'long (4 C-C) scorpion toxin superfamily. Sodium channel inhibitor family. Beta subfamily',
    'attacin/sarcotoxin-2 family',
    'alpha-defensin family',
    'pleurocidin family',
    'G-protein coupled receptor 2 family',
    'adrenomedullin family',
    'sauvagine/corticotropin-releasing factor/urotensin I family',
    'motilin family',
    'andropin family',
    'frog skin active peptide (FSAP) family. Dermaseptin subfamily',
    'gastrin/cholecystokinin family',
    'non-disulfide-bridged peptide (NDBP) superfamily. Antimalarial peptide (group 5) family',
    'long chain scorpion toxin family. Class 2 subfamily',
    'non-disulfide-bridged peptide (NDBP) superfamily. Medium-length antimicrobial peptide (group 3) family. Ponericin-W subfamily',
    'pore-forming trialysin (trialysin) family',
    'intercrine alpha (chemokine CxC) family',
    'neurotoxin 10 (Hwtx-1) family',
    'neurotoxin 36 family',
    'glycosyl hydrolase 24 family',
    'frog skin active peptide (FSAP) family. Ocellatin subfamily.Curated',
    'SAPLIP family,',
    'Halictine family',
    'frog skin active peptide (FSAP) family. Brevinin subfamily',
    'MCD family. Eumenitin subfamily',
    'frog skin active peptide (FSAP) family. Phylloseptin subfamily',
    'invertebrate defensin family. Type 1 subfamily',
    'histatin/statherin family',
    'neurotoxin 19 (CSTX) family. 04 (U1-Lctx) subfamily',
    'frog skin active peptide (FSAP) family. Cruzioseptin subfamily',
    'crotamine-myotoxin family',
    'intercrine beta (chemokine CC) family',
    'alpha-defensin family',
    'histone H2A family',
    'bombinin family',
    'beta-defensin family',
    'moricin family',
]

export const aa = {
    'A': {
        min: 0,
        max: 11,
    },
    'C': {
        min: 0,
        max: 1,
    },
    'D': {
        min: 0,
        max: 1,
    },
    'E': {
        min: 0,
        max: 3,
    },
    'F': {
        min: 0,
        max: 3,
    },
    'G': {
        min: 1,
        max: 5,
    },
    'H': {
        min: 0,
        max: 1,
    },
    'I': {
        min: 0,
        max: 3,
    },
    'K': {
        min: 0,
        max: 6,
    },
    'L': {
        min: 1,
        max: 6,
    },
    'M': {
        min: 0,
        max: 1,
    },
    'N': {
        min: 0,
        max: 2,
    },
    'P': {
        min: 0,
        max: 6,
    },
    'Q': {
        min: 0,
        max: 1,
    },
    'R': {
        min: 0,
        max: 3,
    },
    'S': {
        min: 0,
        max: 3,
    },
    'T': {
        min: 0,
        max: 2,
    },
    'V': {
        min: 0,
        max: 3,
    },
    'W': {
        min: 0,
        max: 1,
    },
    'Y': {
        min: 0,
        max: 1,
    },
}

export const pp = {
    'Aliphatic': {
        min: 0,
        max: 11,
    },
    'Aromatic': {
        min: 0,
        max: 1,
    },
    'Polar': {
        min: 0,
        max: 1,
    },
    'Hydrophobic': {
        min: 0,
        max: 3,
    },
    'Neutral': {
        min: 0,
        max: 3,
    },
}