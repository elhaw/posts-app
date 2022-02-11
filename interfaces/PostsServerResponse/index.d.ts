
import {Post} from '@interfaces/Post'
export interface PostsServerResponse {
    data: Post[]
    total: number
    page: number
    limit: number
  }

