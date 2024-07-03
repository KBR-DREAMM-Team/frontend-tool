
/* import { getFullSlug } from "../../util/path";

const script = document.createElement('script');
script.src = "https://giscus-seven.vercel.app/client.js";
script.setAttribute('data-repo', 'KBR-DREAMM-Team/frontend-tool');
script.setAttribute('data-repo-id', 'R_kgDOMIn6OA');
script.setAttribute('data-category', 'Announcements');
script.setAttribute('data-category-id', 'DIC_kwDOMIn6OM4CgDDI');
script.setAttribute('data-mapping', 'url');
script.setAttribute('data-strict', '0');

script.setAttribute('data-reactions-enabled', '1');
script.setAttribute('data-emit-metadata', '1');
script.setAttribute('data-input-position', 'top');
script.setAttribute('data-theme', 'preferred_color_scheme');
script.setAttribute('data-lang', 'en');
script.setAttribute('loading', 'lazy');
script.setAttribute('crossorigin', 'anonymous');

function reloadIframeScript(): Promise<void> {
  

  return new Promise((resolve, reject) => {
    script.onload = () => {
      resolve(); // Resolve the promise once script is loaded
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
        console.log("removed")
      }
      document.head.appendChild(script);
    };

    script.onerror = (error) => {
      reject(error); // Reject the promise if there's an error loading the script
    };
  });
}

let previousSlug = getFullSlug(window); // Initialize previous slug with the current value
// Call reloadIframeScript every time user navigates
window.addEventListener("nav", () => {

  const currentSlug = getFullSlug(window);
  console.log("nav")
  
  if (currentSlug !== previousSlug) {
    console.log("Slug has changed. Reloading script...");
    console.log(currentSlug)
    console.log(previousSlug)
    reloadIframeScript()
    .then(() => {
      console.log("Script loaded successfully");
    })
    
    .catch((error) => {
      console.error("Error loading script:", error);
    });
    previousSlug = currentSlug;
    
  }
    

  
  
});

// Initial call to reloadIframeScript
reloadIframeScript()
  .then(() => {
    console.log("Initial script loaded successfully");
    document.head.appendChild(script);
    
  })
  .catch((error) => {
    console.error("Error loading initial script:", error);
  });
 */
