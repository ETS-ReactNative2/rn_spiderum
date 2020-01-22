import { connect } from 'react-redux'
import Options from '../components/Options'
import handlers from '../handlers'
import { MODULE_NAME as MODULE_OPTION } from '../models'

const mapDispatchToProps = (dispatch, props) => ({
  ...handlers(dispatch, props)
})

const mapStateToProps = (state, props) => {
  return {
    darkMode: state[MODULE_OPTION].darkMode
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Options)
