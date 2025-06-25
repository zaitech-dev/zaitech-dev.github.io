import type { Plugin } from 'vite';

export function htmlUpdatePlugin(): Plugin {
  return {
    name: 'html-update',
    apply: 'build',
    generateBundle(options, bundle) {
      // Find the HTML file
      const htmlFile = Object.values(bundle).find(file => 
        file.type === 'asset' && file.fileName === 'index.html'
      );

      if (htmlFile && htmlFile.type === 'asset' && typeof htmlFile.source === 'string') {
        let html = htmlFile.source;

        // Find the actual chunk names
        const reactVendorChunk = Object.values(bundle).find(chunk => 
          chunk.type === 'chunk' && chunk.fileName.includes('react-vendor')
        );
        
        const mainChunk = Object.values(bundle).find(chunk => 
          chunk.type === 'chunk' && chunk.isEntry
        );

        // Update modulepreload links with actual filenames
        if (reactVendorChunk) {
          html = html.replace(
            'href="/assets/js/react-vendor.js"',
            `href="/${reactVendorChunk.fileName}"`
          );
        }

        if (mainChunk) {
          html = html.replace(
            'href="/assets/js/home-page.js"',
            `href="/${mainChunk.fileName}"`
          );
        }

        htmlFile.source = html;
      }
    }
  };
}
