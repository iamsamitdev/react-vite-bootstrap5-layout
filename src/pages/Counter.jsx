import { useState, useEffect } from 'react'

const Counter = () => {

//   let counter = 0

//   const countUp = () => {
//     counter = counter + 1
//     console.log(counter)
//   }

  // การสร้างตัวแปรแบบ state
  const [counter, setCounter] = useState(0)

  document.title = 'You clicked '+ counter + ' times'

  // การใช้งาน useEffect
  useEffect(() => {
    setInterval(() => {
        setCounter(counter+1)
    }, 1000)
  },[counter])
  
  // ฟังก์ชันเพิ่ม counter
  const countUp = () => {
    console.log(counter)
    document.title = 'You clicked '+ counter + ' times'
    setCounter(counter+1)
  }

  const countDown = () => {
    console.log(counter)
    document.title = 'You clicked '+ counter + ' times'
    setCounter(counter-1)
  }

  return (
    <>
        <div className="text-center mt-5">
            <h1>Counter: { counter }</h1>
            {/* <button onClick={countUp}>Count up</button> */}
            <button onClick={ countUp }>Count up</button>
            <button onClick={ countDown }>Count down</button>
        </div>
    </>
  )
}

export default Counter