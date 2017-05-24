import React, {Component} from 'react'
import {Segment, Input, Menu, Icon} from '../semanticUI'
import {connect} from 'react-redux'

import logo from '../logo.svg';
import '../App.css';

import {fetchMusic} from '../actions'

class HeaderBar extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'home',
      searchWord: '',
      iconName: 'search',
      flag: 'false'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleInputSearchs = (e)=> { this.setState({searchWord: e.target.value }) }

  handleClickSearch = ()=>{
    this.props.searchTrack(this.state.searchWord)
  }

  render(){
    const { activeItem } = this.state
    return(
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} color='olive'/>
          <Menu.Item name='myTrack' active={activeItem === 'myTrack'} onClick={this.handleItemClick} color='teal'/>
          <img src={logo} className="App-logo" alt="logo" position="center"/>

          <Menu.Item position="right">
            <Input icon={<Icon name={this.state.iconName} inverted circular link onClick={this.handleClickSearch}/>}
              name="searchWord" placeholder='Search Fav Artist' onChange={this.handleInputSearchs}/>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  searchTrack : (data)=> dispatch(fetchMusic(data))
})

export default connect(null, mapDispatchToProps)(HeaderBar)