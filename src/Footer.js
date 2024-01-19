import React from 'react'

const Footer = () => {
    const year = new Date();
  return (
    <footer>
      copyrigth &copy; {year.getDate()}
    </footer>
  )
}

export default Footer
