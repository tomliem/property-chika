/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.summareconbekasi-chrystalboulevard.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/account'],
    additionalPaths: async (config) => {
      const result = []
  
      // required value only
      result.push({ loc: '/ratina' })
      result.push({ loc: '/bram' })
  
      // all possible values
      // result.push({
      //   loc: '/additional-page-2',
      //   changefreq: 'yearly',
      //   priority: 0.7,
      //   lastmod: new Date().toISOString(),
  
      //   // acts only on '/additional-page-2'
      //   alternateRefs: [
      //     {
      //       href: 'https://es.example.com',
      //       hreflang: 'es',
      //     },
      //     {
      //       href: 'https://fr.example.com',
      //       hreflang: 'fr',
      //     },
      //   ],
      // })
  
      // using transformation from the current configuration
      // result.push(await config.transform(config, '/additional-page-3'))
  
      return result
    },
  }
  