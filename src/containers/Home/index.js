import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import recipeActions from '../../redux/actions/recipe';
import HomeScreen from './components/Home';

const mapStateToProps = state => ({
  recipeState: state.recipeReducer,
});

const mapActionsToProps = dispatch => ({
  recipeActions: bindActionCreators({ recipeActions }, dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)(HomeScreen);
