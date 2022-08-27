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
    padding: 2rem 6rem 0 0rem;
    position: relative;
    div.logoMenu {
      a {
        img {
          width: 70%;
          height: auto;
        }
      }
    }
    ul {
      flex-direction: column;
      text-align: left;
      li {
        /* font-size: 5.5rem; */
        a {
          font-size: 24px;
          color: #fff;
          line-height: 36px;
        }
        div {
          margin-top: 100px;
          button {
            /* align-items: center; */
            width: 200px;
            height: 50px;
            background-color: #f95259;
            a {
              justify-content: center;
              align-items: center;
              text-align: center;
              color: #fff;
              line-height: 24px;
            }
          }
        }
      }
    }

    .closeMenu {
      position: absolute;
      top: 22px;
      right: 20px;
      color: #fff;
      font-size: 32px;
      padding: 10px;
      background-color: transparent;
    }

  }
`
