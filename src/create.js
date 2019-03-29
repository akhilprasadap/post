import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';

class Create extends Component {
  /*API fetching to perform creation component*/
      CreatePost = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts/", {
            title: this.refs.title.value,
            body: this.refs.body.value,
            userId: 3
          })
            .then(response => {
            alert("created");
            const posts = response.data;
            console.log(posts);
          })
    }
    /*Creation of create componet*/
    render() {
        return (
                <div>
                    <div className="content">
                      <div className="jobcard">
                        <textarea type="text"  ref="title" placeholder="Title"></textarea><br/><br/>
                        <textarea type="text" rows="4" style={{width:500+"px"}} ref="body" placeholder="Body"></textarea>
                          <button onClick={this.CreatePost}>Post
                          </button>
                      </div>  
                    </div>
                </div>
        )
    }
}
export default Create;