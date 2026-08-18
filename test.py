import re

with open("src/index.css", "r", encoding="windows-1252", errors="ignore") as f:
    text = f.read()

# Replace the previous hero-canvas dark mode background
repl = """
:root[data-theme='dark'] .hero-canvas {
    background:
      radial-gradient(circle at 35% 40%, rgba(97,214,166,.035), transparent 32%),
      radial-gradient(circle at 75% 55%, rgba(130,150,145,.035), transparent 30%),
      var(--page);
}
"""

text = re.sub(r':root\[data-theme=[\'"]dark[\'"]\] \.hero-canvas\s*\{.*?\n  \}', repl.strip(), text, flags=re.DOTALL)

with open("src/index.css", "w", encoding="windows-1252") as f:
    f.write(text)

print("Updated hero-canvas background")
