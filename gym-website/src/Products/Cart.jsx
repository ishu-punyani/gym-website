import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
        } = useCart()
        if(isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

        const navigate = useNavigate()
        const handleClick = async() =>{
            // console.log(items)
            await emptyCart()
            navigate('/order-placed')
        }
        // const [result,setResult] = useState()
        // const check = (qty) =>{
        //     console.log(qty)
        //     if(qty >= 5)
        //         setResult("Max Qty Limit is 5")
        //     else
        //         setResult("")
        // }
  return (
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className="col-12">
                <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}}/>
                                    </td>
                                    <td>{item.title}</td>
                                    <td>&#x20b9;{item.price}</td>
                                    <td>&#x20b9;{item.itemTotal}</td>
                                    {/* <td>Quantity ({item.quantity})</td> */}
                                    <td className=''>
                                        <button
                                        className='btn btn-info ms-2'
                                        onClick={()=> updateItemQuantity(item.id,item.quantity - 1)}>
                                        -
                                        </button>
                                        {item.quantity}
                                        <button
                                        className='btn btn-info'
                                        onClick={()=> updateItemQuantity(item.id,item.quantity + 1)}>
                                        {/* onClick={()=> item.quantity < 5 ? updateItemQuantity(item.id,item.quantity + 1) : check(item.quantity)}> */}
                                        +
                                        </button>
                                        <button 
                                        className='btn btn-danger ms-2'
                                        onClick={()=> removeItem(item.id)}>Remove</button>
                                        {/* <span className='ms-2 mt-1 p-1 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-2'>{result}</span> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="col-auto ms-auto">
                <h2>Total Price: &#x20b9;{cartTotal}</h2>
            </div>
            <div className="col-auto">
                <button className='btn btn-danger m-2' onClick={()=> emptyCart()}>Clear Cart</button>
                <button className='btn btn-primary m-2' onClick={()=> handleClick()}>Place Order</button>
            </div>
        </div>
    </section>
  )
}

export default Cart
