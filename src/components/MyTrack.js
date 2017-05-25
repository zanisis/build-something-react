import React, { Component } from 'react'
import {connect} from 'react-redux'

import EmptyTrack from './EmptyTrack'
import MyListTrack from './MyListTrack'

class MyTrack extends Component{
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

export default connect(mapStateToProps,null)(MyTrack)