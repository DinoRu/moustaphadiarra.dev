'use-client'
import React from 'react'
import { Logo } from '../Header/logo'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { GrowingUnderline } from '../blog/growing-underline'

export default function LogoAndRepo() {
  return (
    <div className="flex items-center gap-4">
      <Logo />
      <Link href={siteMetadata.siteLogo} rel="noreferrer">
        <GrowingUnderline data-unami-event="footer-view-source" className="flex-center gap-2">
          <span className="font-medium">{siteMetadata.headerTitle}</span>
        </GrowingUnderline>
      </Link>
    </div>
  )
}
