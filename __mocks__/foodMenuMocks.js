import { addItemToCart, updateCartTotal } from '../src/actions/orderActions';

const props = {
    addItemToCart,
    updateCartTotal
    };
const emptyOrderProps = {
    updateCartTotal,
    addItemToCart
  };
export { props, emptyOrderProps };