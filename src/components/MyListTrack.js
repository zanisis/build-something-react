import React, { Component } from 'react'
import {connect} from 'react-redux'

import { Card, Image, Button, Popup, Message, Modal, TextArea, Form } from 'semantic-ui-react'

import {delFavTrack, editTrack} from '../actions'

class MyListTrack extends Component {
  state = {
    data : {
      id : '',
      desc: '',
    },
    open: false,
  }

  handleDeleteTrack(id){
    this.props.deleteTrack(id)
  }

  handleEditTrack(id, judul){
    let newData = {...this.state.data, id: id, desc: judul}
    this.setState({data: newData, open: true})
  }

  handleChangeText(data){
    let newData = {...this.state.data, desc: data}
    this.setState({data : newData})
  }

  handleClose(){
    let clearData ={
      data : {
        id : '',
        desc: '',
      },
      open: false,
    }
    this.setState(clearData)
  }

  handleUpdate(){
    this.props.editTrackDesc(this.state.data)
    let clearData ={
      data : {
        id : '',
        desc: '',
      },
      open: false,
    }
    this.setState(clearData)
  }

  render(){
    console.log(this.state)
    const data = this.props.myTrack
    return(
      <div>
        <div style={{textAlign:'center'}}>
          <Message
            style={{width:'33rem'}}
            positive={true}
            color='blue'
            compact
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
                 trigger={<Button  color='blue' icon='write' onClick={()=>this.handleEditTrack(list.id, list.name)}/>}
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

      <Modal dimmer='blurring' size='small' open={this.state.open}>
          <Modal.Header>
            Edit Your Description
          </Modal.Header>
          <Modal.Content>
            <Form>
             <TextArea value={this.state.data.desc} onChange={(e)=>this.handleChangeText(e.target.value)}/>
           </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button negative onClick={()=>this.handleClose()}>
              No
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content='Update' onClick={()=>this.handleUpdate()}/>
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myTrack : state.trackResult
})

const mapDispatchToProps = dispatch =>({
  deleteTrack : (id) => dispatch(delFavTrack(id)),
  editTrackDesc : (data) => dispatch(editTrack(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyListTrack)