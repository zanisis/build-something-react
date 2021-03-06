import React, { Component } from 'react'
import { Card, Image, Button, Message } from 'semantic-ui-react'

import {connect} from 'react-redux'

// import picture from '../matthew.png'

import {addFavTrack} from '../actions'

class ListTrack extends Component  {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: true })
   }

  handleAddTrack(e){
    this.setState({ visible: false })
    this.props.addFavTrack(e)
    setTimeout(() => {
      this.setState({ visible: true })
    }, 2000)
  }

  render(){
    const data = this.props.listTrack
    return(
      <div>
        <div style={{textAlign:'center'}}>
          <Message
            style={{width:'33rem'}}
            positive={true}
            color='blue'
            compact
            onDismiss={this.handleDismiss}
            hidden={this.state.visible}
            content='Success to Add Your Favorite Song '/>
        </div>
        <Card.Group style={{margin:'0px 3rem'}} itemsPerRow={5} >
        {data.map(list => (
          <Card key={list.id} style={{width:'16rem', height:'27rem'}}>
           <Image src={list.album.images[1].url} style={{minHeight:'7rem'}}/>
           <Card.Content>
             <Card.Header>
               {list.artists[0].name}  {/*for artists*/}
             </Card.Header>
               <Card.Meta>
               <span className='date'>
                 Support By : Spotify
               </span>
             </Card.Meta>
             <Card.Description>
               Judul : {list.name}  {/*for albums*/}
             </Card.Description>
           </Card.Content>
           <Card.Content extra style={{padding:'3px 7px'}}>
             <Button.Group color='olive' size='small'>
               <Button
                 content='Add Favorite' icon='heart' labelPosition='right' onClick={()=>this.handleAddTrack(list)}/>
             </Button.Group>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  listTrack : state.searchResult
})
const mapDispatchToProps = dispatch=>({
  addFavTrack : (data) => dispatch(addFavTrack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTrack)
