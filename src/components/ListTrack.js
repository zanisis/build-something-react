import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

import {connect} from 'react-redux'

import picture from '../matthew.png'


class ListTrack extends Component  {
  render(){
    const data = this.props.listTrack.searchResult
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
           <Card.Content extra style={{padding:'3px 7px'}}>
             <Button.Group color='olive' size='small'>
               <Button content='Add Favorite' icon='heart' labelPosition='right' />
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
  listTrack : state
})

export default connect(mapStateToProps,null)(ListTrack)
