const fs = require('fs')
const globby = require('globby')
function addPage(page) {
  const path = page.replace('pages', '').replace('.js', '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  return `  <url>
    <loc>${`https://www.summareconbekasi-chrystalboulevard.com${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
}
async function generateSitemap() {
    // excludes Nextjs files and API routes.
    const pages = await globby([
      'src/app/**/*{.ts,.mdx}',
      '!src/app/_*.ts',
      '!src/app/api',
    ])
    console.log(pages)
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join('\n')}
  </urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
  }
  generateSitemap()