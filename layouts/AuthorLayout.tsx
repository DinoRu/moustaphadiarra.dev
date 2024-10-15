import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { Button } from '@/components/ui/button'
import { CareerTimeline } from '@/components/CareerTimeLine'
import { SoftSkills, softSkills } from '@/components/SoftSkills'
import { Career } from '@/components/Career'
// import { Experience } from '@/components/Experience'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={250}
                height={250}
                className="h-52 w-52 rounded-full object-cover"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
            </div>
          </div>
          <div className="prose prose-lg max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <div>
              <h2 className="mt-0">Hi 👋,</h2>
              <p>
                I'm{' '}
                <span
                  className="underline-magical pb-2 pt-4 
                  text-lg
                  font-bold leading-8 tracking-tight sm:text-xl md:text-2xl"
                >
                  Diarra Moustapha,{' '}
                </span>
                a <strong> SoftwareSoftware Engineer</strong> and passionate web, mobile, and API
                developer living in Russia, where I harness the power of technology to create
                impactful solutions. With expertise in languages like{' '}
                <strong>Python, JavaScript, and Dart</strong>. I thrive in diverse environments and
                enjoy working with cutting-edge frameworks such as <strong> Django</strong>,{' '}
                <strong>FastAPI</strong>, <strong>Flutter</strong>, <strong>React</strong>, and{' '}
                <strong>Next.js</strong>.
              </p>
              <p>
                In my professional journey, I strive to automate processes and enhance user
                experiences, developing applications that make a difference. My love for technology
                goes beyond coding; in my free time, I delve into research and immerse myself in
                literature on psychology, new discoveries, and innovative technologies. This
                continuous learning fuels my creativity and keeps me at the forefront of industry
                trends.{' '}
              </p>
              <p>
                If you're looking for a dedicated developer who is eager to tackle challenges and
                contribute to dynamic projects, let's{' '}
                <a href="mailto:diarra.msa.pro@gmail.com">connect!</a>
              </p>
            </div>
            <div>
              <div className="mb-[1em] mt-[2rem] flex items-center justify-between [&>h2]:my-0">
                <h2>My career</h2>
                {/* <Button>
                  <span>Resume</span>
                </Button> */}
              </div>
              <Career />
            </div>
            {/* <div>
              <Experience />
            </div> */}
            <div>
              <h2>My Soft Skills</h2>
              <div className="mt-6 space-y-4">
                {softSkills.map((skill) => (
                  <SoftSkills key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
