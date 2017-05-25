import React, { Component } from 'react'
import {connect} from 'react-redux'

import EmptyTrack from './EmptyTrack'
import MyListTrack from './MyListTrack'

import {fetchFavTrack} from '../actions'


class MyTrack extends Component{

  componentDidMount(){
    this.props.fetchFavTrack()
  }

  render(){
    const data = this.props.myTrack
    return(
      <div>
        {data.length === 0 ? <EmptyTrack /> : <MyListTrack  />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  myTrack : state.trackResult
})

const mapDispatchToProps = dispatch => ({
  fetchFavTrack : ()=> dispatch(fetchFavTrack())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyTrack)