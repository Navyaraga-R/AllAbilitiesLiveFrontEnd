import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./News.css";
import Navbar from "./Navbar";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import ReactPlayer from 'react-player';
import Footer from "./Footer";

const fetchNews =
  "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d73b46c159dd4a5b810f2a3b3cd99573";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  componentDidMount() {
    fetch(fetchNews)
        .then(response => response.json())
        .then((data) => {
            let news = data.articles;
            news.map((news_des) => { 
                return news_des; 
            }) 
            this.setState({ news: news, isLoading: false })
        })
  }
  render() {
    //using map function iterate movies & sending them to a constant

    const filterNews = this.state.news.filter((newsItem) => newsItem.urlToImage);
    const myList = filterNews.map((news_desc, index) => {
      return (
        //using card layout for displaying movies in a row
        <Card style={{ width: '18rem', cursor: 'pointer'}} key={index} className="card-container">
          <a href={news_desc.url} target="_blank"><CardImg src={news_desc.urlToImage} alt={news_desc.title}/></a>
          <CardBody>
            <CardTitle> {news_desc.title}</CardTitle>
            <CardSubtitle>
              <b></b> {news_desc.description}
            </CardSubtitle>
          </CardBody>
        </Card>
      );
    });
    
    return (
      <div className="news">
        <section>
          <div>
            <Navbar />
          </div>
        </section>
        <section>
          <div className="News_section">
            <div className="News_video">
              <ReactPlayer 
                url="https://www.youtube.com/watch?v=XyWYQNIKR88"
                onReady = {() => console.log('onReady callback')}
                onStart = {() => console.log('onState callback')}
                onPause = {() => console.log('onPause callback')}
                onEnded = {() => console.log('onEnd callback')}
                onError = {() => console.log('onError callback')}
              />
            </div>
            <div className="News_title">Arminia Bielefeld crucial win over Freiburg | ESPN FC Bundesliga Highlights</div>
          </div>
          <div className="events_carousel_1" onClick ="">{myList}</div>
        </section>
        <section>
          <div>
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
export default News;
