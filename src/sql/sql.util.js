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
    Modification: "Sequence Modification",
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
        "Leishmania aethiopica",
        "Leishmania amazonensis",
        "Leishmania braziliensis",
        "Leishmania donovani",
        "Leishmania infantum",
        "Leishmania major",
        "Leishmania mexicana",
        "Leishmania panamensis",
        "Leishmania pifanoi",
        "Leishmania tropica"
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
        "Plasmodium chabaudi",
        "Plasmodium cynomolgi",
        "Plasmodium falciparum",
        "Plasmodium gallinaceum",
        "Plasmodium knowlesi",
        "Plasmodium vinckei",
        "Plasmodium yoelii",
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
        "Trypanosoma brucei",
        "Trypanosoma carassii",
        "Trypanosoma congolense",
        "Trypanosoma cruzi",
        "Trypanosoma danilewskyi",
        "Trypanosoma equiperdum",
        "Trypanosoma evansi",
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
    'Derived from Natural Protein',
]

export const families = [
    "Adrenomedullin family",
    "Alpha defensin family",
    "Andropin family",
    "Attacin/sarcotoxin-2 family",
    "Beta defensin family",
    "Bombinin family",
    "Cathelicidin family",
    "Cationic peptide 04 (cupiennin) family",
    "Cecropin family",
    "Crotamine-myotoxin family",
    "Formicidae venom precursor-01 superfamily",
    "Frog skin active peptide (FSAP) family",
    "G-protein coupled receptor 2 family",
    "Gastrin/cholecystokinin family",
    "Glycosyl hydrolase 24 family",
    "Halictine family",
    "Hepcidin family",
    "Histatin/statherin family",
    "Histone H2A family",
    "Intercrine alpha (chemokine CxC) family",
    "Intercrine beta (chemokine CC) family",
    "Invertebrate defensin family",
    "Sodium channel inhibitor family",
    "Long chain scorpion toxin family",
    "Major royal jelly protein family",
    "MCD family",
    "Melittin family",
    "Moricin family",
    "Motilin family",
    "Neurotoxin 10 (Hwtx-1) family",
    "Neurotoxin 19 (CSTX) family",
    "Neurotoxin 36 family",
    "Non-disulfide-bridged peptide (NDBP) superfamily",
    "NPY family",
    "Phospholipase A2 family",
    "Pleurocidin family",
    "Pore-forming trialysin family",
    "SAPLIP family",
    "Saposin family",
    "Sauvagine/corticotropin-releasing factor/urotensin I family",
    "Tachyplesin/polyphemusin family",
    "Thiocillin family",
    "Transferrin family",
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

export const freqAA = {
    'A': {
        min: 0,
        max: 50,
    },
    'C': {
        min: 0,
        max: 25,
    },
    'D': {
        min: 0,
        max: 25,
    },
    'E': {
        min: 0,
        max: 22,
    },
    'F': {
        min: 0,
        max: 33,
    },
    'G': {
        min: 0,
        max: 33,
    },
    'H': {
        min: 0,
        max: 29,
    },
    'I': {
        min: 0,
        max: 33,
    },
    'K': {
        min: 0,
        max: 43,
    },
    'L': {
        min: 0,
        max: 38,
    },
    'M': {
        min: 0,
        max: 33,
    },
    'N': {
        min: 0,
        max: 13,
    },
    'P': {
        min: 0,
        max: 33,
    },
    'Q': {
        min: 0,
        max: 33,
    },
    'R': {
        min: 0,
        max: 75,
    },
    'S': {
        min: 0,
        max: 30,
    },
    'T': {
        min: 0,
        max: 13,
    },
    'V': {
        min: 0,
        max: 33,
    },
    'W': {
        min: 0,
        max: 38,
    },
    'Y': {
        min: 0,
        max: 19,
    },
}

export const freqPP = {
    'Aliphatic': {
        min: 0,
        max: 100,
    },
    'Aromatic': {
        min: 0,
        max: 38,
    },
    'Polar': {
        min: 0,
        max: 83,
    },
    'Hydrophobic': {
        min: 17,
        max: 100,
    },
    'Positive_Charges': {
        min: 0,
        max: 75,
    },
    'Negative_Charges': {
        min: 0,
        max: 25,
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

export const getDiseaseGroup = (disease) => {
    if (disease.match(/Cryptosporidiosis/i))
        return 'Cryptosporidiosis';
    if (disease.match(/Toxoplasmosis/i))
        return 'Toxoplasmosis';
    if (disease.match(/Leishmaniasis/i))
        return 'Leishmaniasis';
    if (disease.match(/trypanosomiasis/i))
        return 'trypanosomiasis';
    if (disease.match(/Trichomoniasis/i))
        return 'Trichomoniasis';
    if (disease.match(/Malaria/i))
        return 'Malaria';
    return 'Others';
};

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

export const peptidesExcludedFromSearch = [
    "Protoz_955",
    "Protoz_956",
    "Protoz_957",
    "Protoz_822",
    "Protoz_823",
    "Protoz_824",
    "Protoz_825",
    "Protoz_826",
    "Protoz_827",
    "Protoz_828",
    "Protoz_829",
    "Protoz_830",
    "Protoz_815",
    "Protoz_816",
    "Protoz_817",
    "Protoz_852",
    "Protoz_853",
    "Protoz_954",
    "Protoz_951",
    "Protoz_953",
    "Protoz_351",
    "Protoz_456",
    "Protoz_559",
    "Protoz_657",
    "Protoz_939",
    "Protoz_392",
    "Protoz_393",
    "Protoz_395",
    "Protoz_396",
    "Protoz_397",
    "Protoz_398",
    "Protoz_233",
    "Protoz_244",
    "Protoz_249",
    "Protoz_260",
    "Protoz_270",
    "Protoz_277",
    "Protoz_285",
    "Protoz_925",
    "Protoz_929",
    "Protoz_926",
    "Protoz_927",
    "Protoz_931",
    "Protoz_928",
    "Protoz_932",
    "Protoz_933",
    "Protoz_882",
    "Protoz_879",
    "Protoz_874",
    "Protoz_987",
    "Protoz_988",
    "Protoz_989",
    "Protoz_871",
    "Protoz_158",
    "Protoz_159",
    "Protoz_160",
    "Protoz_154",
    "Protoz_156",
    "Protoz_157",
    "Protoz_295",
    "Protoz_448",
    "Protoz_449",
    "Protoz_450",
    "Protoz_451",
    "Protoz_452",
    "Protoz_453",
    "Protoz_110",
    "Protoz_139",
    "Protoz_193",
    "Protoz_2",
    "Protoz_204",
    "Protoz_211",
    "Protoz_220",
    "Protoz_224",
    "Protoz_789",
    "Protoz_787",
    "Protoz_961",
    "Protoz_962",
    "Protoz_964",
    "Protoz_577",
    "Protoz_578",
    "Protoz_579",
    "Protoz_626",
    "Protoz_627",
    "Protoz_632",
    "Protoz_633",
    "Protoz_846",
    "Protoz_847",
    "Protoz_900",
    "Protoz_902",
    "Protoz_910",
    "Protoz_40",
    "Protoz_637",
    "Protoz_638",
    "Protoz_891",
    "Protoz_630",
    "Protoz_631",
    "Protoz_750",
    "Protoz_751",
    "Protoz_831",
    "Protoz_833",
    "Protoz_834",
    "Protoz_818",
    "Protoz_819",
    "Protoz_820",
    "Protoz_117",
    "Protoz_118",
    "Protoz_119",
    "Protoz_711",
    "Protoz_712",
    "Protoz_713",
    "Protoz_714",
    "Protoz_715",
    "Protoz_716",
    "Protoz_717",
    "Protoz_718",
    "Protoz_719",
    "Protoz_720",
    "Protoz_884",
    "Protoz_881",
    "Protoz_878",
    "Protoz_887",
    "Protoz_90",
    "Protoz_643",
    "Protoz_644",
    "Protoz_848",
    "Protoz_849",
    "Protoz_899",
    "Protoz_901",
    "Protoz_908",
    "Protoz_905",
    "Protoz_584",
    "Protoz_585",
    "Protoz_1124",
    "Protoz_564",
    "Protoz_582",
    "Protoz_883",
    "Protoz_880",
    "Protoz_875",
    "Protoz_722",
    "Protoz_723",
    "Protoz_724",
    "Protoz_725",
    "Protoz_726",
    "Protoz_727",
    "Protoz_728",
    "Protoz_729",
    "Protoz_730",
    "Protoz_805",
    "Protoz_145",
    "Protoz_146",
    "Protoz_147",
    "Protoz_803",
    "Protoz_804",
    "Protoz_958",
    "Protoz_959",
    "Protoz_960",
    "Protoz_806",
    "Protoz_807",
    "Protoz_937",
    "Protoz_423",
    "Protoz_735",
    "Protoz_304",
    "Protoz_934",
    "Protoz_935",
    "Protoz_701",
    "Protoz_702",
    "Protoz_703",
    "Protoz_704",
    "Protoz_705",
    "Protoz_706",
    "Protoz_707",
    "Protoz_708",
    "Protoz_709",
    "Protoz_936",
    "Protoz_761",
    "Protoz_758",
    "Protoz_757",
    "Protoz_759",
    "Protoz_760",
    "Protoz_885",
    "Protoz_861",
    "Protoz_862",
    "Protoz_863",
    "Protoz_864",
    "Protoz_866",
    "Protoz_867",
    "Protoz_868",
    "Protoz_869",
    "Protoz_870",
    "Protoz_855",
    "Protoz_856",
    "Protoz_857",
    "Protoz_858",
    "Protoz_859",
    "Protoz_860",
    "Protoz_872",
]