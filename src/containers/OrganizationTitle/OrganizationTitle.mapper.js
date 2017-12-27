import { connect } from 'react-redux';
import OrganizationTitle from './OrganizationTitle';

const mapStateToProps = state => ({
  transaction: state.transaction.transaction,
});

export default connect(mapStateToProps)(OrganizationTitle);
