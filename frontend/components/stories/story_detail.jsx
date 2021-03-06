import React from 'react';
import ReactQuill from 'react-quill';
import { Link, withRouter } from 'react-router';
import WriteCommentContainer from '../comments/write_comment_container';
import LikeContainer from '../likes/like_container';
import FollowContainer from '../follows/follow_container';

class StoryDetail extends React.Component {

  constructor(props) {
    super(props);
    this.options = this.options.bind(this);
    this.delete = this.delete.bind(this);
    this.makeComment = this.makeComment.bind(this);
    this.createBody = this.createBody.bind(this);
  }


  createBody() {
    debugger
      const rawString = this.props.story.body;
      const div = (
        <div
          dangerouslySetInnerHTML={ {__html: rawString } }
          />
      );
      return div;
  }

  componentDidMount() {
    this.props.fetchSingleStory(this.props.params.storyId).then(() => $('body').scrollTop(0));
    this.props.fetchAllFollows();
  }

  makeComment(comment){
    return(
      <li key={ comment.id } className="commentStreamItem">
        <Link to={ `/users/${ comment.user_id }`}>
          <p className="authorAboutComment">{ comment.username }</p>
        </Link>
        <p className="commentBody">{ comment.body }</p>
        { this.options(comment) }
      </li>
    );
  }

  responseCount(){
    if (this.props.comments.length === 0) {
      return "";
    } else {
      return this.props.comments.length;
    }
  }

  delete(){
    const { story } = this.props;
    this.props.deleteStory(story).then(() => (this.props.router.push('/')) );
  }

  defineImage(story){
    if (story.image_url){
      let width = this.getMeta(story.image_url);
      if (width > 800) {
        return (<img className="story-index-image"src={ story.image_url }/>);
      } else {
        return (<img className="story-index-image-small"src={ story.image_url }/>);
      }
    } else {
      return;
    }
  }

  getMeta(url){
    var img = new Image();
    img.src = url;
    return img.naturalWidth
  }

  render(){
    const { story, currentUser } = this.props;
    let commentsArr = {};
    let likeCount = story.likes.length;
    let image = this.defineImage(story);
    let noOfResponses = this.responseCount();
    if (story) {
      commentsArr = story.comments.map((comment) => this.makeComment(comment));
    }

    let userOptions;
    userOptions = this.options();
    const profile = window.profilePic;
    return (
      <section className="postDetail">
        <div className="author-bio group">
          <ul className="followsList group">
              <li className="authorbio author-image">
                <Link to={ `/users/${ story.author.id }`}>
                  <img src={ profile }/>
                </Link>
              </li>
            <li className="authorbio authorfollows">
              < FollowContainer authorId={ story.author_id } follows={ story.author.follows }/>
            </li>
          </ul>
          <ul>
            <Link to={ `/users/${ story.author.id }`}>
            <li>
              { story.author.username }
            </li>
          </Link>
          </ul>
        </div>
        <h1 className="postDetailTitle">{ story.title }</h1>
        { image }
        <div className="story-footer">
          { this.createBody() }
          <section>
            <div className="userOptionsContainer">{ userOptions }</div>
          </section>
          <section className="commentsSection">
            < LikeContainer storyId={ story.id } likes={ story.likes }/>
          <div className="replies">
            { noOfResponses } Responses
          </div>
          <ul className="comments-wrapper">
            < WriteCommentContainer />
            { commentsArr }
          </ul>
          </section>
        </div>
      </section>
    );
  }

  options(){
    const { currentUser, story } = this.props;
    if (currentUser === null || story.author.id === null){
      return (<div></div>)
    } else if (story.author.id === currentUser.id) {
      let id = this.props.params.storyId;
      return (
        <ul className="edit-delete group">
          <li key="edit">
            <Link to={`/stories/edit/${ id }`}>Edit</Link>
          </li>
          <li key="delete" onClick={ this.delete }>Delete</li>
        </ul>
      )} else {
        return (<div></div>)
      }
  }
}

export default StoryDetail;
