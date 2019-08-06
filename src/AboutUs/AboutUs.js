import React , {Component} from 'react';

class AboutUs extends Component{
  render(){
    return (
      <div>
        <p className = "title2">ONE PLACE... EVERYTHING...NOW YOU CAN SEE IT!</p> 
        <div className = "pAll">
          <p>These words describe us perfectly. We are providing a huge database of content - which you have ever wanted. What do you wish for? Movies? Series? Well.. OK! All of that and even much more you can find now just in one location! However, our main goal is to build an awesome community, which will share the content with each other. Don't waste your time and get everything you like on one site. Just try it!</p><br/>
          <p> <span className="titleMovie">MOVIES</span>  <br/><br/> Every movie you can think of is here for you, and if it dares to be not, just add it! You can even earn by providing content so why not?  </p>
          <p> <span className="titleSeries">Tv-series</span> <br/><br/>  Easily find torrent for complete seasons at https://torrents.io/site/yts-subtitles so you don't have to bother to download each episode separately. Download subtitles directly within their torrents table for exact episode that you want. </p>
          <p> <span className="titleEnd">Token rewards</span> <br/><br/> Soon you will be rewarded based on your activity on the website. Work on your "site points" because they will be transformed into tokens! </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;