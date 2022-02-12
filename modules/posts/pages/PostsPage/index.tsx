import { Posts } from '@modules/posts/components/organisms'

const Index = ({ postsData }: { postsData: any }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Posts posts={postsData} />
    </div>
  )
}

export default Index
