import { PostOwner } from '@interfaces/PostOwner'
export interface Post {
  id: string
  image: string
  likes?: number
  tags?: string[]
  text: string
  publishDate: Date
  owner?: PostOwner
}
