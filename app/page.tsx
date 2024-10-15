import { sortPosts, allCoreContent, coreContent } from 'pliny/utils/contentlayer'
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import Main from './Main'
import AuthorCard from '@/components/AuthorCard'
import Skills from '@/components/Skills'
import { Technologies } from '@/components/Technologies'
import { Experience } from '@/components/Experience'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  return (
    <>
      <AuthorCard content={mainContent} />
      <Technologies />
      {/* <Experience /> */}
      <Main posts={posts} />
    </>
  )
}
