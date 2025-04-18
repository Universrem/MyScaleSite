# export_data.py
import json
import os
from backend.Data.univers import objects as universe
from backend.Data.geo import countries, cities

# Папка, куди будемо записувати
OUT_DIR = os.path.join("frontend", "data")
os.makedirs(OUT_DIR, exist_ok=True)

# 1) Всесвіт → frontend/data/univers.json
with open(os.path.join(OUT_DIR, "univers.json"), "w", encoding="utf-8") as f:
    json.dump(universe, f, ensure_ascii=False, indent=2)

# 2) Географія: країни → frontend/data/geo.json
with open(os.path.join(OUT_DIR, "geo.json"), "w", encoding="utf-8") as f:
    json.dump(countries, f, ensure_ascii=False, indent=2)


print("✅ Дамповано JSON у frontend/data/")
