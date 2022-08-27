import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  .about {
    padding: 20px;
    width: 90%;
    h2 {
      font-size: 40px;
      font-weight: bold;
      line-height: 45px;
      color: #156ac9;
    }

    p {
      font-size: 18px;
      font-weight: 500;
    }
    button {
      /* background-color: #58f6ff; */
      background-color: #0081cf;
      border: none;
      border-radius: 5px;
      width: 200px;
      height: 40px;
      cursor: pointer;
      /* padding: 15px; */
      a {
        color: #fff;
        font-size: 1rem;
        font-weight: 700;
      }
    }
    button:hover {
      background-color: #3d9bd5;
    }
    padding-bottom: 1rem;
  }
  .about-img {
    background-image: url("../../../src/assets/img/aboutus.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* width: 100%; */
    width: 400px;
    height: 300px;
    padding-top: 1.375rem;

  }
  @media (min-width: 768px) {
    display: flex;
    .about-img {
      height: auto;
      width: 100%;
      background-size: cover;
    }
  }
  @media (min-width: 1280px) {
    padding: 5rem;
    div {
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.5rem;
        line-height: 2.25rem;
      }
      button {
        width: 350px;
        height: 50px;
        a {
          font-size: 1.5rem;
          font-weight: 300;
        }
      }
    }
  }
`;
