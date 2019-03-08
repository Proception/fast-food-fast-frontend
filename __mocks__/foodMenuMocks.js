import { addItemToCart, updateCartTotal } from '../src/actions/orderActions';

const props = {
    addItemToCart,
    updateCartTotal,
    auth: {
      user: {
        id:1
      }
    }
    };
const emptyOrderProps = {
    updateCartTotal,
    addItemToCart,
    auth: {
    }
  };
export { props, emptyOrderProps };