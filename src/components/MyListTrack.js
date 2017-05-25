import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Card, Image, Button, Popup, Message } from 'semantic-ui-react'

import {delFavTrack} from '../actions'

class MyListTrack extends Component {

  handleDeleteTrack(id){
    this.props.deleteTrack(id)
  }

  render(){
    const data = this.props.myTrack
    return(
      <div>
        <div style={{textAlign:'center'}}>
          <Message
            style={{width:'33rem'}}
            positive={true}
            color='blue'
            compact
            onDismiss={true}
            hidden={true}
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
               Desc : {list.name}  {/*for albums*/}
             </Card.Description>
           </Card.Content>
           <Card.Content extra style={{padding:'3px 7px', textAlign:'right'}} >
             <Button.Group size='small' >
               <Popup
                 trigger={<Button  color='blue' icon='write' onClick={()=>this.handleAddTrack(list)}/>}
                 content='Edit Your Song'
               />
               <Popup
                 trigger={<Button  color='red' icon='ban' onClick={()=>this.handleDeleteTrack(list.id)}/>}
                 content='Delete Your Favorite Song'
               />
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
  myTrack : state.trackResult
})

const mapDispatchToProps = dispatch =>({
  deleteTrack : (id) => dispatch(delFavTrack(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyListTrack)