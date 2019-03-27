import React, { Component } from 'react';
import axios from 'axios';
import './homestyle.css';
import Toggle from './toggle.js';
import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isToggleOn: "My Post",
            postid: ""
        };
    }

    componentDidMount() {
        

            
                axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            
            
    }
    toggle=()=>{
        this.state.isToggleOn=="My Post"? this.setState({isToggleOn:"All Post"}) : this.setState({isToggleOn:"My Post"});
   
     if(this.state.isToggleOn=="My Post"){
                axios.get("https://jsonplaceholder.typicode.com/posts?userId=3")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            }
            else{
                axios.get("https://jsonplaceholder.typicode.com/posts")

            .then(response => {
                const posts = response.data;
                console.log(posts);
                this.setState({ posts });
            })
            }

    }

    comment=(id)=>{
        this.setState({postid: id });
        
    }

    render() {
        
        return (
            <div>
                <div className="topnav">                 
                    <Toggle toggle={this.toggle}/>
                </div>
                <div>
                {this.state.posts.map(post=>
                    <Link to={'/Comment/'+post.id}>
                    <div key={post.id} onClick={()=>this.comment(post.id)}>
                    <Jobcard title={post.title} body={post.body}/>
                    </div>
                    </Link>
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