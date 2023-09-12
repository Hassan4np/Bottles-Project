import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart,hengleCard}) => {
    return (
        <div>
            <h3>Cart {cart.length}:</h3>
         <div className="Cart-img">  
            {
                cart.map(bottle=><div className='CartManage' key={bottle.id}>
                     <img src={bottle.img}></img>
                     <button onClick={()=>hengleCard(bottle.id)}>removed</button>
                     </div>)
            }
        </div>

        </div>
    );
};
Cart.propTypes={
    cart:PropTypes.array.isRequired,
    hengleCard:PropTypes.func.isRequired
}
export default Cart;