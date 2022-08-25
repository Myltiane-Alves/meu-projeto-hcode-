import styled from "styled-components";

export const Container = styled.div`
  background-color: #2f3241;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`

export const Nav = styled.nav`
  @media (max-width: 768px) {
    margin-left: auto;
    flex-direction: column;
    width: 65vw;
    height: 100vh;
    padding: 2rem 4rem 0 2rem;
    position: relative;

    ul {
      flex-direction: column;
      li {
        /* font-size: 5.5rem; */
        a {
          font-size: 24px;
          color: #fff;
          line-height: 36px;
        }
      }
    }
  }
`
