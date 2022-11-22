// this is to shorten cuurent address on the etherreum card on the app
export const shortenAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
// we simply showing the first 5 characters and the last 4
