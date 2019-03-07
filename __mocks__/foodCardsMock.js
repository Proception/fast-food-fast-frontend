import yam from '../assets/images/yam.jpg';
import rice from '../assets/images/rice.jpg';
import fufu from '../assets/images/fufu.jpg';

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
  onClick: () => {},
  onChange: () => {}
};
export default props;
  