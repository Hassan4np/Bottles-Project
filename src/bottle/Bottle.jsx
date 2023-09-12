import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({bottle,hengleCard}) => {
    const {name,price,img}=bottle
    return (
        <div className="bottles">
            <img src={img} alt="" />
            <h3>name:{name}</h3>
            <h3>Price:{price}</h3>
            <button onClick={()=>hengleCard(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
  //// key is the name of the prop and
// value is the PropType
bottle:PropTypes.object.isRequired,
hengleCard:PropTypes.func.isRequired
}
export default Bottle;