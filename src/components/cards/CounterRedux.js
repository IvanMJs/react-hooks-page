import React from "react";
import { deposit, withdraw } from "../../store/amount/action";
import { Button } from "@chakra-ui/button";
import { selectCurrentAmount } from "../../store/amount/reducer";
import { connect } from "react-redux";
import { Text } from "@chakra-ui/layout";

const mapStateToProps = (state) => {
  return {
    amount: selectCurrentAmount(state),
  };
};

const CounterRedux = ({ amount, deposit, withdraw }) => {
  return (
    <div>
      <Text color="#FFFFFF">{amount}</Text>
      <Button onClick={() => deposit()}>Deposit $10</Button>
      <Button onClick={() => withdraw()}>Withdraw $10</Button>
    </div>
  );
};

export default connect(mapStateToProps, { deposit, withdraw })(CounterRedux);
