import { connect } from 'react-redux';
import TransactionDetail from './TransactionDetail';

const mapStateToProps = (state, ownProps) => {
  return {
    transaction: state.transaction.transaction,
  };
};

export default connect(mapStateToProps)(TransactionDetail);
