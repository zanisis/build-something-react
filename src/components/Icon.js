import React, {Component} from 'react'
import { Icon } from 'semantic-ui-react'

class IconSearch extends Component {
  constructor(props) {
    super(props)
  }

  handleClickSearch(){
    alert('diIcon')
  }

  render(){
    return(
      <div>
        <Icon name={this.props.name} inverted circular link onClick={this.handleClickSearch}/>
      </div>
    )
  }
}

export default IconSearch