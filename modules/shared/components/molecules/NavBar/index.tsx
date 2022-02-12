import Link from 'next/link'

const NavBar = () => {
  return (
    <div className="bg-white border-b border-gray-200 h-20 flex items-center">
      <Link href={`/posts`}>
        <a>
          <h2 className="font-bold">Efreshli posts</h2>
        </a>
      </Link>
    </div>
  )
}

export default NavBar
