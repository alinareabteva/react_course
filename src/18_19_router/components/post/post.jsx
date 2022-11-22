import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './post.css';

//OLD WAY
class Post extends Component {
  state = {
    post: {},
  }

  componentDidMount() {
    const id = this.props.match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      })
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;

    return (
      <>
        <h1>Post</h1>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </>
    );
  }
};

//CURRENT WAY

const fetchPost = (postId) => {
  return fetc h(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
}

const PostComponent = () => {
  const [post, setPost] = useState({});
  const {postId} = useParams();

  useEffect(() => {
    if (postId) {
    fetchPost(postId)
      .then(data => {
        setPost(data)
      })
    }
  }, [postId])

  const { title, body } = post;

  return (
    <>
      <h1>Post</h1>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </>
  );
}

export default PostComponent;
