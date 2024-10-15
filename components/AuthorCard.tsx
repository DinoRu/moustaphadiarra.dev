import Image from './Image'
import SocialIcon from './social-icons'
import siteMetadata from '@/data/siteMetadata'

const AuthorCard = ({ content }) => {
  const { avatar, occupation, company, email, github, location } = siteMetadata

  return (
    <div>
      <div className="mt-10 flex flex-row items-center justify-center space-x-2 pb-8">
        {avatar && (
          <div className="pr-2 xl:pr-4">
            <Image
              src={avatar}
              alt="avatar"
              width={300}
              height={300}
              className="h-48 w-48 min-w-48 rounded-full object-cover dark:border-2 dark:border-primary-400 md:h-60 md:w-60"
            />
          </div>
        )}
        <div>
          <h3
            className="underline-magical pb-2 pt-4 
                  text-2xl
                  font-bold leading-8 tracking-tight sm:text-3xl md:text-4xl"
          >
            {content.author}
          </h3>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{occupation}</div>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{company}</div>
          <div className="md:text-md text-base text-gray-500 dark:text-gray-400">{location}</div>
          <div className="flex space-x-3 pt-6">
            <SocialIcon kind="mail" href={`mailto:${email}`} />
            <SocialIcon kind="github" href={`mailto:${github}`} />
          </div>
        </div>
      </div>
      <div className="flex max-w-full flex-col items-center justify-center">
        <div className="prose max-w-full pb-8 pt-10 dark:prose-invert xl:text-xl ">
          <p>
            I am a Software Engineer with expertise in API development, Web development, mobile
            applications, and IoT integration. Currently working at Dagenergi SARL, I create
            solutions to optimize electricity consumption management. I am also developing
            ChapMoney, a secure money transfer application. With nearly eight years in Russia and
            fluency in French, English, and Russian, I enjoy collaborating in diverse environments.
            Explore my projects and skills here!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthorCard
