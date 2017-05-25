import React, {Component} from 'react'
import {Segment, Input, Menu, Icon} from '../semanticUI'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'


import logo from '../logo.svg';
import '../App.css';

import {fetchMusic} from '../actions'

class HeaderBar extends Component {
    state = {
      activeItem: 'home',
      searchWord: '',
      iconName: 'search',
      flag: 'false'
      }

  componentWillMount(){
    this.setState({activeItem : this.props.active})
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleInputSearchs = (e)=> { this.setState({searchWord: e.target.value }) }

  handleClickSearch = ()=>{
    this.props.searchTrack(this.state.searchWord)
  }

  render(){
    const { activeItem } = this.state
    return(
      <div>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item as={Link} to="/" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} color='olive'/>
            <Menu.Item as={Link} to="/mytrack" name='myTrack' active={activeItem === 'mytrack'} onClick={this.handleItemClick} color='teal'/>
            <Image src={logo} className="App-logo"/>
            <Menu.Item position="right">
              <Input icon={<Icon name={this.state.iconName} inverted circular link onClick={this.handleClickSearch}/>}
              name="searchWord" placeholder='Search Fav Artist' onChange={this.handleInputSearchs}/>
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchTrack : (data)=> dispatch(fetchMusic(data))
})

export default connect(null, mapDispatchToProps)(HeaderBar)