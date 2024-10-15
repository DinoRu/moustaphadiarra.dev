import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ResumeLayout from '@/layouts/ResumeLayout'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'resume') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <ResumeLayout content={mainContent} toc={author.toc}>
        <MDXLayoutRenderer code={author.body.code} />
      </ResumeLayout>
    </>
  )
}
