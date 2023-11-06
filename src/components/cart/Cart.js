import React from "react";

const Cart =(props)=> {
    return (
        <div className='componentContainer'>
            {props.cartList.map( cl => <div>
                {cl.cartTitle}
            </div> )}
        </div>
    )
}

export default Cart