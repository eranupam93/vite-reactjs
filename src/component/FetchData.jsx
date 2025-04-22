import React, { useEffect, useState } from 'react'

export const FetchData = () => {
  // const [user, setUser] = useState([])
  const [data, setData] = useState([1, 2, 3, 4, 5])
  const [toggle, setToggle] = useState(false)

  // async function fetchAlluser() {
  //   try {
  //     const apiResponse = await fetch('')
  //     const result = await apiResponse.json()
  //     console.log(result?.user)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    if (toggle == true) {
      setData(["Hello", "Hi"])
    } else {
      setData([1, 2, 3, 4, 5])
    }

  }, [toggle])

  let handleClick = () => {
    setToggle(!toggle)

  }

  return (
    <div>
      <ul>
        {
          data.map((el, i) => {
            return <li key={i}>{el}</li>
          })
        }
      </ul>

      {/* {toggle ? <button onClick={handleClick}>String</button> : <button onClick={handleClick}>Numeric</button>} */}
      {<button onClick={handleClick}>{toggle ? "String" : "Numeric"}</button>}


    </div>
  )
}



// 2.27.21