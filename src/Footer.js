import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>
      copyrigth &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer
