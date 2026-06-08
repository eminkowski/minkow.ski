import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { findCopyViolations } from '../src/lib/copy-rules'

const ROOTS = ['index.html', 'README.md', 'src']
const SCANNED_EXTENSIONS = new Set(['.ts', '.tsx', '.html', '.md'])

function collectFiles(path: string, files: string[] = []): string[] {
  const stat = statSync(path)
  if (stat.isFile()) {
    if (path.endsWith('.test.ts')) {
      return files
    }
    const ext = path.slice(path.lastIndexOf('.'))
    if (SCANNED_EXTENSIONS.has(ext)) {
      files.push(path)
    }
    return files
  }

  for (const name of readdirSync(path)) {
    collectFiles(join(path, name), files)
  }
  return files
}

const files = ROOTS.flatMap(root => collectFiles(root))
const violations = files.flatMap(file => {
  const content = readFileSync(file, 'utf8')
  return findCopyViolations(content).map(violation => ({ file, ...violation }))
})

if (violations.length > 0) {
  console.error('check-copy: found em/en dashes in user-facing files:\n')
  for (const violation of violations) {
    console.error(`  ${violation.file}:${violation.line}  ${violation.char}`)
    console.error(`    ${violation.excerpt}\n`)
  }
  console.error('Use a plain hyphen (-) or rewrite the sentence.')
  process.exit(1)
}

console.log(`check-copy: ok (${files.length} files)`)
