import re

with open("src/components/Hero.jsx", "r", encoding="utf-8", errors="ignore") as f:
    text = f.read()

# Make sure Hero receives props
text = re.sub(r'export default function Hero\(\)\s*\{', r'export default function Hero({ theme, onToggleTheme }) {', text)

# Insert the toggle button right before Download CV
# We will just duplicate the ThemeIcon component logic directly or import it if needed. Actually we can just inline an SVG depending on theme.
svg_sun = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
svg_moon = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" class="moon-icon" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'

toggle_btn = f'''
        <div className="hero-nav-actions">
          <button className="theme-toggle" type="button" onClick={{onToggleTheme}} aria-label={{theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}} aria-pressed={{theme === 'dark'}}>
            {{theme === 'light' ? ({svg_moon}) : ({svg_sun})}}
          </button>
          <a className="hero-nav-cv" href="/Md_Iqbal_Hossain_CV.pdf" download>
            Download CV <span aria-hidden="true">?</span>
          </a>
        </div>
'''

text = re.sub(
    r'<a className="hero-nav-cv" href="/Md_Iqbal_Hossain_CV.pdf".*?</a>',
    toggle_btn.strip(),
    text,
    flags=re.DOTALL
)

with open("src/components/Hero.jsx", "w", encoding="utf-8") as f:
    f.write(text)

print("Modified Hero.jsx")
