import React from 'react';
import NavBar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import NewsCard from './components/NewsCard'
import axios from 'axios'
import './App.css';

class App extends React.Component {
    
    state = {
      news: []
    }

    componentDidMount () {
      axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=`)
        
      .then(out => {
        const news = out.data.articles;
        this.setState({ news });
      })
    }
  render(){
      return (
        <>
        <NavBar />
        <Jumbotron />
        <NewsCard news={this.state.news} />
        </>
      )
    }
}

export default App;
