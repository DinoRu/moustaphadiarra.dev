import siteMetadata from '@/data/siteMetadata'
import BrandIcon from '@/components/ui/BrandIcon'
import Link from '@/components/Link'

const BuiltWith = () => (
  <div className="flex items-center space-x-1">
    <span className="mr-1 text-gray-500 dark:text-gray-400">Built wiht</span>

    <div className="5 flex space-x-1">
      <Link href="https://nextjs.org?ref=karhdo.dev">
        <BrandIcon type="NextJS" className="h-5 w-5" />
      </Link>
      <Link href="https://nextjs.org?ref=karhdo.dev">
        <BrandIcon type="TailwindCSS" className="h-5 w-5" />
      </Link>
      <Link href="https://nextjs.org?ref=karhdo.dev">
        <BrandIcon type="Typescript" className="h-5 w-5" />
      </Link>
    </div>
    <span className="px-1 text-gray-400 dark:text-gray-500">-</span>
    <Link
      href={siteMetadata.siteRepo}
      className="text-gray-500 underline underline-offset-4 dark:text-gray-400"
    >
      <span data-umami-event="view-source">View code source</span>
    </Link>
  </div>
)

export default BuiltWith
