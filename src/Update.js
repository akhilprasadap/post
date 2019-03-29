import React, { Component } from 'react';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import './homestyle.css';

class Update extends Component {
    constructor(props) {
        super(props);
    }
    /*API fetching to perform updating posts*/
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id)
            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
                this.refs.title.value = this.state.posts.title;
                this.refs.body.value = this.state.posts.body;
            })
    }
    updatePost = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id, {
                id: 1,
                title: this.refs.title.value,
                body: this.refs.body.value,
                userId: 3
            })
            .then(response => {
                const update = response.data;
                console.log(update);
                this.setState({ update });
            })
    }
    render() {
        return (
            <div>
                    <div className="content">
                        <div className="jobcard">
                            <input type="text" ref="title" placeholder="Update Title"></input><br/><br/>
                            <input type="text" ref="body" placeholder="Update Body"></input><br/><br/>
                            <button onClick={this.updatePost}>Update</button>
                        </div>  
                    </div>
                </div>
        )
    }
}
export default Update;