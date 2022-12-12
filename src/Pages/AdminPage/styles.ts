import styled from "styled-components";

export const ContainerAdmin = styled.div`
  background: yellow;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 1216px;
  margin: 40px auto;
  gap: 32px;



  @media (max-width: 1250px) {
    padding: 0px 40px ;
    padding-left: 6%;
  }

  @media (max-width: 450px) {
    padding: 0px 0px 20px  20px ;
    padding-left: 50px;
  }


`;