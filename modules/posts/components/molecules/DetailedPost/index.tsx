import NextImage from 'next/image'
import { FC } from 'react'
import { IDetailedPost } from './IDetailedPost'
const DetailedPost: FC<IDetailedPost.IProps> = ({ image, text }) => {
  return (
    <div className="bg-white rounded-lg ">
      <div className="py-2 my-2">
        <h2 className="mb-2 text-normal font-bold tracking-tig  dark:text-black capitalize">
          {text}
        </h2>
      </div>
      {image && (
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
      )}
      <div className="p-5 h-36 flex flex-col justify-between">
        <p className="mb-2 text-normal font-bold tracking-tig  dark:text-black capitalize">
          {text}
        </p>
      </div>
    </div>
  )
}

export default DetailedPost
