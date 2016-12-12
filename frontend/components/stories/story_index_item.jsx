import React from 'react';
import { Link } from 'react-router';

class StoryIndexItem extends React.Component {
  render(){
    const img = window.plant;
    const { story } = this.props;
     return (
      <li className="story-index-item">
        <section className="index-item">
          <h3 className="story-index-title">{ story.title }</h3>
          <p className="story-index-author-info">by {story.author.username} </p>
          <img className="story-index-image"src={img}/>
          <p className="story-index-body-preview"> { story.body.slice(0, 65) }...</p>
          <Link to={ `/stories/${ story.id }`} className="read-more">Read more...</Link>
        </section>

      </li>
    );
  }
}
// TODO: style this
// TODO: add create, update and destroy
export default StoryIndexItem;
