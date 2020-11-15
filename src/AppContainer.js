import { connect } from 'react-redux'
import { activateGeod, closeGeod } from './redux/actions'

import App from './App'

const mapStateToProps = state => ({
  geod: state.geod,
})

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer