import { Link } from './link'
import Bash from 'icons/bash.svg'
import CSS from 'icons/css.svg'
import Exercism from 'icons/exercism.svg'
import Git from 'icons/git.svg'
import GitHub from 'icons/github.svg'
import Goodreads from 'icons/goodreads.svg'
import HeadlessUI from 'icons/headlessui.svg'
import Hydrogen from 'icons/hydrogen.svg'
import IMBb from 'icons/imdb.svg'
import Java from 'icons/java.svg'
import Javascript from 'icons/javascript.svg'
import JWT from 'icons/jsonwebtokens.svg'
import Koa from 'icons/koa.svg'

import Markdown from 'icons/markdown.svg'
import MongoDB from 'icons/mongodb.svg'
import MySQL from 'icons/mysql.svg'

import Node from 'icons/nodejs.svg'
import Npm from 'icons/npm.svg'
import OpenAI from 'icons/openai.svg'
import { React } from '../lib/social-icons/icons'

import Prisma from 'icons/prisma.svg'

import Python from 'icons/python.svg'
import Railway from 'icons/railway.svg'
import IOS from 'icons/ios.svg'
import Umami from 'icons/umami.svg'
import Vercel from 'icons/vercel.svg'
import Webpack from 'icons/webpack.svg'
import { TypeScript } from '../lib/social-icons/icons'
import { NextJs } from '../lib/social-icons/icons'
import { Tailwind } from '../lib/social-icons/icons'
import { VsCode } from '../lib/social-icons/icons'
import { Flutter } from '../lib/social-icons/icons'
import { SiAndroidstudio } from 'react-icons/si'
import { Android } from '../lib/social-icons/icons'
export const BrandsMap = {
  React: {
    Icon: React,
    url: 'https://reactjs.org',
  },
  Goodreads: {
    Icon: Goodreads,
    url: 'https://www.goodreads.com/',
  },
  Git: {
    Icon: Git,
    url: 'https://git-scm.com',
  },
  GitHub: {
    Icon: GitHub,
    url: 'https://github.com',
  },
  Javascript: {
    Icon: Javascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  Typescript: {
    Icon: TypeScript,
    url: 'https://www.typescriptlang.org',
  },
  Node: {
    Icon: Node,
    url: 'https://nodejs.org',
  },
  Npm: {
    Icon: Npm,
    url: 'https://www.npmjs.com',
  },
  Bash: {
    Icon: Bash,
    url: 'https://www.gnu.org/software/bash',
  },

  Markdown: {
    Icon: Markdown,
    url: 'https://www.markdownguide.org',
  },
  NextJS: {
    Icon: NextJs,
    url: 'https://nextjs.org',
  },
  TailwindCSS: {
    Icon: Tailwind,
    url: 'https://tailwindcss.com',
  },
  Prisma: {
    Icon: Prisma,
    url: 'https://www.prisma.io',
  },
  Umami: {
    Icon: Umami,
    url: 'https://umami.is',
  },
  Vercel: {
    Icon: Vercel,
    url: 'https://vercel.com',
  },
  Railway: {
    Icon: Railway,
    url: 'https://railway.app',
  },

  OpenAI: {
    Icon: OpenAI,
    url: 'https://openai.com',
  },
  Hydrogen: {
    Icon: Hydrogen,
    url: 'https://hydrogen.shopify.dev/',
  },
  HeadlessUI: {
    Icon: HeadlessUI,
    url: 'https://headlessui.dev',
  },
  Webpack: {
    Icon: Webpack,
    url: 'https://webpack.js.org',
  },
  KoaJS: {
    Icon: Koa,
    url: 'https://koajs.com',
  },
  JWT: {
    Icon: JWT,
    url: 'https://jwt.io',
  },
  MongoDB: {
    Icon: MongoDB,
    url: 'https://www.mongodb.com',
  },
  CSS: {
    Icon: CSS,
    url: 'https://www.w3.org/Style/CSS/',
  },
  Python: {
    Icon: Python,
    url: 'https://www.python.org',
  },

  Exercism: {
    Icon: Exercism,
    url: 'https://exercism.org',
  },

  Java: {
    Icon: Java,
    url: 'https://java.com',
  },
  MySQL: {
    Icon: MySQL,
    url: 'https://mysql.com',
  },

  IMBb: {
    Icon: IMBb,
    url: 'https://www.imdb.com/',
  },

  Flutter: {
    Icon: Flutter,
    url: 'https://www.flutter.dev',
  },

  Android: {
    Icon: Android,
    url: 'https://developer.android.com/',
  },

  AndroidStudio: {
    Icon: SiAndroidstudio,
    url: 'https://developer.android.com/studio?',
  },

  VSCode: {
    Icon: VsCode,
    url: 'https://code.visualstudio.com/',
  },

  IOS: {
    Icon: IOS,
    url: 'https://www.apple.com',
  },
}

export function Brand(props: {
  name: keyof typeof BrandsMap
  as?: 'link' | 'icon'
  className?: string
  iconClassName?: string
}) {
  const { name, as = 'link', className, iconClassName } = props
  const { Icon, url } = BrandsMap[name] || {}

  if (!Icon) return <span>Missing brand icon for {name}</span>

  if (as === 'icon') {
    return <Icon className={className} fill="currentColor" />
  }

  return (
    <Link href={`${url}?ref=leohuynh.dev`} className={className}>
      <Icon className={iconClassName} fill="currentColor" />
    </Link>
  )
}
