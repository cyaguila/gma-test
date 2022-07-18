/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Navbar from './navbar'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      {/* insert navbar */}
      
      <div className="h-max">
        {/* <Alert preview={preview} /> */}
        <main>
          {/* <Navbar /> */}
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
