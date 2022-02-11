import { FC } from 'react'
import { LayoutProps } from './ILayout'
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <h2 className="text-purple" >hello</h2>
      {children}
    </div>
  )
}

export default Layout
