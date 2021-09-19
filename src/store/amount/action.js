const deposit = () => {
  return {
    type: "DEPOSIT_MONEY",
    payload: 10,
  };
};

const withdraw = () => {
  return {
    type: "WITHDRAW_MONEY",
    payload: -10,
  };
};

export { deposit, withdraw };
