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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 5rem;
    grid-gap: 2rem;
  `
)

export const SBikeCard = styled.div(
  () => css`
    padding: 2rem;
    box-shadow: 10px 24px 54px rgba(0, 0, 0, .06);
    border-radius: 20px;
    transition: 600ms box-shadow ease-in, transform 300ms ease-out;

    &:hover {
      box-shadow: none;
      transform: translate(0, 1rem);
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