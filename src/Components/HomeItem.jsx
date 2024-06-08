import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../Store/bagSlice";

/* eslint-disable react/prop-types */
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const bag = useSelector((store) => store.bag);
  const elementFound = bag.indexOf(item.id) >= 0;
  // console.log(item.id, elementFound);

  const handleAddToBag = () => {
    dispatch(bagActions.addTobag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFrombag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">{item.discount_percentage}% OFF</span>
      </div>
      {elementFound ? (
        <button
          className="btn-add-bag btn btn-danger"
          onClick={handleRemoveFromBag}
        >
          Remove
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
