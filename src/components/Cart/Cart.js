import React from 'react';
import './Cart.css'  
const Cart = (props) => {
    const {addedVarsity} = props;
    const totalPrice = addedVarsity.reduce(function(pre,current){return pre+ Number(current.fee)},0)
    return (
        <div>
            
            <div className="row mb-4 text-center">
                {/* total-price-container */}
                <div style={{backgroundColor: '#22577A',color: 'white'}} className="col-5 rounded me-2 py-4 shadow-lg">
                    <h1>Price</h1>
                    <h1>${totalPrice}</h1>
                </div>
                {/* total-quantity-container */}
                <div style={{backgroundColor: '#22577A',color: 'white'}} className="col-5 rounded ms-2 py-4 shadow-lg">
                    <h1>Quantity</h1>
                    <h1>{addedVarsity.length}</h1>
                </div>
            </div>
            {/* total-added-university-list */}
           <h2  style={{backgroundColor: '#1E3163',padding: '8px 10px',color: 'white',borderRadius: '10px'}}>Total added university</h2>
         <ol class="list-group list-group-numbered">
            {
             addedVarsity.map(item => <li  className="list-group-item fs-4 my-2 shadow-lg" key={item.rank}>{item.name}</li>)
            }
        </ol>
        </div>
    );
};

export default Cart;

