import { getOrders, getUserOrders } from '../src/actions/orderActions';
const props = {
    orders: [
        {
          "id": 1,
          "orderNo": "12",
          "price": 5000,
          "orderDate": "30 August, 2016",
          "orderStatus": "Pending",
          "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
        },
        {
          "id": 2,
          "orderNo": "54",
          "price": 1200,
          "orderDate": "Boiled Yam",
          "orderStatus": "In Progress",
          "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
        },
        {
          "id": 3,
          "orderNo": "67",
          "price": 1500,
          "orderDate": "30 October, 2017",
          "orderStatus": "Fulfilled",
          "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
        },
        {
          "id": 4,
          "orderNo": "33",
          "price": 3000,
          "orderDate": "30 January, 2018",
          "orderStatus": "Completed",
          "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
        },
      ],
    order: {
      orders: [{
        "id": 1,
        "orderNo": "12",
        "price": 5000,
        "orderDate": "30 August, 2016",
        "orderStatus": "Pending",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 2,
        "orderNo": "54",
        "price": 1200,
        "orderDate": "Boiled Yam",
        "orderStatus": "In Progress",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },],
      userOrders: [{
        "id": 1,
        "orderNo": "12",
        "price": 5000,
        "orderDate": "30 August, 2016",
        "orderStatus": "Pending",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 2,
        "orderNo": "54",
        "price": 1200,
        "orderDate": "Boiled Yam",
        "orderStatus": "In Progress",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },]
    },
    getOrders,
    getUserOrders
    };
const emptyOrderProps = {
  orders: [
      {
        "id": 1,
        "orderNo": "12",
        "price": 5000,
        "orderDate": "30 August, 2016",
        "orderStatus": "Pending",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 2,
        "orderNo": "54",
        "price": 1200,
        "orderDate": "Boiled Yam",
        "orderStatus": "In Progress",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 3,
        "orderNo": "67",
        "price": 1500,
        "orderDate": "30 October, 2017",
        "orderStatus": "Fulfilled",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
      {
        "id": 4,
        "orderNo": "33",
        "price": 3000,
        "orderDate": "30 January, 2018",
        "orderStatus": "Completed",
        "orderAddress": "52, Enitan str, Aguda, Surulere, Lagos State",
      },
    ],
  order: {
    orders: [],
    userOrders: [],
  },
  getOrders,
  getUserOrders
  };
export { props, emptyOrderProps };