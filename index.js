let React = require('react')
let ReactNative = require('react-native')

let {
  Component,
  PropTypes
} = React
let {
  TextInput
} = ReactNative

class SuperTextInput extends Component {

  constructor() {
    super()
    this.state = {
      timeout: null
    }
  }

  render() {
    let {onPauseText, pauseDelay, onChangeText} = this.props
    let {timeout} = this.state
    return (
      <TextInput
         {...this.props}
         onChangeText={(text) => {
           if (onPauseText) {
             if (timeout) window.clearTimeout(timeout)
             timeout = window.setTimeout(() => onPauseText(), pauseDelay)
             this.setState({timeout})
           }
           if (onChangeText) onChangeText(text)
         }}
       />
    )
  }

}

SuperTextInput.propTypes = {
  onPauseText: PropTypes.func,
  pauseDelay: PropTypes.number
}

SuperTextInput.defaultProps = {
  pauseDelay: 500
}

module.exports = SuperTextInput
