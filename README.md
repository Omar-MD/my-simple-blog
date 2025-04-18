# 11ty

### CLI commands/options
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

----