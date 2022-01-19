import styled, { css } from 'styled-components'
import { colors, metrics } from './constants'

export const SLayout = styled.div(
  () => css`
    height: 100vh;
    font-family: "Mulish";
    /* padding-left: 15rem; */
    backgrond: ${colors.background};
    overflow-x: hidden;
    position: relative;

    @media (min-width: 1129px) and (max-width: 1300px) {
      /* padding-left: 5rem; */
      /* margin-right: 2rem; */
    }
  `
)

export const SHeader = styled.div(
  () => css`
    padding-left: 15rem;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding-top: 2rem;

    .bg-dots {
      position: absolute;
      top: 0;
      left: 1rem;
    }
    
    .header-title {
      font-size: ${metrics.mainHeader};
      color: ${colors.blackText};
    }

    .header-paragraph {
      color: ${colors.grayText};
      line-height: 2rem;
      margin-top: 2rem;
      font-size: ${metrics.headerParagraph};
    }

    .left {
      margin-top: 5rem;
      flex: .5 0 200px;
    }

    .right {
      margin-right: 10rem;
      flex: 1 0 300px;
    }

    @media (max-width: 1155px) {
      display: flex;
      flex-direction: column-reverse;
      /* margin-left: 5rem; */

      .left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 100%;
      }
    }
  `
)

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    padding-top: 2rem;
    padding-left: 15rem;
    align-items: center;
    justify-content: space-between;
    margin-right: 10rem;
    margin-bottom: 5rem;
    position: relative;

    .menu-icon {
      font-size: 2rem;
      display: none;
      /* justify-self: flex-end; */
    }

    .navlinks {
      display: flex;
      gap: 2rem;
      a {
        font-size: ${metrics.linkText};
        text-decoration: none;
        color: ${colors.grayText};
        &.active {
          font-weight: 600;
          color: ${colors.blackText};
        }
      }
      
    }

    @media (max-width: 980px) {
      .menu-icon {
        display: block;
      }

      .navlinks {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 5rem;
        border-radius: 1rem;
        background: ${colors.yellow};
        padding: 1rem;
        opacity: 0;
        transition: opacity 200ms ease-in;

        a {
          color: ${colors.white};
        }
        
        &.active {
          opacity: 1;
        }
      }
    }
  `
)

export const SSearchBar = styled.div(
  () => css`
    border: 1px solid ${colors.borderLine};
    border-radius: 100px;
    margin-top: 2rem;
    /* margin-left: 0; */
    color: ${colors.grayText};

    div {
      align-items: center;
      gap: .5rem;
      display: flex;
      margin: .5rem .5rem .5rem 1.5rem;
    }

    input {
      width: 100%;
      font-family: inherit;
      border: none;
      padding: 1rem .5rem;

      &:focus {
        outline: none;
      }
    }
  `
)

export const SIconButton = styled.button(
  () => css`
    background: ${colors.yellow};
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: none;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 800;
    transition: background 200ms ease-in, 
      color 300ms ease-out;

    &:hover {
      background: ${colors.white};
      cursor: pointer;
      color: ${colors.blackText};
      box-shadow: 4px 4px 35px rgba(0, 0, 0, .2);
      transform: scale(1.1);
    }

    span {
      font-weight: 800;
    }
  `
)

export const SButton = styled.button(
  () => css`
    padding: .8rem 2.5rem;
    background: ${colors.yellow};
    border: none;
    border-radius: 100px;
    font-family: inherit;
    cursor: pointer;
    transition: background 200ms ease-in;
    font-size: 18px;
    &:hover {
      background: ${colors.lightYellow};
    }
  `
)

export const SFeaturedBikes = styled.div(
  () => css`
    /* margin-top: 5rem; */
    padding: 10rem 0 3rem 15rem;
    position: relative;
    /* border: 1px solid yellow; */
    z-index: 10;
    background: ${colors.white};

    .bikes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
    }

    .blob {
      position: absolute;
      left: -5%;
      opacity: .7;
      z-index: -5;
      
    }
    
    .navigation {      
      width: 100%;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      padding-right: 20rem;
      padding-top: 3rem;
    }

    .buttons {
      display: flex;
      gap: 1rem;
      
    }
  `
)

export const SBikeCard = styled.div(
  () => css`
    padding: 2rem;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, .06);
    border-radius: 20px;
    background: ${colors.white};
    transition: 300ms box-shadow ease-in, transform 300ms ease-out;
    z-index: 5;

    &:hover {
      box-shadow: none;
      transform: scale(0.95);
    }

    .image {
      text-align: center;
    }
    
    .more-info {
      border-top: 1px solid ${colors.borderLine};
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price-info {
      .tag {
        margin-bottom: .5rem;
        display: block;
        color: ${colors.grayText};
      }
      .price {
        font-size: 20px;
        font-weight: 600;
      }
    }
  `
)

export const SFooter = styled.footer(
  () => css`
    color: ${colors.white};
    padding: 4rem;
    z-index: 10;
    background: ${colors.darkYellow};
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      outline: 2px solid crimson;
       display: flex;
       justify-content: space-between;
       gap: 1rem;
    }

    .footer-links {
      display: flex;
      /* flex: 1 0 40%; */
      gap: 1rem;
    }

    .company-info {
      /* flex: 1 0 40%; */
      width: 40%;
    }

    /* .company-links {
      flex: 1 0 30%
    }

    .help-links {
      flex: 1 0 30%
    } */

    ul {
      list-style: none;
    }
  `
)


export const SBikeTypes = styled.div(
  () => css`
    padding: 10rem 0 10rem 15rem;
    /* border: 1px solid crimson; */

    .bike-types {
      margin-top: 5rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(5, 1fr);
    }
  `
)

export const SBikeTypeCard = styled.div(
  () => css`
    text-align: center;
    transition: color 200ms ease-in;

    &:hover {
      .bike-image {
        border-color: ${colors.yellow};
      }
      color: ${colors.yellow};
    }

    .bike-type {
      font-weight: 400;
    }
    
    .bike-image {
      padding: 1rem;
      border-radius: 10px;
      border: 2px solid transparent;
      margin-bottom: 1rem;
      transition: border-color 200ms ease-in;
      box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.06);
    }
  `
)

export const STopBike = styled.div(
  () => css`
    color: ${colors.blackText};
    display: flex;
    gap: 2rem;
    /* border: 1px solid green; */
    position: relative;
    padding-left: 15rem;


    .bike-card {
      display: flex;
      width: 100%;
      div {
        width: 100%;
      }
    }

    .blob {
      position: absolute;
      right: 0;
      z-index: -1;
    }

    .information {
      margin-right: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3rem;
      /* border: 1px solid crimson; */
      flex: 2 0 500px;
    }

    .paragraph {
      font-size: 18px;
      line-height: 35px;
      color: ${colors.grayText};
    }
  `
)

export const SReviews = styled.div(
  () => css`
    padding: 10rem 0;
    /* border: 1px solid blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    background: ${colors.white};
    z-index: 1;
    overflow: hidden;

    .bg-dots {
      position: absolute;
      bottom: -3.5rem;
      /* transform: rotateZ(90deg); */
      right: 2rem;
    }    

    .title-box {
      display: flex;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      /* border: 2px solid green; */
      .title {
        font-size: 2rem;
      }
      .line {
        width: 4rem;
        margin: .5rem 0 2rem 0;
        height: .1rem;
        background: ${colors.white};
        margin-left: 45%;
      }
    }    

    .testimonials {
      // TBS
      text-align: center;
      color: ${colors.white};
      width: 800px;
      background: ${colors.yellow};
      padding: 3rem;
      border-radius: 10px;
      position: relative;
      
      .container {
        display: flex;
        /* border: 1px solid black; */
        align-items: center;
        justify-content: center;
      }
    }

    .testimonial {
      display: flex;
      justify-content: center;
      margin-right: 5rem;

      .bg-dots-two  {
        position: absolute;
        right: -.5rem;
        top: -4rem;
      }

      .client-bio {
        flex: 1 0 50%;
        margin-right: 1rem;
        text-align: right;
        .image {
          border-radius: 50%;
          height: 133px;
          width: 133px;
          border: 2px solid ${colors.white};
        }
        .bio {
          /* text-align: center; */
        }
        .occupation {
          margin-right: 2rem;
        }
      }

      .client-review {
        flex: 1 0 50%;
        /* margin-right: 5rem; */
        display: flex;
        align-items: center;
      }
    }

    .navigation {
      display: flex;
      margin-top: 2rem;
      justify-content: center;
      align-items: center;
      color: ${colors.yellow};
      gap: 4rem;
    }

    .arrow {
      font-weight: 800;
      font-size: 25px;
      cursor: pointer;
    }

    .dots {
      display: flex;
      gap: 1rem;
    }

    .dot {
      height: .5rem;
      cursor: pointer;
      width: .5rem;
      border-radius: 50%;
      background: ${colors.lightYellow};

      &.active {
        background: ${colors.yellow};
      }
    }

    @media (min-width: 850px) (max-width: 1218px) {
      .testimonial {
        .client-review .review{
          margin: 1rem 0 0 5rem;
        }
      }
    }
    
    @media (max-width: 1218px) {
      .testimonial {
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;        
      }
    }

    @media (max-width: 850px) {
      .bg-dots {
        display: none;
      }
      .testimonials {
        width: 90vw;
        padding: .5rem;
        .client-review .review {
          margin-top: 1rem;
        }
      }
    }
  `
)

export const SDesktopNavLinks = styled.div(
  () => css`
    
  `
)

export const SScrollToTop = styled.div(
  () => css`
    font-size: 3rem;
    color: ${colors.white};
    display: inline;
    position: fixed;
    display: flex;
    z-index: 8;
    justify-content: center;
    height: 3.4rem;
    width: 3.4rem;
    padding: 0 1rem;
    align-items: center;
    right: 2rem;
    border-radius: 50%;
    background: ${colors.yellow};
    bottom: 3rem;
    span {
      margin-top: .75rem;
    }
  `
)

export const SContainer = styled.div(
  () => css`
    padding-left: 15rem;
    @media (min-width: 1129px) and (max-width: 1300px) {
      padding-left: 5rem;
      /* margin-right: 2rem; */
    }
  `
)