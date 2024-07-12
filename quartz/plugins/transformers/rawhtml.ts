


import rehypeRaw from 'rehype-raw';
import { QuartzTransformerPlugin } from '../types';

// Define the transformer plugin
export const RawHtml: QuartzTransformerPlugin = () =>  {
  console.log("in Rawhtml plugin")
  return {
    name: "RawHtml",
    htmlPlugins(){
      return [rehypeRaw]
    },
  }
 
};

export default RawHtml;

