/**
 * TypeScript 类型定义和配置导出
 */

// 定义配置类型
export interface SiteConfig {
  name: string;
  description: string;
  domain: string;
  url: string;
  repositoryUrl: string;
  issuesUrl: string;
  author: string;
  social: {
    twitter: string;
    facebook: string;
  };
  metadata: {
    keywords: string[];
    themeColor: string;
    manifestPath: string;
  };
  images: {
    icon: {
      favicon: string;
      favicon16: string;
      favicon32: string;
      apple: string;
    };
    logo: string;
    og: string;
  };
  game: {
    name: string;
    developer: string;
    platform: string;
    placeId: string;
    robloxUrl: string;
  };
}

// 导入 JavaScript 配置
import { siteConfig as config } from './site.js';

// 导出配置
export const siteConfig: SiteConfig = config;
