import { IPost } from '@modules/posts/components/molecules/Post/IPost'
declare namespace IPostDetails {
  export interface IProps {
    postDetails: IPost
    relatedPosts: IPost[]
  }
}

export { IPostDetails }
