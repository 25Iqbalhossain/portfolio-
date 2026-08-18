import re

with open("src/index.css", "r", encoding="windows-1252", errors="ignore") as f:
    text = f.read()

# Add standard dark mode variables if not perfectly present
dark_vars = """
:root[data-theme="dark"] {
  --page: #0d1110;
  --surface: #121816;
  --surface-soft: #18201d;

  --ink: #f2f5f3;
  --ink-muted: #aab3ae;
  --ink-faint: #76817b;

  --line: rgba(255,255,255,.10);
  --line-strong: rgba(255,255,255,.16);

  --accent: #61d6a6;
  --accent-deep: #61d6a6;
  --accent-soft: rgba(97,214,166,.12);
}

:root[data-theme="dark"] .portrait-arch {
  background: #27322e;
}

:root[data-theme="dark"] .hero-identity h1 {
  color: #f3f5f4;
}

:root[data-theme="dark"] .hero-role {
  color: #aeb8b2;
}

:root[data-theme="dark"] .hero-orbit-text {
  fill: rgba(235, 242, 238, .72);
}

:root[data-theme="dark"] .hero-orbit-center {
  border-color: #61d6a6;
  background: rgba(13,17,16,.45);
}

:root[data-theme="dark"] .hero-expertise {
  background: #121816;
}

:root[data-theme="dark"] .hero-expertise span {
  border-color: rgba(255,255,255,.08);
  color: #b5beb9;
}

:root[data-theme="dark"] .hero-social-link {
  color: #aab3ae;
}

:root[data-theme="dark"] .hero-social-link:hover {
  color: #f2f5f3;
}

:root[data-theme="dark"] .hero-bg-circles circle {
  stroke: rgba(255,255,255,.08);
}

:root[data-theme="dark"] .site-header--scrolled {
  background: rgba(13,17,16,.72);
}

/* Theme Toggle Button */
.hero-nav-actions, .nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.theme-toggle {
  width: 34px;
  height: 34px;
  display: inline-grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: rgba(255,255,255,.45);
  cursor: pointer;
  color: var(--ink);
  transition: background 180ms ease, border-color 180ms ease, transform 180ms ease, color 180ms ease;
}

.theme-toggle:hover {
  background: rgba(85, 201, 154, .10);
  border-color: rgba(85, 201, 154, .35);
  transform: translateY(-1px);
}

.theme-toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

:root[data-theme="dark"] .theme-toggle {
  background: rgba(255,255,255,.04);
  border-color: rgba(255,255,255,.12);
}

body, .hero-canvas, .hero-nav, .nav-shell, .expertise-strip, .portrait-arch, .site-header {
  transition: background-color 220ms ease, color 220ms ease, border-color 220ms ease;
}

"""

if ":root[data-theme=\"dark\"] {" in text:
    # Remove existing dark mode block so we can overwrite cleanly
    text = re.sub(r':root\[data-theme=[\'"]dark[\'"]\].*?}\s*', '', text, flags=re.DOTALL)
    
text += "\n" + dark_vars

with open("src/index.css", "w", encoding="windows-1252") as f:
    f.write(text)
print("Updated CSS with dark mode and toggle variables")
