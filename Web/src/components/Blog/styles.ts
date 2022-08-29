import styled from "styled-components";

export const Container = styled.section`
flex-direction: column;
padding: 20px;
background-color: #F8F8F8;

.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* margin-right: 150px; */

  /* Center slide text vertically */
   display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

 .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.container-title {
  h2 {
    font-size: 32px;
    text-align: center;
    color: #5764c1;

  }
  p {
    text-align: center;
    color: #919191;
  }
}

`;

export const Card = styled.div`
  padding-bottom: 40px;
  .card-text {
    flex-direction: column;
    h3 {
      font-weight: 600;
      color: #333;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      color: #919191;
    }
  }
  .btn {
    background-color: transparent;
    border: none;
    a {
      color: #5764c1;
    }
  }
  .btn:hover {
    transition: all 0.3s ease-in-out;
    background-color: #F8F8F8;
    color: #fff;
  }

`;
