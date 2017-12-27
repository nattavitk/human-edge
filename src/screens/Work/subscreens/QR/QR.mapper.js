import { connect } from 'react-redux';
import QR from './QR';
import actions from '../../actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setTransaction: transaction => {
      dispatch(actions.setTransaction(transaction));
    },
  };
};

export default connect(null, mapDispatchToProps)(QR);
