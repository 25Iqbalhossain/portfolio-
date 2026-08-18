import re

with open("src/components/Hero.jsx", "r", encoding="utf-8") as f:
    text = f.read()

text = re.sub(r'<span aria-hidden="true">.*?</span>', '<span aria-hidden="true">\u2193</span>', text)

with open("src/components/Hero.jsx", "w", encoding="utf-8") as f:
    f.write(text)
print("arrow fixed in hero")
