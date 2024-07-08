
// @ts-ignore
import script from "./scripts/comments.inline"

import { QuartzComponentProps, QuartzComponentConstructor } from "./types"
import 'giscus';

export default (() => {
    
    function Comments(props: QuartzComponentProps) { 
      return (
        <>
          <div id="giscus-container">

          </div>
        </>
      )
    }
    
    Comments.beforeDOMLoaded=script;
    return Comments
  }) satisfies QuartzComponentConstructor