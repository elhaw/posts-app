import { FC, Fragment } from 'react'
import Link from 'next/link'
import { Post } from '../../molecules'
import { IPosts } from './IPosts'
const Posts: FC<IPosts.IProps> = ({ posts }) => {
  return (
   <>
      {posts.map(({ image, text, publishDate, id }) => {
        return (
          <Link key={id} href={`/posts/${id}`}>
            <a target="_blank">
              <Post
                image={image}
                text={text}
                publishDate={publishDate}
                id={id}
              />
            </a>
          </Link>
        )
      })}
      </>
  )
}

export default Posts
