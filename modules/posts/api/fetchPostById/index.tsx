import { AxiosInstance } from '@modules/shared/api/axios-instance'

const fetchPosts = (id: string) => {
  return AxiosInstance.get(`post/${id}`)
}

export default fetchPosts
