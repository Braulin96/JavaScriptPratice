import React, {useRef, useState, useEffect} from 'react'

const RefText = () => {
  const [name, setName] = useState('')
  const inputRef = useRef()
  const count = useRef(0)

  const focus= () => {
    inputRef.current.focus()
  }

  useEffect(() => {
    count.current = count.current + 1;
  });



  return (
    <div className='p-10'>
    <div>UseRef</div>
    <input type="text" className='px-5 py-2 border border-gray-400' ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
    <p> my name is {name}</p>
    <button className='bg-blue-300 rounded-md border border-blue-400 px-3 py-2' onClick={focus}> Focus</button>
    <h1>Render Count: {count.current}</h1>
    </div>
  )
}
export default RefText