import { FC } from 'react'
import NavBar from '../../molecules/NavBar'
import { LayoutProps } from './ILayout'
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
