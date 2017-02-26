import { connect }                  from 'react-redux'
import Homepage                     from '../components/homePage'

// Redux connection
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
