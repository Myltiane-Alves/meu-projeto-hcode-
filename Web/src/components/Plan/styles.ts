import styled from "styled-components";

export const Container = styled.section`
  flex-direction: column;
  /* padding: 20px; */
  .container-plan {

    padding-bottom: 20px;
    background-color: #fff;
    .cards {
      flex-direction: column;
      .card {
        flex-direction: column;
        /* background-color: #5764c1; */
        width: 100%;
        max-width: 250px;
        box-shadow: 10px 8px 35px 0px rgba(0,0,0,0.35);
        border-radius: 15px;
        padding-top: 20px;
        margin: 20px auto;
        h3 {
          font-size: 32px;
          color: #156ac9;
          line-height: 36px;
        }
        span {
          font-size: 18px;
          font-weight: 700;
          color: #919191;
        }
        p {
          font-size: 18px;
          line-height: 24px;
          color: #919191;
        }
        .container-icons {
          flex-direction: column;
          padding-bottom: 20px;
          .check {
            padding-top: 10px;
            display: flex;
            p {
              margin: 0 0 0 5px;
            }
          }
        }
        .container-btn {
          button {
            width: 200px;
            height: 40px;
            background-color: #156ac9;
            a {
              color: #fff;
              font-size: 16px;
              font-weight: 700;

            }
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {
    .container-plan{
      .cards {

        flex-direction: row;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }

  }

`;
