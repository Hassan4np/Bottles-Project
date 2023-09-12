const GetStordCard = () => {
    const storedCardstring = localStorage.getItem('cart');
    if (storedCardstring) {
        return JSON.parse(storedCardstring);
    }
    return [];
}

const saveCartToLS = (cart) => {
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)
}


const addTOLS = (id) => {
    const cart = GetStordCard()
    cart.push(id)
    saveCartToLS(cart)
}
const remnovedfromLC = id => {
    const cart = GetStordCard();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining)
}
export { addTOLS, GetStordCard, remnovedfromLC }