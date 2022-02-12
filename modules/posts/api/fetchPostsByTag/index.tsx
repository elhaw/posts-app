import { AxiosInstance } from '@modules/shared/api/axios-instance'

const fetchPostsByTag = (tag: string) => {
  return AxiosInstance.get(`tag/${tag}/post?limit=2`)
    .then((res) => res)
    .catch((error) => {
      throw error
    })
}

export default fetchPostsByTag
