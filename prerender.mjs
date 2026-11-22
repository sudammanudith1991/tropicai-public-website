// Renders the app to static HTML at build time so search engines see every product without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const { render, structuredData } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href)
const html = render()
const ld = JSON.stringify(structuredData()).replace(/</g, '\\u003c')
const file = path.join(dist, 'index.html')
let tpl = fs.readFileSync(file, 'utf8')
if (!tpl.includes('<div id="root"></div>')) throw new Error('root placeholder not found')
tpl = tpl.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
tpl = tpl.replace('</head>', `  <script type="application/ld+json">${ld}</script>\n  </head>`)
fs.writeFileSync(file, tpl)
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
console.log(`prerendered ${Math.round(html.length / 1024)} KB of HTML`)
