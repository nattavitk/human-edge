import { connect } from 'react-redux';
import TransactionTitle from './TransactionTitle';

const mapStateToProps = (state, ownProps) => {
  return {
    transaction: state.transaction.transaction,
  };
};

export default connect(mapStateToProps)(TransactionTitle);
