## 11ty Terms Glossary

|          Term         |                                   Meaning                                         |
|-----------------------|-----------------------------------------------------------------------------------|
| **11ty/ Eleventy**    | Simple static site generator based on JS                                          |
| **Template**          | A file that generates HTML e.g. .md, .ndjk                                        | 
| **Template Engine**   | Syntax processor for templates e.g Markdown, Nunjuks                              |
| **Front Matter**      | YAML metadata at top of template file                                             |
| **Data Cascade**      | Layered property of data sources: global -> directory -> template -> front matter |
| **Global Data**       | JSON/JS files in `_data/` that provide site-wide values                           |
| **Directory Data**    | JSON files in directory that apply to all templates in that directory             |
| **Computed Data**     | Dynamic values defined in front matter via JS expressions                         |
| **Shortcodes**        | Re-usable snippets of template code defined in config file                        |
| **Paired Shortcodes** | Shortcodes that wrap content (like block helpers)                                 |
| **Filters**           | Functions that transform output in templates (e.g., date formatting)              |
| **Collections**       | Groups of content (like blog posts) defined via tags                              |
| **Permalink**         | Defines the output path/URL for a template                                        |
| **Passthrough Copy**  | Copies static assets (images, CSS, etc.) directly to output                       |
| **Input Directory**   | Source folder for your content and templates (default is `.`)                     |
| **Output Directory**  | Folder where built files go (default is `_site`)                                  |
| **Watch Mode**        | Watches for file changes and rebuilds the site automatically                      |
| **Serve Mode**        | Starts a local dev server and enables watch + live reload                         |
| **Dry Run**           | Simulates a build without writing any files (`--dryrun`)                          |
| **Formats**           | File extensions Eleventy will process (`--formats=md,html,...`)                   |
| **Layouts**           | Shared wrappers for content pages, like a base HTML structure                     |
| **Config File**       | `.eleventy.js`, the main customization file for your project                      |
| **Plugins**           | Community or custom JavaScript modules that extend Eleventy's functionality       |
