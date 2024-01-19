import React from 'react'

const Content = () => {

    function handleNameChange(){
        const names = ["grow", "earn", "gain"]
        const int = Math.floor(Math.random()*3);
        return names[int]
    }
  return (
    <main>
    <div>
      <h1>let's {handleNameChange()} money</h1>
    </div>
    </main>
  )
}

export default Content
