import { AxiosInstance } from '@modules/shared/api/axios-instance'

const fetchPosts = (id: string) => {
  return AxiosInstance.get(`post/${id}`)
    .then((res) => res)
    .catch((error) => {
      throw error
    })
}

export default fetchPosts
