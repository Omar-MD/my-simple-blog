# 11ty

### CLI
Compile templates: 
```bash 
yarn exec eleventy
yarn exec eleventy --input=. --output=_site
```

Formats:
```bash
yarn exec eleventy --formats=md,html,ejs    # Use only a subset of template types
yarn exec eleventy --formats=               # Don’t process any formats
```

Server:
```bash
yarn exec eleventy --serve                  # Add web server to apply changes and refresh automatically. We’ll also --watch for you.
yarn exec eleventy --serve --port=8081      # Change web server’s port—use localhost:8081
yarn exec eleventy --watch                  # Watch and re-run when files change, without the web server.
```

Options:
```bash
yarn exec eleventy --quiet                  # Don't log so much to console
...                --dryrun                 # Run but don't write any files
...                --config=myConfig.js     # override default config name ".eleventy.js"
```

Outputs:
```bash
yarn exec eleventy --to=json/ndjson         # Does not write to file system but Json or newline delimited Json
...                --to=fs                  # Default (file system)
```
DEBUG:
```bash
yarn exec cross-env DEBUG=Eleventy:\* yarn exec @11ty/eleventy --dryrun
```

### Config

Preferred config shape is to use callback func as it supports Config API.
Can Also add auto complete by adding import JsDoc.

```javascript
/** @param {import("@11ty/eleventy").UserConfig} config */
export default async function(config) {
    // Configure Eleventy
};
```
See the [.eleventy.js](./.eleventy.js) config file for details.

### 11ty Terms Glossary

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
