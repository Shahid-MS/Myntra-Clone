import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIdx = bag.indexOf(item.id);
    return itemIdx >= 0;
  });
  // console.log(finalItems);

  const itemSummary = {
    totalItem: finalItems.length,

    totalMRP: finalItems.reduce((accumulator, item) => {
      // console.log(typeof item.original_price);
      return (accumulator += item.original_price);
    }, 0),

    totalDiscount: finalItems.reduce((accumulator, item) => {
      return (accumulator +=
        (item.original_price * item.discount_percentage) / 100);
    }, 0),

    convenienceFee: 99,
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS {itemSummary.totalItem} Items
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹ {itemSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{itemSummary.totalDiscount}
          </span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Total Price</span>
          <span className="price-item-value">
            ₹ {Math.floor(itemSummary.totalMRP - itemSummary.totalDiscount)}
          </span>
        </div>

        {itemSummary.totalItem !== 0 && (
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">
              {itemSummary.convenienceFee}
            </span>
          </div>
        )}

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            {itemSummary.totalItem !== 0 ? (
              <span>
                ₹
                {Math.floor(
                  itemSummary.totalMRP -
                    itemSummary.totalDiscount +
                    itemSummary.convenienceFee
                )}
              </span>
            ) : (
              <span> ₹ 0</span>
            )}

            {/* {Math.floor(
              itemSummary.totalMRP -
                itemSummary.totalDiscount +
                itemSummary.convenienceFee
            )} */}
          </span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
