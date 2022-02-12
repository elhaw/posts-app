import { fetchPosts } from '@modules/posts/api'
import { useEffect, useState } from 'react'

const useFetchMorePosts = (initialPostsData) => {
  const { data, page, limit, total } = initialPostsData
  const [postsList, setPostsData] = useState(initialPostsData)
  const [isLoading, setIsloading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentPage, setCurrentPage] = useState(page)
  const maxPagesCount = Math.ceil(total / limit)
  const isLastPage = currentPage === maxPagesCount
  useEffect(() => {
    if (currentPage > 1) {
      setIsloading(true)
      fetchPosts({ page: currentPage })
        .then((res) => {
          const {
            data: { data: fetchedData, page },
          } = res
          setPostsData({
            ...postsList,
            data: postsList.data.concat(fetchedData),
            page: page,
          })
          setIsloading(false)
        })
        .catch((err) => {
          setIsError(true)
        })
    }
  }, [currentPage])

  return {
    postsList,
    isLoading,
    isError,
      currentPage,
    isLastPage,
    setCurrentPage,
  }
}

export default useFetchMorePosts
