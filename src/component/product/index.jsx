import ProductDetails from "./product-detail"
import './style.css'
import style from './product-item.module.css'
import { useEffect, useState } from "react"

const product = ["Mobile", "Phone", "Laptop", "Fridge"]
const CheckFunction = ({ name, surname }) => {
    // console.log(props) 
    // const { name, surname } = props
    const [flag, setFlag] = useState(false)
    const [count, setCount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    useEffect(() => {

        setCount(count + 1)
    }, [flag])

    useEffect(() => {
        if (count === 10) setChangeStyle(true)
    }, [count])
    console.log(name)


    const handleClick = () => {
        setFlag(!flag)
    }
    // let flag = true
    return (
        <div>
            {/* {flag ? (<h1 className="title"> Hey its working fine</h1>) : (<h2 className={style.style2}>Hey {name} {surname} you are Genius</h2>)} */}

            {flag ? <h1>{name} is Genius</h1> : <h1>{name} is Super genius</h1>}



            <ul>
                {
                    product.map((ele, i) => {

                        return <ProductDetails key={i} product={ele} index={i} />


                    })
                }

            </ul>
            <h1>{count}</h1>
            <button style={{ backgroundColor: changeStyle ? 'red' : 'white' }} onClick={handleClick}>Toggle</button>

        </div>
    )
}

export default CheckFunction