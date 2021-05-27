import React from 'react'
import MainHeader from './main-header'

interface ILayoutProps {

}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
export default Layout;