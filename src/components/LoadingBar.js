import React, {Component} from 'react'
import { Icon, Header, Segment } from 'semantic-ui-react'


class Loading extends Component {
  render(){
    return(
      <div style={{marginTop:125}}>
        <Header as='h1' textAlign='center'>
          Input Your Favorite Artist
        </Header>
        <Header as='h3' textAlign='center'>
          <Icon.Group size='big'>
                <Icon loading size='massive' name='sun' />
                <Icon name='user' size='big'/>
          </Icon.Group>
        </Header>
    </div>

    )
  }
}

export default Loading