import { connect } from 'react-redux';
import OrganizationTitle from './OrganizationTitle';

const mapStateToProps = state => ({
  title: state.transaction.transaction.organizationName,
});

export default connect(mapStateToProps)(OrganizationTitle);
