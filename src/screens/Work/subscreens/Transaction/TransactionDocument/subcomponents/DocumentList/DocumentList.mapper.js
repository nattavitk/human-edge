import { connect } from 'react-redux';
import DocumentList from './DocumentList';

const mapStateToProps = (state, ownProps) => {
  return {
    transaction: state.transaction.transaction,
  };
};

export default connect(mapStateToProps)(DocumentList);
