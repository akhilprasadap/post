import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './toggle';
import { BrowserRouter as Router, Link, NavLink, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isToggleOn: "My Post",
            postid: "",
            deleteid: ""
        };
    }
    /*API fetching for all posts and my posts*/
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
    }
    /*for performing toggle*/
    toggle = () => {
        this.state.isToggleOn == "My Post" ? this.setState({ isToggleOn: "All Post" }) : this.setState({ isToggleOn: "My Post" });
        if (this.state.isToggleOn == "My Post") {
            axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")
                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                })
        } else {
            axios.get("https://jsonplaceholder.typicode.com/posts")

                .then(response => {
                    const posts = response.data;
                    console.log(posts);
                    this.setState({ posts });
                })
        }
    }
    /*comment function*/
    comment = (id) => {
        this.setState({ postid: id });
    }
    /*delete function*/
    delete = (id) => { { /*} this.setState({deleteid: id}) */ } { /*this.setState(prevState => ({ deleteid: [...prevState.deleteid, id] }))*/ }
        this.state.posts.splice(id - 1, 1);
        this.setState({ posts: this.state.posts })
    }
    render() {
        return (
            <div>
                <div className="topnav">                 
                    <Toggle toggle={this.toggle}/>
                    <div className="create-post">
                        <Link to ="/Create" ><button>Create post</button>
                        </Link>
                    </div>
                </div>  
                <div>
                    {this.state.posts.map(post=>
                    <div>
                        <Link to={'/Comment/'+post.id}>
                            <div key={post.id}>
                                <Jobcard title={post.title} body={post.body}/>
                            </div>
                        </Link>
                        <div className="del-up">
                            {post.userId==3?  
                            <button onClick={()=>this.delete(post.id)}>delete</button>:null}
                            <Link to={'/Update/'+post.id}><button>update</button></Link>
                        </div>
                    </div>
                    )       
                }
                </div>
            </div>
        );
    }
}
export default Home;

class Jobcard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                    <div className="content">
                        <div className="jobcard">
                            <h1>{this.props.title}</h1>
                            <article>{this.props.body}</article>
                        </div>  
                    </div>
                </div>
        )
    }
}