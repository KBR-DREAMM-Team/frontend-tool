
// @ts-ignore
import script from "./scripts/comments.inline"
import { getFullSlug } from "../util/path";

import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
import 'giscus';

//giscus-widget throws error because it's not proper JSX
//Global namespace for giscus-widget in quartz/index.d.ts
export default (() => {
    
    function Comments(props: QuartzComponentProps) { 
      
      return (
        <>
        <script src="https://giscus-seven.vercel.app/client.js"
            data-repo="KBR-DREAMM-Team/frontend-tool"
            data-repo-id="R_kgDOMIn6OA"
            data-category="Announcements"
            data-category-id="DIC_kwDOMIn6OM4CgDDI"
            data-mapping="url"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme="preferred_color_scheme"
            data-lang="en"
            crossorigin="anonymous"
            >
          </script>
        
        </>
          
      
      )
    }
    
    //Comments.beforeDOMLoaded=script;
    //Comments.afterDOMLoaded=script2;
    return Comments
  }) satisfies QuartzComponentConstructor