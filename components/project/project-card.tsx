import clsx from 'clsx'
// import type { BrandsMap } from '~/components/ui/brand'
// import { Brand } from '~/components/ui/brand'
import { GradientBorder } from '../ui/gradient-border'
// import { GrowingUnderline } from '~/components/ui/growing-underline'
import { GrowingUnderline } from '../blog/growing-underline'
import { Image } from '../ui/image'

import { Link } from '../ui/link'
import { RadiantCard } from '../ui/radient-card'

import { Brand, BrandsMap } from '../ui/brand'
import { GithubRepository } from 'types/data'
import { PROJECTS } from '@/data/projectsData'
import { RepoMeta } from './repo-meta'
import { BsGithub } from 'react-icons/bs'

export function ProjectCard({
  project,
  reversed,
}: {
  project: (typeof PROJECTS)[0]
  reversed?: boolean
}) {
  const { title, description, imgSrc, href, tools } = project

  return (
    <RadiantCard
      className={clsx([
        'my-18',
        'flex flex-col gap-6 p-4 md:h-80 md:flex-row md:gap-12 md:p-8',
        reversed && 'md:flex-row-reverse',
      ])}
    >
      <div className="flex h-56 items-end sm:h-80 md:h-auto md:w-1/2">
        <GradientBorder className="rounded-2xl">
          <Image
            alt={title}
            src={imgSrc}
            className="h-full max-h-full w-full rounded-2xl object-cover object-center shadow-lg"
            width={1000}
            height={1000}
          />
        </GradientBorder>
      </div>
      <div className="flex grow flex-col justify-between space-y-6 pb-1 md:w-1/2 md:pb-0">
        <div className="space-y-4">
          <h2 className="text-[1.75rem] font-semibold leading-8">{title}</h2>
          <p>{description}</p>
          <div className="max-w-none space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {tools.map((tool, index) => {
                return (
                  <span
                    key={`${tool}-${index}`}
                    className="bg-primary-100 px-2 py-1 text-xs dark:bg-gray-900 dark:text-gray-500"
                  >
                    {tool}
                  </span>
                )
              })}
            </div>
          </div>
          <div className="mt-auto flex w-fit items-center gap-4 p-2">
            <Link
              href={href}
              title="Source code on Github"
              className="dark:text-gray-500 hover:dark:text-white"
            >
              <BsGithub className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
            </Link>
          </div>
        </div>
      </div>
    </RadiantCard>
  )
}
