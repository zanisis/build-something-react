import React, {Component} from 'react'
import {connect} from 'react-redux'

//from component
import Header from './Header'
import LoadingBar from './LoadingBar'
import ListTrack from './ListTrack'

class MainBar extends Component {
  render(){
    const data = this.props.listTrack.searchResult
    return(
      <div>
        <Header active={'home'}/>
        { data.length === 0 ? <LoadingBar /> : <ListTrack />}
      </div>

    )
  }
}

const mapStateToProps = state => ({
  listTrack : state
})

export default connect(mapStateToProps, null)(MainBar)