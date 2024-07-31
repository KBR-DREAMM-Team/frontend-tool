# Frontend Tool
## Local setup

### Adding to Existing Site
-Clone Repo onto local machine
- Run 'npm i'
- Add content to desired page, or create new .md file in the content folder in the root level of project directory
- Run 'npx quartz build --create' to start development server, and view changes
- Local server runs on `http://localhost:8080`
- 
### Creating New Site
- Clone repo, then `npm i` and `npx quartz create`
- To generate pages, add .md files to content folder.
- Run 'npx quartz build --create' to start development server, and view web app
- Local server runs on `http://localhost:8080`

### Supported Formats
- All standard MarkDown features are supported
- GFM (GitHub Flavored MarkDown) is supported
  - `https://github.com/SuperKevinZhou/GithubFlavoredMarkdown` is a good starter guide for GFM
  - Wikilinks using `[[content]]`
- OFM (Obsidian Flavored MarkDown) is also supported
   - Internal links using `[[link]]`
     - These provide a popover view of a page
- Frontmatter, metadata for a page, is escaped using `---` on the lines before and after the Frontmatter
  - This can be used to name a page, and provide additional info
- Raw HTML can be written directly into the MarkDown file, without the need for escape characters by use of the RawHTML plugin.
  - All HTML tags are supported, including iFrames, scripts, and styling.
- Inserting images, videos, etc is done by placing the desired content in the content file, and `![](file_name.png)`
- For a more in-depth description of what is and isn't allowed, reference [['https://quartz.jzhao.xyz/']]
- 
## Comments
- Giscus used for comments. 
- These comments are stored in the GitHub Discussions tab, and uses GitHub Discussions API
- To configure on a locally hosted site, check `giscus.app`
> Note: When changing Giscus config settings, change in both Comments Component and comments script
