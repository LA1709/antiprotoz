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
    Species: "Target Species",
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
    doi: "DOI",
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
        'doi',
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

export const cellLines = [
    "A. gambiae strain KIL",
    "A549 cell line",
    "Adenocarcinomic human alveolar basal epithelial cells (A549) /RAW 264.7 Abelson murine leukemia virus-transformed macrophages",
    "BALB/c BMDM",
    "Balb/C mice bone marrow-derived macrophages (BMDMs)",
    "Caco-2",
    "Dendritic cells",
    "Dendritic cells, vero cells and 293TT cells",
    "HEK cells (American Type Culture Collection CRL-1573) and LNCaP prostate cancer cells (CRL-1740)",
    "HeLa and fibroblast L929 cells",
    "HeLa cells",
    "HeLa cells and A549",
    "HepG2 cells ,fibroblasts, THP-1 monocytes ,THP-1-derived macrophages",
    "Human Hela MAGIC-5 cells",
    "Human THP-1 monocytes",
    "Human brain microvascular endothelial cells",
    "Human colonic carcinoma cell line (Caco-2)",
    "Human fibroblasts",
    "Human foreskin fibroblast HFF",
    "Human foreskin fibroblast cells (HFF-1)",
    "Human glioblastoma cell line 86HG39",
    "Human keratinocytes HaCat, Peritoneal Macrophages",
    "Human lymphoma THP1",
    "J774.1 murine macrophage",
    "LLC-MK2 cells",
    "MCF-10A human breast epithelial cells",
    "MDCK cells",
    "Macrophage U937",
    "Mammalian Vero cells",
    "Mammalian cell (LLC-MK)",
    "Mice BALB/c peritoneal macrophages",
    "Mouse embryonal cell line (NIH/3T3)",
    "Murine macrophages",
    "Normal breast cells MCF-10a",
    "Normal cell line 3T3 from mouse fibroblast",
    "Peritoneal Macrophages",
    "Peritoneal mouse macrophages",
    "Rat Myoblast L6 Cells",
    "Rat peritoneal mast cells",
    "Rat skeletal myoblasts(L-6 cells)",
    "Rhesus monkey kidney cells LLC-MK2 (ATCC CCL-7)",
    "T-lymphocytes",
    "THP-1 cells",
    "THP-1 monocytes, THP-1-derived macrophages, HFF  fibroblasts and HepG2 cells.",
    "THP1 cell line",
    "Tamm-Horsfall Protein 1 (THP1) cell line",
    "Tamm-Horsfall Protein 1 (THP1) cell line (ATCC TIB-202)",
    "The A549 cell line",
    "Vero and 293TT cells",
    "Vero cells",
    "Vero cells, (ECACC 84113001)",
    "human THP-1 monocytes, THP-1-derived macrophages, human hepatoma-derived cells",
    "peritoneal macrophages from Balb/c mice"
]

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

export const getFamilyGroup = (family) => {
    if (family.match(/defensin/i))
        return 'defensin family';
    if (family.match(/frog/i))
        return 'frog skin active peptide (FSAP) family';
    if (family.match(/gastrin/i))
        return 'gastrin/cholecystokinin family';
    if (family.match(/long chain scorpion/i))
        return 'long chain scorpion toxin family';
    if (family.match(/mcd/i))
        return 'MCD family';
    if (family.match(/non-disulfide-bridged/i))
        return 'non-disulfide-bridged peptide (NDBP) superfamily';
    return family;
}

export const getSearchStyles = () => ({
    control: (base, state) => ({
        ...base,
        background: '#fff',
        borderColor: '#9c9c9c',
        minHeight: '30px',
        boxShadow: state.isFocused ? null : null,
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '2px 6px',
    }),
    input: (base) => ({
        ...base,
        margin: '0px',
    }),
    multiValueLabel: (base) => ({
        ...base,
        padding: "2px 4px",
    }),
    multiValueRemove: (base) => ({
        ...base,
        padding: "0px 2px",
    }),
    option: (base) => ({
        ...base,
        padding: "0.3rem 0.5rem",
    }),
    placeholder: (base) => ({
        ...base,
        fontSize: "0.9rem",
    }),
})