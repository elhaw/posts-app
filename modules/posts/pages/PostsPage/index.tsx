import { Posts } from '@modules/posts/components/organisms'

const Index = ({ postsData }: { postsData: any }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Posts posts={postsData} />
    </div>
  )
}

export default Index
