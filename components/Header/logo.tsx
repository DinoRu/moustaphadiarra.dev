import { Image } from '../ui/image'

export function Logo() {
  return (
    <Image
      src="/static/images/logo.jpg"
      width={150}
      height={150}
      className="h-10 w-10 rounded-xl"
      priority
      alt={''}
    />
  )
}
