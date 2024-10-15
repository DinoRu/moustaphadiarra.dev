import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import BuiltWith from './ui/BuildWith'

export default function Footer() {
  return (
    <footer>
      <div className="mb-4 mt-16 flex flex-col items-center justify-between md:h-auto md:flex-row">
        <BuiltWith />
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />

          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.headerTitle}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
