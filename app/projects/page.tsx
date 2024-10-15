import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '@/components/project/project-card'
import { PROJECTS } from '@/data/projectsData'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Some of my the stuff I have worked on.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap gap-20">
            {PROJECTS.map((d, idx) => (
              <ProjectCard key={d.title} project={d} reversed={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
