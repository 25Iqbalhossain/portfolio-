import re

svg_moon = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 14.2A8 8 0 0 1 9.8 3.5a8.3 8.3 0 1 0 10.7 10.7Z" /></svg>'
svg_sun = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>'

def fix_hero():
    with open("src/components/Hero.jsx", "r", encoding="utf-8") as f:
        text = f.read()

    button_regex = r'<button className="theme-toggle" type="button" onClick=\{onToggleTheme\} aria-label=\{theme === \'dark\' \? \'Switch to light mode\' : \'Switch to dark mode\'\} aria-pressed=\{theme === \'dark\'\}>.*?</button>'
    button_repl = f'<button className="theme-toggle" type="button" onClick={{onToggleTheme}} aria-label={{theme === \'dark\' ? \'Switch to light mode\' : \'Switch to dark mode\'}} aria-pressed={{theme === \'dark\'}}>\n            {{theme === \'dark\' ? ({svg_sun}) : ({svg_moon})}}\n          </button>'
    
    text = re.sub(button_regex, button_repl, text, flags=re.DOTALL)
    
    text = text.replace('Download CV <span aria-hidden="true">?</span>', 'Download CV <span aria-hidden="true">\u2193</span>')
    
    text = re.sub(r'\{/\* -- [^\?]+\?.*? -- \*/\}', lambda m: m.group(0).replace('?', '\u2014'), text)
    text = text.replace('AI ? ML ? INTELLIGENT SYSTEMS', 'AI \u00B7 ML \u00B7 INTELLIGENT SYSTEMS')
    
    orbit_text_regex = r'<textPath href="#heroOrbitPath" startOffset="0%">(.*?)</textPath>'
    correct_orbit = 'MACHINE LEARNING \u00B7 DEEP LEARNING \u00B7 NLP \u00B7 LLM \u00B7 FASTAPI \u00B7 AWS \u00B7&nbsp;'
    text = re.sub(orbit_text_regex, f'<textPath href="#heroOrbitPath" startOffset="0%">\n                 {correct_orbit}\n                </textPath>', text, flags=re.DOTALL)

    with open("src/components/Hero.jsx", "w", encoding="utf-8") as f:
        f.write(text)

def fix_navbar():
    with open("src/components/Navbar.jsx", "r", encoding="utf-8") as f:
        text = f.read()

    button_regex = r'<button className="theme-toggle" type="button" onClick=\{onToggleTheme\} aria-label=\{theme === \'dark\' \? \'Switch to light mode\' : \'Switch to dark mode\'\} aria-pressed=\{theme === \'dark\'\}>.*?</button>'
    button_repl = f'<button className="theme-toggle" type="button" onClick={{onToggleTheme}} aria-label={{theme === \'dark\' ? \'Switch to light mode\' : \'Switch to dark mode\'}} aria-pressed={{theme === \'dark\'}}>\n            {{theme === \'dark\' ? ({svg_sun}) : ({svg_moon})}}\n          </button>'
    text = re.sub(button_regex, button_repl, text, flags=re.DOTALL)

    text = re.sub(r'<span>Download CV</span><b aria-hidden="true">.*?</b>', '<span>Download CV</span><b aria-hidden="true">\u2193</b>', text)

    with open("src/components/Navbar.jsx", "w", encoding="utf-8") as f:
        f.write(text)

fix_hero()
fix_navbar()
print("Done fixing icons and characters")
