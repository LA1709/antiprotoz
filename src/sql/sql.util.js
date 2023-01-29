export const colNames = {
    Name: "Name",
    Year: "Year",
    PubmedID: "PubMed ID",
    Sequence: "Sequence",
    NatureType: "Source",
    Source: "Source Organism",
    Origin: "Origin",
    TaxonomicID: "Taxonomic ID",
    UniportID: "Uniport ID",
    Family: "Peptide Family",
    Length: "Length",
    Charge: "Net Charge",
    Weight: "Molecular Weight",
    PI: "PI",
    Encoding: "Linear/Cyclic",
    Nature: "Cationic/Anionic",
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
    Disease: "Disease caused",
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
    Acanthamoeba: [
        "Acanthamoeba castellanii",
        "Acanthamoeba polyphaga"
    ],
    Amoeba: [
        "Amoeba proteus"
    ],
    Babesia: [
        "Babesia equi",
        "Babesia microti",
        "Babesia bigemina"
    ],
    Besnoitia: [
        "Besnoitia jellisoni"
    ],
    Blastocystis: [
        "Blastocystis spp",
        "Blastocystis hominis"
    ],
    Caryospora: [
        "Caryospora bigenetica"
    ],
    Cryptocaryon: [
        "Cryptocaryon irritans"
    ],
    Cryptosporidium: [
        "Cryptosporidium parvum"
    ],
    Eimeria: [
        "Eimeria tenella",
        "Eimeria acervulina"
    ],
    Entamoeba: [
        "Entamoeba histolytica"
    ],
    Euglena: [
        "Euglena gracilis"
    ],
    Giardia: [
        "Giardia lamblia"
    ],
    Ichthyophthirius: [
        "Ichthyophthirius multifiliis"
    ],
    Leishmania: [
        "Leishmania donovani",
        "Leishmania amazonensis",
        "Leishmania braziliensis",
        "Leishmania infantum chagasi",
        "Leishmania major",
        "Leishmania pifanoi",
        "Leishmania mexicana",
        "Leishmania aethiopica",
        "Leishmania infantum",
        "Leishmania tropica",
        "Leishmania panamensis",
        "Leishmania (Viannia) braziliensis",
    ],
    Miamiensis: [
        "Miamiensis avidus"
    ],
    Naegleria: [
        "Naegleria fowleri"
    ],
    Neospora: [
        "Neospora caninum"
    ],
    Paramecium: [
        "Paramecium caudatum"
    ],
    Plasmodium: [
        "Plasmodium berghei",
        "Plasmodium falciparum",
        "Plasmodium yoelii",
        "Plasmodium cynomolgi",
        "Plasmodium knowlesi",
        "Plasmodium yoelii nigeriensis",
        "Plasmodium vinckei",
        "Plasmodium chabaudi",
        "Plasmodium gallinaceum"
    ],
    Tetrahymena: [
        "Tetrahymena pyriformis"
    ],
    Toxoplasma: [
        "Toxoplasma gondii"
    ],
    Trichomonas: [
        "Trichomonas vaginalis"
    ],
    Trypanosoma: [
        "Trypanosoma cruzi",
        "Trypanosoma brucei",
        "Trypanosoma evansi",
        "Trypanosoma equiperdum",
        "Trypanosoma brucei gambiense",
        "Trypanosoma brucei rhodesiense",
        "Trypanosoma carassii"
    ],
}

export const peptideInfo = {
    "Peptide Description": [
        'Length',
        'NatureType',
        'Source',
        'TaxonomicID',
        'Origin',
        'Family',
        'Modification',
        'NTerminal',
        'CTerminal',
        'Nature',
        'Chirality',
        'UniportID',
    ],
    "Target Organism": [
        'Target',
        'Type',
        'Species',
        'Strain',
        'Stage',
        'Disease',
    ],
    "Antiprotozoal Activity of Peptide": [
        "Activity",
        "Vitro_Vivo",
        "Model",
        "Hemolytic",
        "CellTarget",
    ],
    "Physiochemical Properties": [
        'Charge',
        'Weight',
        'Encoding',
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
    "adrenomedullin family",
    "alpha-defensin family",
    "andropin family",
    "attacin/sarcotoxin-2 family",
    "beta-defensin family",
    "bombinin family",
    "cathelicidin family",
    "cationic peptide 04 (cupiennin) family. 01 subfamily",
    "cecropin family",
    "crotamine-myotoxin family",
    "defensin family",
    "formicidae venom precursor-01 superfamily",
    "frog skin active peptide (FSAP) family",
    "frog skin active peptide (FSAP) family. Brevinin subfamily",
    "frog skin active peptide (FSAP) family. Cruzioseptin subfamily",
    "frog skin active peptide (FSAP) family. Dermaseptin subfamily",
    "frog skin active peptide (FSAP) family. Ocellatin subfamily.Curated",
    "frog skin active peptide (FSAP) family. Phylloseptin subfamily",
    "frog skin active peptide (FSAP) family. Temporin subfamily",
    "G-protein coupled receptor 2 family",
    "gastrin/cholecystokinin family",
    "gastrin/cholecystokinin family. Magainin subfamily",
    "glycosyl hydrolase 24 family",
    "Halictine family",
    "hepcidin family",
    "histatin/statherin family",
    "histone H2A family",
    "intercrine alpha (chemokine CxC) family",
    "intercrine beta (chemokine CC) family",
    "invertebrate defensin family. Type 1 subfamily",
    "invertebrate defensin family. Type 2 subfamily",
    "long (4 C-C) scorpion toxin superfamily. Sodium channel inhibitor family. Beta subfamily",
    "long chain scorpion toxin family. Class 1 subfamily",
    "long chain scorpion toxin family. Class 2 subfamily",
    "major royal jelly protein family",
    "MCD family. Eumenitin subfamily",
    "MCD family. Mastoparan subfamily",
    "MCD family. Protonectin subfamily",
    "melittin family",
    "moricin family",
    "motilin family",
    "neurotoxin 10 (Hwtx-1) family",
    "neurotoxin 19 (CSTX) family. 04 (U1-Lctx) subfamily",
    "neurotoxin 36 family",
    "non-disulfide-bridged peptide (NDBP) superfamily. Antimalarial peptide (group 5) family",
    "non-disulfide-bridged peptide (NDBP) superfamily. Medium-length antimicrobial peptide (group 3) family. Ponericin-W subfamily",
    "NPY family",
    "phospholipase A2 family. Group II subfamily. K49 sub-subfamily",
    "pleurocidin family",
    "pore-forming trialysin (trialysin) family",
    "SAPLIP family,",
    "Saposin",
    "sauvagine/corticotropin-releasing factor/urotensin I family",
    "tachyplesin/polyphemusin family",
    "thiocillin family",
    "transferrin family",
]

export const inputFields = {
    "ID": {
        "type": "text",
        "disabled": true
    },
    "Name": {
        "type": "text"
    },
    "Year": {
        "type": "text"
    },
    "PubmedID": {
        "type": "text"
    },
    "Sequence": {
        "type": "text"
    },
    "NatureType": {
        "type": "select",
        source: sources
    },
    "Source": {
        "type": "text"
    },
    "Origin": {
        "type": "text"
    },
    "TaxonomicID": {
        "type": "text"
    },
    "UniportID": {
        "type": "text"
    },
    "Family": {
        "type": "select",
        "source": families
    },
    "Length": {
        "type": "number",
        "step": "any"
    },
    "Charge": {
        "type": "number",
        "step": "any"
    },
    "Weight": {
        "type": "text"
    },
    "PI": {
        "type": "text"
    },
    "Encoding": {
        "type": "text"
    },
    "Nature": {
        "type": "text"
    },
    "Chirality": {
        "type": "text"
    },
    "Structure": {
        "type": "text"
    },
    "NTerminal": {
        "type": "text"
    },
    "CTerminal": {
        "type": "text"
    },
    "Modification": {
        "type": "text"
    },
    "Type": {
        "type": "text"
    },
    "Target": {
        "type": "select",
        "source": Object.keys(organisms)
    },
    "Species": {
        "type": "select",
        "source": Object.values(organisms).reduce((prev, curr) => [...prev, ...curr], [])
    },
    "Strain": {
        "type": "text"
    },
    "Stage": {
        "type": "text"
    },
    "Disease": {
        "type": "text"
    },
    "Activity": {
        "type": "textarea"
    },
    "CellTarget": {
        "type": "text"
    },
    "Mechanism": {
        "type": "textarea"
    },
    "Hemolytic": {
        "type": "textarea"
    },
    "Cytotoxicity": {
        "type": "text"
    },
    "Vitro_Vivo": {
        "type": "text"
    },
    "CellLine": {
        "type": "text"
    },
    "Model": {
        "type": "text"
    },
    "Assay": {
        "type": "textarea"
    },
}

export const aa = {
    'A': {
        min: 0,
        max: 13,
    },
    'C': {
        min: 0,
        max: 8,
    },
    'D': {
        min: 0,
        max: 5,
    },
    'E': {
        min: 0,
        max: 6,
    },
    'F': {
        min: 0,
        max: 7,
    },
    'G': {
        min: 0,
        max: 11,
    },
    'H': {
        min: 0,
        max: 7,
    },
    'I': {
        min: 0,
        max: 6,
    },
    'K': {
        min: 0,
        max: 11,
    },
    'L': {
        min: 0,
        max: 10,
    },
    'M': {
        min: 0,
        max: 4,
    },
    'N': {
        min: 0,
        max: 4,
    },
    'P': {
        min: 0,
        max: 11,
    },
    'Q': {
        min: 0,
        max: 6,
    },
    'R': {
        min: 0,
        max: 10,
    },
    'S': {
        min: 0,
        max: 7,
    },
    'T': {
        min: 0,
        max: 5,
    },
    'V': {
        min: 0,
        max: 12,
    },
    'W': {
        min: 0,
        max: 5,
    },
    'Y': {
        min: 0,
        max: 5,
    },
}

export const pp = {
    'Aliphatic': {
        min: 0,
        max: 47,
    },
    'Aromatic': {
        min: 0,
        max: 8,
    },
    'Polar': {
        min: 0,
        max: 46,
    },
    'Hydrophobic': {
        min: 0,
        max: 49,
    },
    'Positive_Charges': {
        min: 0,
        max: 15,
    },
    'Negative_Charges': {
        min: 0,
        max: 7,
    },
}