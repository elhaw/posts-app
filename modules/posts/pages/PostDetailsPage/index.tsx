import React, { FC } from 'react'
import { Post, DetailedPost } from '@modules/posts/components/molecules'
import { IPostDetails } from '@interfaces/pages/IPostDetails'
import { Posts } from '@modules/posts/components/organisms'
const Index: FC<IPostDetails.IProps> = ({ postDetails, relatedPosts }) => {
  const { image, text } = postDetails
  return (
    <div className="grid gap-32  grid-cols-[6fr,2fr]">
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
