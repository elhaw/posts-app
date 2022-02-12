import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { fetchPostById, fetchPosts } from '@modules/posts/api'
import { Post } from '@modules/posts/components/molecules'
import { IPostDetails } from '@interfaces/pages/IPostDetails'
import { PostDetailsPage } from '@modules/posts/pages'
import fetchPostsByTag from '@modules/posts/api/fetchPostsByTag'
const Index: FC<IPostDetails.IProps> = ({ postDetails, relatedPosts }) => {
  return (
    <div className="sm:my-6 md:my-8 lg:my-14">
      <PostDetailsPage relatedPosts={relatedPosts} postDetails={postDetails} />
    </div>
  )
}

export default Index

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {
    data: { data: postsData },
  } = await fetchPosts({
    page: 2,
  })
  const paths = postsData.map(({ id }: { id: string }) => {
    return {
      params: { id },
    }
  })
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  try {
    const { data: postDetails } = await fetchPostById(id)
    const tagName = postDetails?.tags[1]
    const {
      data: { data: relatedPosts },
    } = await fetchPostsByTag(tagName)
    const slicedRelatedPosts = relatedPosts.slice(0, 2)
    return {
      props: {
        postDetails: postDetails,
        relatedPosts: slicedRelatedPosts,
      },
    }
  } catch (error) {
    return {
      props: {
        postDetails: {},
        relatedPosts: [],
      },
    }
  }
}
