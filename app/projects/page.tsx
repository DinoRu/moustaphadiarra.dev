// import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { ProjectCard } from '@/components/project/project-card'
import { projectsData } from '@/data/mainData'
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
            Collections of my open-source side projects, along with some cool things I’ve built with
            colleagues at work. It’s a mix of passion projects and practical tools—some just for
            fun, others to solve real-world problems.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap gap-20">
            {PROJECTS.map((d, idx) => (
              // <Card
              //   key={d.title}
              //   title={d.title}
              //   description={d.description}
              //   imgSrc={d.imgSrc}
              //   href={d.href}
              // />
              <ProjectCard key={d.title} project={d} reversed={idx % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
