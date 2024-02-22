import React from 'react'
import './itemcard.css'
import { useCart } from 'react-use-cart'

function Itemcard({img,title,desc,price,item}) {
    const {addItem} = useCart()
  return (
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
      <div className="self-card pt-1 p-2 overflow-hidden h-100 shadow" >
        <img src={img} className="card-img-top" height={250}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h5 className="card-title">&#x20b9;{price}</h5>
            <p className="card-text">{desc}</p>
            <button className="btn btn-success" onClick={()=> addItem(item)}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default Itemcard