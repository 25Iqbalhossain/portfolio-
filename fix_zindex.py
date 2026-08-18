import re

with open("src/index.css", "r", encoding="windows-1252", errors="ignore") as f:
    text = f.read()

# Make sure hero-portrait-composition is overflow: visible and sets a stacking context if needed
# Although it already is overflow: visible; z-index: 2
# Let's adjust z-indexes
text = re.sub(r'(\.hero-orbit-badge\s*\{[^}]*?)(z-index:\s*\d+;)', r'\1z-index: 20; overflow: visible;', text)
text = re.sub(r'(\.hero-orbit-svg\s*\{[^}]*?)', r'\1 overflow: visible;', text)
text = re.sub(r'(\.hero-orbit-center\s*\{[^}]*?)(z-index:\s*\d+;)?', r'\1 z-index: 21;', text)
text = re.sub(r'(\.portrait-arch\s*\{[^}]*?)(z-index:\s*\d+;)', r'\1z-index: 4;', text)
text = re.sub(r'(\.hero-organic-line\s*\{[^}]*?)(z-index:\s*\d+;)?', r'\1 z-index: 6;', text)

with open("src/index.css", "w", encoding="windows-1252") as f:
    f.write(text)
print("Updated CSS z-indexes")
