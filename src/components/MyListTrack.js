import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Card, Image, Button, Popup } from 'semantic-ui-react'


class MyListTrack extends Component {
  render(){
    const data = this.props.myTrack
    return(
      <div>
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
           <Card.Content extra style={{padding:'3px 7px', textAlign:'right'}} >
             <Button.Group size='small' >
               <Popup
                 trigger={<Button  color='red' icon='ban' onClick={()=>this.handleAddTrack(list)}/>}
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

export default connect(mapStateToProps, null)(MyListTrack)