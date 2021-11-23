/* eslint-disable no-unused-vars */
export enum DisplaySize {
  Tablet,
  Laptop,
  LaptopLarge,
  FourK,
}

export function media(display: DisplaySize | number) {
  let width;

  switch (display) {
    case DisplaySize.Tablet:
      width = '768';
      break;
    case DisplaySize.Laptop:
      width = '1024';
      break;
    case DisplaySize.LaptopLarge:
      width = '1440';
      break;
    case DisplaySize.FourK:
      width = '2560';
      break;
    default:
      width = display;
      break;
  }

  return `@media only screen and (min-width: ${width}px)`;
}
