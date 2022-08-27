import styled from 'styled-components';

export const Container = styled.footer`
  flex-direction: column;
  width: 100%;
  padding: 20px;
  button {
    position: fixed;
    a {
      img {

      }
    }
  }
  .columns {
    div {
      padding: 10px 0 10px 0;
      h4 {
        font-size: 32px;
        margin-bottom: 10px;
      }
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          a {
            font-size: 16px;
            font-weight: 600;
            color: #333;

          }
        }
      }
    }
    .text-footer {
      width: 250px;
      p {
        font-size: 16px;
        text-align: center;
      }
    }
  }
`;
