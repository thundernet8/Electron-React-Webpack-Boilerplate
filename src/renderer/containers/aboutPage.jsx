import { connect }                  from 'react-redux'
import AboutPage                    from '../components/aboutPage'

// Redux connection
const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)
