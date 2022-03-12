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

  & > label {
    color: black;

    :active {
      color: red;
    }

    :visited {
      color: black;
    }
  }

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

export const Image = styled.img`
  width: ${(props) => props.width};

  @media (min-width: 500px) {
    margin: auto;
  }
`;
