import { FC } from 'react'
import { IPost } from './IPost'
const Post: FC<IPost.IProps> = ({
  id,
  likes,
  publishDate,
  image,
  tags,
  text,
}) => {
  return (
    <div>
      <h2>{id},{likes}</h2>
    </div>
  )
}

export default Post
