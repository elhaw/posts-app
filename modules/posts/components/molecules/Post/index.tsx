import { FC } from 'react'
import NextImage from 'next/image'
import { IPost } from './IPost'
const Post: FC<IPost.IProps> = ({publishDate, image, text }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md ">
      <NextImage
        className="rounded-t-lg"
        src={image}
        alt={text}
        loading="lazy"
        layout="responsive"
        objectFit="cover"
        width="500"
        height="300"
      />
      <div className="p-5 h-36 flex flex-col justify-between">
        <h5 className="mb-2 text-normal font-bold tracking-tig  dark:text-black capitalize">
          {text}
        </h5>
        <p className="dark:text-gray-700 text-sm">
          Published at :{' '}
          <span className="text-black tracking-light">
            {new Date(publishDate).toUTCString()}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Post
