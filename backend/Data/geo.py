# -*- coding: utf-8 -*-
"""Geography libraries (3‑language edition)

Each entry uses three‑language fields, mirroring the Universe library:
- category_en / category_ua / category_es
- country_en / country_ua / country_es   (cities only)
- name_en / name_ua / name_es
- description_en / description_ua / description_es
- data : list of yearly dicts with area & population
"""

countries = [
    {
        "category_en": "Country",
        "category_ua": "Країни",
        "category_es": "Países",
        "name_en": "Ukraine",
        "name_ua": "Україна",
        "name_es": "Ucrania",
        "description_en": "A sovereign state in Eastern Europe.",
        "description_ua": "Незалежна держава у Східній Європі.",
        "description_es": "Un estado soberano en Europa del Este.",
        "data": [
            {"year": 1989, "area": {"value": 603_628, "unit": "km²"}, "population": {"value": 51_545_200, "unit": "осіб"}},
            {"year": 2024, "area": {"value": 603_628, "unit": "km²"}, "population": {"value": 35_600_000, "unit": "осіб"}},
        ],
    },
    {
        "category_en": "Country",
        "category_ua": "Країни",
        "category_es": "Países",
        "name_en": "United States",
        "name_ua": "США",
        "name_es": "Estados Unidos",
        "description_en": "A federal republic in North America.",
        "description_ua": "Федеративна держава у Північній Америці.",
        "description_es": "Una república federal en América del Norte.",
        "data": [
            {"year": 1989, "area": {"value": 9_833_520, "unit": "km²"}, "population": {"value": 248_709_873, "unit": "осіб"}},
            {"year": 2024, "area": {"value": 9_833_520, "unit": "km²"}, "population": {"value": 339_996_563, "unit": "осіб"}},
        ],
    },
    # ... (additional countries with translations omitted for brevity — add similarly)
]

cities = [
    {
        "category_en": "City",
        "category_ua": "Міста",
        "category_es": "Ciudades",
        "country_en": "Ukraine",
        "country_ua": "Україна",
        "country_es": "Ucrania",
        "name_en": "Kyiv",
        "name_ua": "Київ",
        "name_es": "Kiev",
        "description_en": "Capital and largest city of Ukraine.",
        "description_ua": "Столиця та найбільше місто України.",
        "description_es": "Capital y ciudad más grande de Ucrania.",
        "data": [
            {"year": 1989, "area": {"value": 839, "unit": "km²"}, "population": {"value": 2_590_000, "unit": "осіб"}},
            {"year": 2024, "area": {"value": 839, "unit": "km²"}, "population": {"value": 2_950_000, "unit": "осіб"}},
        ],
    },
    {
        "category_en": "City",
        "category_ua": "Міста",
        "category_es": "Ciudades",
        "country_en": "Ukraine",
        "country_ua": "Україна",
        "country_es": "Ucrania",
        "name_en": "Lviv",
        "name_ua": "Львів",
        "name_es": "Leópolis",
        "description_en": "Historic city in western Ukraine.",
        "description_ua": "Історичне місто на заході України.",
        "description_es": "Ciudad histórica en el oeste de Ucrania.",
        "data": [
            {"year": 1989, "area": {"value": 182, "unit": "km²"}, "population": {"value": 816_000, "unit": "осіб"}},
            {"year": 2024, "area": {"value": 182, "unit": "km²"}, "population": {"value": 717_000, "unit": "осіб"}},
        ],
    },
    # ... (additional cities with translations omitted for brevity — add similarly)
]
