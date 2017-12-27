import { connect } from 'react-redux';
import TransactionDocument from './TransactionDocument';

const mapStateToProps = (state, ownProps) => {
  return {
    transaction: state.transaction.transaction,
  };
};

export default connect(mapStateToProps)(TransactionDocument);
