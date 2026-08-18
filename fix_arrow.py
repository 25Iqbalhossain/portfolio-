import re

with open("src/components/Navbar.jsx", "r", encoding="utf-8") as f:
    text = f.read()

text = re.sub(r'<b aria-hidden="true">.*?</b>', '<b aria-hidden="true">\u2193</b>', text)

with open("src/components/Navbar.jsx", "w", encoding="utf-8") as f:
    f.write(text)
print("arrow fixed")
