import styled from '@emotion/styled';
export const CartContainer = styled.div`
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  min-width: 25rem;
  min-height: 35rem;
  margin: auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;
export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 50px;
  font-size: 24px;
  font-weight: 900;
`;

export const ItemName = styled.span``;

export const ItemPrice = styled.span`
  font-weight: bold;
`;
