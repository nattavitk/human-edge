import { connect } from 'react-redux';
import Auth from './Auth';
import actions from '../../actions';

const mapStateToProps = state => ({
  isLoading: state.value.isLoading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsLoading: toggle => dispatch(actions.setIsLoading(toggle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
