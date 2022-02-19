import React from "react";
import CustomButton from "../custombutton/CustomButton";
import "./collection-item.scss";

import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ addItem, item }) => {
  const { id, name, price, imageUrl } = item;
  console.log(imageUrl);
  return (
    <div index={id} className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
      <div className="collecction-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
