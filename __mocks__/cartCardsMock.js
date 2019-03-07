import yam from '../assets/images/yam.jpg';
import rice from '../assets/images/rice.jpg';
import fufu from '../assets/images/fufu.jpg';
import { removeItemFromCart, updateCartTotal, updateItemQuantity, makeOrder } from '../src/actions/orderActions';

const props = {
  item: [
    {
      "id": 1,
      "imageUrl": yam,
      "price": 500,
      "title": "Boiled Yam",
    },
    {
      "id": 2,
      "imageUrl": rice,
      "price": 900,
      "title": "Rice",
    },
    {
      "id": 3,
      "imageUrl": fufu,
      "price": 500,
      "title": "Fufu",
    },
  ],
  onClick: (e) => {},
  onChange: () => {},
  order: {
    cart: [
      {
        "id": 1,
        "imageUrl": yam,
        "price": 500,
        "title": "Boiled Yam",
      },
      {
        "id": 2,
        "imageUrl": rice,
        "price": 900,
        "title": "Rice",
      },
      {
        "id": 3,
        "imageUrl": fufu,
        "price": 500,
        "title": "Fufu",
      },
    ],
    cartTotalPrice: 0
  },
  auth: {
    isLoading: true,
    user: {
      id: 1
    }
  },
  removeItemFromCart,
  updateCartTotal,
  updateItemQuantity,
  makeOrder
};

const emptyCartProps = {
  item: [
    {
      "id": 1,
      "imageUrl": yam,
      "price": 500,
      "title": "Boiled Yam",
    },
    {
      "id": 2,
      "imageUrl": rice,
      "price": 900,
      "title": "Rice",
    },
    {
      "id": 3,
      "imageUrl": fufu,
      "price": 500,
      "title": "Fufu",
    },
  ],
  onClick: (e) => {},
  onChange: () => {},
  order: {
    cart: [],
    cartTotalPrice: 0
  },
  auth: {
    isLoading: false,
    user: {
      id: 1
    }
  },
  removeItemFromCart,
  updateCartTotal,
  updateItemQuantity,
  makeOrder
};
export { props, emptyCartProps };
  