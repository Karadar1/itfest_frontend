import React, { useContext, useEffect, useState } from 'react';
import {
  CartContainer,
  CartItem,
  ItemName,
  ItemPrice,
  TotalPrice,
} from './CartPage.styled';
import { CartContext } from 'src/context/CartContext';
import { PageContainer } from 'src/components/PageContainer/PageContainer';
// Sample cart items
// const cartItems = [
//   { id: 1, name: 'Product 1', price: 10.99 },
//   { id: 2, name: 'Product 2', price: 12.99 },
//   { id: 3, name: 'Product 3', price: 9.99 },
// ];

// Styled components

const Cart = () => {
  const cartData = useContext(CartContext);
  const itemData = cartData?.state.items;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calculateTotalSum();
  }, [itemData]);

  const calculateTotalSum = () => {
    let sum = 0;
    itemData?.forEach((element) => {
      // sum += parseFloat(String(element.price));
      sum += element.price;
    });
    setTotalPrice(sum);
  };

  console.log(itemData);
  return (
    <PageContainer>
      <CartContainer>
        {itemData?.map((item) => (
          <CartItem key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice style={{ marginLeft: '10px' }}>
              ${item.price.toFixed(2)}
            </ItemPrice>
          </CartItem>
        ))}
        <TotalPrice>Total Price: {totalPrice}</TotalPrice>
      </CartContainer>
    </PageContainer>
  );
};

export default Cart;
