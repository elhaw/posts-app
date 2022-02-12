import { Posts } from '@modules/posts/components/organisms'
import { FC } from 'react'
import { IPostsPage } from './IPostsPage'
const Index: FC<IPostsPage.IProps> = ({ postsData }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Posts posts={postsData} />
    </div>
  )
}

export default Index
