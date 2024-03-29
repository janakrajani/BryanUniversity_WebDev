//Device.js
import { css } from "styled-components";
const sizes = {
  phoneS: 320,
  phoneSM: 340,
  phoneM: 370,
  phoneL: 414,
  tablet: 620,
  laptop: 1000,
  laptopM: 1100,
  laptopL: 1200,
  laptopLL: 1400,
  desktop: 1800,
  desktopL: 2200
};

// iterate through the sizes and create a media template
const mediaMin = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
export default mediaMin;
