import styled, { css } from 'styled-components'
import { colors, metrics } from './constants'

export const SHeader = styled.div(
  () => css`
    display: grid;
    grid-template-columns: 1fr 2fr;

    .left, .right {
      /* border: 1px solid ${colors.darkYellow}; */
    }

    .header-title {
      font-size: ${metrics.mainHeader};
      color: ${colors.blackText};
    }

    .header-paragraph {
      color: ${colors.grayText};
      line-height: 32px;
      margin-top: 2rem;
      font-size: ${metrics.headerParagraph};
    }

    .right {
      margin-right: 10rem;
    }
  `
)

export const SLayout = styled.div(
  () => css`
    height: 100vh;
    font-family: "Mulish";
    margin-left: 15rem;
    backgrond: ${colors.background};
  `
)

export const SNavbar = styled.nav(
  () => css`
    display: flex;
    padding-top: 2rem;
    align-items: center;
    justify-content: space-between;
    margin-right: 10rem;
    margin-bottom: 5rem;

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
  `
)

export const SSearchBar = styled.div(
  () => css`
    border: 1px solid ${colors.borderLine};
    border-radius: 100px;
    margin-top: 2rem;
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
    margin-top: 5rem;
    position: relative;

    .bikes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
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
    transition: 300ms box-shadow ease-in, transform 300ms ease-out;

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
    padding: 2rem 0;
    margin-top: 2rem;
  `
)


export const SBikeTypes = styled.div(
  () => css`
    margin-top: 10rem;
    margin-bottom: 10rem;

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
    display: grid;
    grid-template-columns: 1.8fr 3.2fr;

    .bike-card {
      display: flex;
      justify-content: center;
      /* border: 1px solid crimson; */
      width: 100%;
    }

    .information {
      margin-right: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        
      }
    }
  `
)