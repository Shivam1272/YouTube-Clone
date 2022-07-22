import React from 'react'
import './App.css';
import {Grid} from '@material-ui/core'
import  SearchBar  from './components/SearchBar'
import  VideoDetail  from './components/VideoDetail'
import  VideoList  from './components/VideoList'
import youtube from './api/youtube'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      videos : [],
      selectedVideo : null,
    }
  }

  componentDidMount(){
    this.handleSubmit('rakazone gaming')
  }
  
  handleSubmit = async(searchTerm) => {
    const response = await youtube.get('search',{params : { q : searchTerm}})
    this.setState({videos: response.data.items, selectedVideo : response.data.items[0]}, () => console.log(this.state))
  }

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  render(){
    const { videos , selectedVideo } = this.state
    return (
      <Grid justifyContent='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}


export default App;