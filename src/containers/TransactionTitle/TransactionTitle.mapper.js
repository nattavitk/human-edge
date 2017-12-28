import { connect } from 'react-redux';
import TransactionTitle from './TransactionTitle';

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.transaction.transaction.name,
  };
};

export default connect(mapStateToProps)(TransactionTitle);
