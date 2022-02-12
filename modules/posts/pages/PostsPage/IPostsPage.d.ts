import { Post } from '@interfaces/Post'

declare namespace IPostsPage {
  export interface IProps {
    postsData: Post[]
  }
}

export { IPostsPage }
