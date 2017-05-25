import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'


class EmptyTrack extends Component {
  render(){
    return(
      <div style={{marginTop:125}}>
        <Header as='h1' textAlign='center'>
          404 Your Fav Music
        </Header>
      </div>
    )
  }
}

export default EmptyTrack