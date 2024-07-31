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

### 
## Comments
- Giscus used for comments. 
- These comments are stored in the GitHub Discussions tab, and uses GitHub Discussions API
- To configure on a locally hosted site, check `giscus.app`
> Note: When changing Giscus config settings, change in both Comments Component and comments script
