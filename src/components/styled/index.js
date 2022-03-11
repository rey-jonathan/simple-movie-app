import styled from "@emotion/styled";

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
