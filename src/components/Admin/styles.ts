import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding: 0 40px;
  }

  @media (max-width: 415px) {
    padding: 0 20px;
    margin: 20px auto;
  }
  @media (max-height: 415px) {
    margin-bottom: 120px;
  }
`;

export const CardContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
`;

export const CardOrders = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid rgba(204, 204, 204, 0.3);
`;