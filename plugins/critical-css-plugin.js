import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function criticalCSSPlugin() {
  return {
    name: 'critical-css',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const criticalCSSPath = path.join(__dirname, '..', 'critical.css');
        
        if (fs.existsSync(criticalCSSPath)) {
          const criticalCSS = fs.readFileSync(criticalCSSPath, 'utf-8');
          
          // Inline critical CSS
          const criticalStyle = `<style>${criticalCSS}</style>`;
          
          // Insert critical CSS before the first stylesheet
          const modifiedHtml = html.replace(
            /<link[^>]*rel="stylesheet"[^>]*>/,
            `${criticalStyle}\n    $&`
          );
          
          // Add preload for non-critical CSS
          return modifiedHtml.replace(
            /<link([^>]*rel="stylesheet"[^>]*)>/g,
            '<link$1 media="print" onload="this.media=\'all\'; this.onload=null;">'
          );
        }
        
        return html;
      }
    }
  };
}
