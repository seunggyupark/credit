export const data = [
  {
    number: 4567,
    bank: "AMEX",
    exp: "07/19",
    balance: 86.2
  },
  {
    number: 1237,
    bank: "DISCOVER",
    exp: "07/19",
    balance: 86.2
  },
  {
    number: 3367,
    bank: "VISA",
    exp: "07/19",
    balance: 86.2
  }
];

export function getData(delay) {
  return new Promise(function (response) {
    setTimeout(response, delay);
  });
}

const history = [
  {
    name: "Pizza",
    type: "Restaurant",
    number: "343223",
    date: "12 July, 2015",
    price: -13.53
  },
  {
    name: "Soup",
    type: "Restaurant",
    number: "343223",
    date: "12 July, 2015",
    price: -18.53
  },
  {
    name: "Wine",
    type: "Restaurant",
    number: "343223",
    date: "12 July, 2015",
    price: -23.53
  }
];
