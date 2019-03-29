import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './toggle';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + this.props.match.params.id)
            .then(response => {
                const comments = response.data;
                console.log(comments);
                this.setState({ comments });
            })
    }
    render() {
        return (
            <div>
                <div className="c">
                    <h1>Comments</h1>
                </div>
                {this.state.comments.map(comments=>
                <div>
                    <div className="comment"> 
                        <h2>{comments.name}</h2>
                        <p>{comments.body}</p>
                    </div>
                </div>
            )       
        }   
            </div>
        );
    }
}
export default Comment;