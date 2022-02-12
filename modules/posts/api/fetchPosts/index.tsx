import { AxiosInstance } from '@modules/shared/api/axios-instance'

const fetchPosts = ({page = 1 }) => {
  return AxiosInstance.get(`post?limit=8&page=${page}`)
    .then((res) => res)
    .catch((error) => {
      throw error
    })
}

export default fetchPosts
