import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 10rem;
      height: 3rem;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme["white"]};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme["blue-500"]};
      }

      &.active {
        color: ${(props) => props.theme["blue-500"]};
      }
    }
  }
`;
