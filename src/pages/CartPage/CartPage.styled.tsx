import styled from '@emotion/styled';
export const CartContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;
export const TotalPriceInput = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ItemName = styled.span``;

export const ItemPrice = styled.span`
  font-weight: bold;
`;
