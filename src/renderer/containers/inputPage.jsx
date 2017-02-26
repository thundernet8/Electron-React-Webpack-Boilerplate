import { connect }                  from 'react-redux'
import Inputpage                    from '../components/inputPage'

// Redux connection
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  }
}

// Which props to inject from the global atomic state
export default connect(mapStateToProps, mapDispatchToProps)(Inputpage)
