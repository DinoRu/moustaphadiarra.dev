import clsx from 'clsx'
import { Image } from './ui/image'
import { Minus, Plus } from 'lucide-react'
import { CareerTimeline } from './CareerTimeLine'
import { Link } from './ui/link'
import { GrowingUnderline } from './blog/growing-underline'

const Experiences = [
  {
    org: 'Dagenergi(Дагэнержи)',
    url: 'https://dagenergi.ru',
    logo: '/static/images/experiences/dage_home_logo.png',
    start: 'Dec 2023',
    end: 'Present',
    title: 'Software engineer',
    event: 'career-dagenergi',
    details: () => {
      return (
        <ul className="[&li]:my-2 [&li]:pl-0">
          <li>
            At Dagenergi SARL, my role as a Software Engineer is to help the company automate
            various tasks by developing custom software and IT tools. I’ve created solutions such as
            an API for managing electricity meters and a mobile app for field controllers to record
            and synchronize monthly consumption data. These tools have significantly improved
            efficiency and streamlined operations within the company.
          </li>
        </ul>
      )
    },
  },
  {
    org: 'ChapMoney',
    url: 'https://ChapMoney.org',
    logo: '/static/images/experiences/logo-img.png',
    start: 'May 2024',
    end: 'Present',
    title: 'Mobile developer (Freelancer)',
    event: 'chapmoney',
    details: () => {
      return (
        <ul className="[&li]:my-2 [&li]:pl-0">
          <li>
            At ChapMoney, I am responsible for developing the mobile application using Flutter for
            both Android and iOS platforms. My work focuses on creating a secure and user-friendly
            interface for international money transfers, ensuring seamless performance across both
            platforms.
          </li>
        </ul>
      )
    },
  },
]

function CareerCard({ exp }: { exp: (typeof Experiences)[0] }) {
  const { org, title, url, event, start, end, logo, details: Details } = exp
  return (
    <div
      className={clsx(
        'relative -mx-3 flex flex-row items-start rounded-lg p-3',
        'cursor-pointer bg-transparent transition-all hover:bg-primary-100 dark:hover:bg-primary-800'
      )}
    >
      <Image
        src={logo}
        alt={org}
        className="my-0 h-20 w-20 rounded-md bg-gray-200 object-contain object-center p-3 dark:bg-white"
        width={200}
        height={200}
      />
      <details className="w-full [&_.minus]:open:block [&_.plus]:open:hidden">
        <summary className="relative pr-10 marker:content-none">
          <Plus
            size={18}
            className={clsx([
              'plus',
              'group-hover/timeline-item:visible md:invisible',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-600 dark:text-gray-500',
            ])}
            data-umami-event={event + 'expand'}
          />
          <Minus
            size={18}
            className={clsx([
              'minus hidden',
              'absolute right-1 top-1',
              'transition-transform duration-300 ease-in-out',
              'text-gray-900 dark:text-white',
            ])}
            data-umami-event={event + 'collapse'}
          />
          <div className="flex flex-col">
            <div className="mx-3 line-clamp-1 text-xs tabular-nums text-gray-500 dark:text-gray-400">
              <span>{start}</span> - <span>{end}</span>
              <Link
                href={url}
                className="line-clamp-1 w-fit text-sm font-semibold text-gray-900 no-underline hover:text-gray-900 dark:text-white dark:hover:text-white"
              >
                <GrowingUnderline data-umami-event={event}>{org}</GrowingUnderline>
              </Link>
              <div className="flex items-center gap-1 pt-1 text-sm text-gray-700 dark:text-gray-200">
                {/* <Twemoji emoji={icon} className="!-mt-1" /> */}
                <span>{title}</span>
              </div>
            </div>
          </div>
        </summary>
        <div className="pt-1 text-base">
          <Details />
        </div>
      </details>
    </div>
  )
}

export function Career() {
  return (
    <ul className="m-0 list-none p-0">
      {Experiences.map((exp) => (
        <li key={exp.url} className="m-0 p-0">
          <CareerCard exp={exp} />
        </li>
      ))}
    </ul>
  )
}
