import React, { FC } from 'react'
import { DetailedPost } from '@modules/posts/components/molecules'
import { Posts } from '@modules/posts/components/organisms'
import { IPostDetails } from '@interfaces/pages/IPostDetails'
const Index: FC<IPostDetails.IProps> = ({ postDetails, relatedPosts }) => {
  const { image, text } = postDetails
  return (
    <div className="grid sm:gap-12 sm:grid-cols-1 md:grid-cols-[5fr,2fr] md:gap-10 lg:grid-cols-[6fr,2fr]">
      <div className="">
        <DetailedPost image={image} text={text} />
      </div>
      <div className="min-h-full">
        <h2 className="font-bold capitalize tracking-wide py-2 my-2">
          recomended posts
        </h2>
        <div className="my-4 flex flex-wrap gap-8">
          <Posts posts={relatedPosts} />
        </div>
      </div>
    </div>
  )
}

export default Index
