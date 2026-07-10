You are a senior technical SEO engineer and full-stack web developer. Audit and upgrade my website’s SEO implementation comprehensively while preserving all existing branding, pages, UI, functionality, routes, content, and legacy aliases.

Website and owned domains:

* Primary canonical domain: https://nafij.me
* Additional owned domains:

  * https://nafijrahaman.me
  * https://nafij.ninja
  * https://nafij.dev
  * https://nafijrahaman.dev
  * https://nafijrahaman.pro.bd

Goal:
Build a strong, ethical personal-brand SEO foundation so users and search engines can discover me through my real name, spelling variations, aliases, developer identity, portfolio-related searches, and owned domains.

Important SEO rules:

1. Do not remove old branding, old aliases, existing metadata, legacy pages, or current SEO features unless replacing them with a stronger equivalent.
2. Do not use cloaking, invisible keyword blocks, `display:none` keyword text, off-screen keyword spam, hidden links, white-on-white text, or content visible only to bots/AI. These violate search-engine guidelines and can reduce rankings.
3. Use keywords naturally in valid SEO locations: page titles, meta descriptions, headings, body copy where relevant, image alt text, Open Graph metadata, Twitter metadata, JSON-LD structured data, sitemap, robots.txt, canonical URLs, internal links, and profile/about/contact pages.
4. Do not keyword-stuff. Keep all copy readable, human-first, professional, and relevant.
5. Keep the frontend visually clean. SEO enhancements must not clutter the UI. Use metadata, JSON-LD, semantic HTML, and naturally written supporting content rather than visible spam.
6. Do not claim that all domains will rank “on top.” Search rankings cannot be guaranteed. Instead, create a correct domain strategy that consolidates authority into the primary domain.

Brand identity and search aliases to preserve and expand:
Primary identity:

* Nafij Rahaman
* Nafijur Rahaman
* NafijurRahaman
* Nafij Rahaman
* Nafij

Aliases and keyword variations:

* nafijrahaman
* nafijur rahaman
* nafijurrahaman
* nafij
* nafis
* nafiz rahaman
* nafiz khan
* nafij ahmed
* nafijthepro
* nafijpro
* nafijprobd
* nafijrahamanbd
* nafijbd

Important:
Treat these as name variations, historical aliases, usernames, and discoverability terms. Do not falsely state that every variation is a legal name. Use wording such as:
“Also known online as…”
“Previous usernames and brand aliases include…”
“Search aliases include…”

Technical implementation requirements:

A. Canonical domain and redirect strategy

1. Set https://nafij.me as the single canonical primary domain.
2. Configure permanent 301 redirects from:

   * nafijrahaman.me
   * nafij.ninja
   * nafij.dev
   * nafijrahaman.dev
   * nafijrahaman.pro.bd
     to the equivalent URL path on https://nafij.me.
3. Example:
   https://nafij.dev/projects/example → https://nafij.me/projects/example
4. Do not allow duplicate pages to index across multiple domains.
5. Add a self-referencing canonical tag on every primary-domain page:

   <link rel="canonical" href="https://nafij.me/current-page-path" />
6. On redirected domains, do not publish duplicate content. Use redirects rather than separate duplicate websites.

B. Global metadata
Create reusable metadata logic for all pages. Each page must have:

* Unique title
* Unique meta description
* Canonical URL
* Open Graph title, description, URL, site name, image, image alt text
* Twitter Card metadata
* Robots directives
* Theme color
* Language declaration
* Proper viewport tag

Homepage title example:
Nafij Rahaman (Nafijur Rahaman) | Full-Stack Developer & Portfolio

Homepage meta description example:
Nafij Rahaman, also known online as Nafijur Rahaman and Nafij Pro, is a Bangladesh-based full-stack developer building modern web applications, developer tools, real-time platforms, and digital products.

Use a concise keyword meta tag only as a secondary compatibility layer. Do not rely on it for ranking.

Suggested keyword meta tag:
nafij rahaman, nafijur rahaman, nafijurrahaman, nafijrahaman, nafij, nafij pro, nafijpro, nafijthepro, nafijprobd, nafijrahamanbd, nafijbd, nafis, nafiz rahaman, nafiz khan, nafij ahmed, full stack developer, web developer, software developer, portfolio, Bangladesh developer

C. Semantic HTML and on-page SEO

1. Ensure each page has exactly one meaningful H1.
2. Use semantic elements correctly:

   * header
   * nav
   * main
   * article
   * section
   * aside
   * footer
3. Add descriptive H2 and H3 headings relevant to each page.
4. Ensure all images have accurate alt text.
5. Use descriptive internal-link anchor text, not generic “click here.”
6. Add a visible, concise “About Nafij Rahaman” section on the homepage or About page.
7. Add a visible, professional “Also known online as” line on the About page. Keep it short and natural.
8. Add a contact page with real contact methods and structured data. Do not fabricate phone numbers, addresses, social profiles, or email addresses.

D. About-page identity content
Create or improve a dedicated About page that naturally includes:

* Nafij Rahaman
* Nafijur Rahaman
* NafijurRahaman
* Nafij Pro / NafijPro
* nafijthepro
* nafijprobd
* nafijrahamanbd
* nafijbd

Use a natural paragraph such as:
“Nafij Rahaman, also known online as Nafijur Rahaman, Nafij Pro, NafijThePro, and NafijProBD, is a full-stack developer and digital creator focused on modern web development, real-time applications, cloud deployment, and developer-focused products.”

Do not repeat all aliases unnaturally on every page. Use them strategically on the About page, profile schema, footer copyright area where appropriate, and structured data.

E. JSON-LD structured data
Add valid JSON-LD schema to the homepage and relevant pages.

1. Person schema:

* @context: https://schema.org
* @type: Person
* name: Nafij Rahaman
* alternateName:

  * Nafijur Rahaman
  * NafijurRahaman
  * Nafij
  * Nafij Pro
  * NafijPro
  * NafijThePro
  * NafijProBD
  * NafijRahamanBD
  * NafijBD
  * Nafis
  * Nafiz Rahaman
  * Nafiz Khan
  * Nafij Ahmed
* url: https://nafij.me
* sameAs: include only verified, real public profiles and owned domains
* jobTitle: Full-Stack Developer
* description: concise professional bio
* knowsAbout: Web Development, React, Node.js, JavaScript, TypeScript, MongoDB, Firebase, Cloudflare, Full-Stack Development, UI/UX, APIs
* image: only if a valid public profile image exists
* contactPoint: only if valid contact information exists

2. WebSite schema:

* name: Nafij Rahaman
* alternateName: Nafij Pro
* url: https://nafij.me
* potentialAction: SearchAction only if the website has a working internal search page.

3. WebPage schema:

* Use page-specific name, description, URL, and breadcrumb data.

4. ProfilePage schema:

* Use on About/profile page and connect it to the Person entity.

5. ContactPage schema:

* Use only on the contact page.
* Include valid email, social URLs, or contact form URL only when available.

6. BreadcrumbList schema:

* Add to all nested pages such as Projects, Blog, Services, Contact, and individual project pages.

F. Contact and AI-readable information
Make contact and identity information machine-readable through:

* Valid JSON-LD Person and ContactPage schema
* Semantic HTML
* Proper page titles and descriptions
* A clearly accessible contact page
* `rel="me"` links for verified public social profiles
* Consistent name, role, and domain references

Do not hide contact information only for AI. If contact information is intended to be public, show it clearly to users as well. If it is private, do not publish it in metadata or schema.

G. Sitemap and robots.txt

1. Generate and maintain:

   * https://nafij.me/sitemap.xml
   * https://nafij.me/robots.txt
2. Include all indexable canonical pages in sitemap.xml.
3. Exclude:

   * admin pages
   * private dashboards
   * authentication routes
   * duplicate URLs
   * query parameter duplicates
   * staging pages
4. robots.txt should allow normal crawling and reference the sitemap:
   Sitemap: https://nafij.me/sitemap.xml
5. Do not block important CSS, JavaScript, image, or page resources needed for rendering.

H. Open Graph and social sharing
Implement:

* og:type = website for homepage
* og:type = article for blog posts
* og:site_name = Nafij Rahaman
* og:url = canonical URL
* og:image = high-quality branded social preview image
* twitter:card = summary_large_image
* twitter:title
* twitter:description
* twitter:image
* twitter:image:alt

Create a consistent branded social preview image with:

* Nafij Rahaman
* Full-Stack Developer
* nafij.me
* clean, professional design
* correct 1200 × 630 dimensions

I. Performance and technical quality
Audit and improve:

* Core Web Vitals
* Mobile responsiveness
* Image compression and next-generation image formats
* Lazy loading for non-critical images
* Font optimization
* Script deferral
* CSS optimization
* Cache headers
* HTTPS enforcement
* No mixed content
* 404 page quality
* Redirect chains
* Broken internal links
* Duplicate title tags
* Duplicate meta descriptions
* Missing canonical tags
* Missing alt text
* Structured-data validation errors

J. Content architecture
Create or improve these pages if relevant:

* Home
* About
* Projects
* Skills / Tech Stack
* Contact
* Blog or Notes
* Privacy Policy
* Terms if applicable

For each project page, add:

* Project name
* Problem solved
* Technology stack
* Features
* Screenshots with alt text
* Live URL if available
* GitHub URL if public
* Project schema where appropriate

K. Search Console and indexing checklist
Provide implementation instructions for:

1. Verifying https://nafij.me in Google Search Console.
2. Submitting sitemap.xml.
3. Inspecting homepage and key pages for indexing.
4. Setting up Bing Webmaster Tools.
5. Adding analytics only with privacy-conscious configuration.
6. Monitoring branded searches for:

   * Nafij Rahaman
   * Nafijur Rahaman
   * Nafij Rahaman developer
   * Nafij Pro
   * NafijThePro
   * nafijrahaman
   * nafij.me

Expected output from you:

1. First, inspect the existing project structure and identify framework, routing, metadata system, and deployment configuration.
2. Then provide a concise SEO audit of current issues.
3. Implement the SEO improvements directly in the project code.
4. Show every changed file with clear explanations.
5. Provide production-ready code, not pseudocode.
6. Preserve existing UI and branding.
7. Add comments only where useful.
8. Validate JSON-LD syntax and ensure it passes Schema.org / Google Rich Results validation where applicable.
9. Give a final deployment checklist including redirects, canonical domain, sitemap, Search Console, and social-preview testing.

Do not make unsupported claims about rankings. Focus on technical correctness, entity clarity, high-quality content, canonicalization, and sustainable branded discoverability.
S