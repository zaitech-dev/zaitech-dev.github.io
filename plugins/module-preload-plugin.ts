import type { Plugin } from 'vite';

export function modulePreloadPlugin(): Plugin {
  return {
    name: 'module-preload',
    apply: 'build',
    generateBundle(options, bundle) {
      // Get all JS chunks
      const jsChunks = Object.values(bundle).filter(chunk => 
        chunk.type === 'chunk' && chunk.fileName.endsWith('.js')
      );

      // Find the main entry chunk
      const entryChunk = jsChunks.find(chunk => 
        chunk.type === 'chunk' && chunk.isEntry
      );

      if (entryChunk && entryChunk.type === 'chunk') {
        // Add modulepreload for critical chunks
        const criticalChunks = ['react-vendor', 'ui-vendor', 'home-page'];
        const preloadChunks = jsChunks.filter(chunk => 
          chunk.type === 'chunk' && 
          criticalChunks.some(name => chunk.fileName.includes(name))
        );

        // Store preload info for HTML generation
        (this as any).preloadChunks = preloadChunks.map(chunk => ({
          href: `/${chunk.fileName}`,
          rel: 'modulepreload',
          crossorigin: true
        }));
      }
    }
  };
}
