import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names = ["grow", "earn", "gain"]
        const int = Math.floor(Math.random()*3);
        return names[int]
    }
  return (
    <div>
      let's {handleNameChange()} money
    </div>
  )
}

export default Content
