import re

with open("src/components/Navbar.jsx", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Replace the icon-button with theme-toggle and fix SVGs
svg_sun = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
svg_moon = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" class="moon-icon" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'

# First remove the separate ThemeIcon component definition
text = re.sub(r'function ThemeIcon.*?}\s+', '', text, flags=re.DOTALL)

button_repl = f'''<button className="theme-toggle" type="button" onClick={{onToggleTheme}} aria-label={{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}} aria-pressed={{theme === 'dark'}}>
            {{theme === 'light' ? ({svg_moon}) : ({svg_sun})}}
          </button>'''

text = re.sub(
    r'<button className="icon-button" type="button" onClick=\{onToggleTheme\}.*?</button>',
    button_repl,
    text,
    flags=re.DOTALL
)

with open("src/components/Navbar.jsx", "w", encoding="utf-8") as f:
    f.write(text)
print("Modified Navbar.jsx")
