//import library
import styled from "@emotion/styled";

/**
 * @desc Main source for styled components, most of them is reusable
 */
export const Header = styled.div`
  background: blue;
`;

export const MenuBar = styled.div`
  text-align: center;

  & > label > :nth-of-type(1) {
    margin-right: 10px;
  }
`;

export const ButtonDetail = styled.button`
  border: 1px solid pink;
  border-radius: 6px;
  color: white;
  background: pink;
  width: 150px;
  height: 30px;
`;

export const ButtonRemove = styled.button`
  border: 1px solid red;
  border-radius: 6px;
  color: white;
  background: red;
  width: 150px;
  height: 30px;
`;

export const ButtonBack = styled.button`
  border: 1px solid black;
  border-radius: 6px;
  color: black;
  width: 150px;
  height: 30px;
`;

export const Image = styled.img`
  width: ${(props) => props.width};

  @media (min-width: 500px) {
    margin: auto;
  }
`;

export const Metadata = styled.div`
  color: #ffffff;
  text-align: left;

  @media (min-width: 500px) {
    width: 360px;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 350px;
  } ;
`;

export const MovieContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  color: white;
  padding: 15px;
  flex-direction: column;

  @media (max-width: 420px) {
    width: 85%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
  }
`;
