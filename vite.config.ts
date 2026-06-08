import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineConfig, type PreviewServer, type ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { RESUME_REDIRECT_TARGET } from './config/resume'

function resumeRedirect(
  req: IncomingMessage,
  res: ServerResponse,
  next: () => void,
): void {
  const path = req.url?.split('?')[0]
  if (path === '/resume') {
    res.statusCode = 302
    res.setHeader('Location', RESUME_REDIRECT_TARGET)
    res.end()
    return
  }
  next()
}

function resumeRedirectPlugin() {
  return {
    name: 'resume-redirect',
    configureServer(server: ViteDevServer) {
      server.middlewares.use(resumeRedirect)
    },
    configurePreviewServer(server: PreviewServer) {
      server.middlewares.use(resumeRedirect)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), resumeRedirectPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react-dom') || id.includes('react/')) return 'react'
          if (id.includes('@tanstack')) return 'router'
        },
      },
    },
  },
})
