// Optional sitemap regeneration for local maintenance.
const SITE_URL = "https://steal-an-egg.github.io";

module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  trailingSlash: true,
  outDir: "./public",
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${SITE_URL}/sitemap.xml`],
  },
};
