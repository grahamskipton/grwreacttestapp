import React, { Component } from "react";
import PostContainer from "../Components/Posts/PostContainer";
import image from "../../images/javascriptimage.jpg";

class Home extends Component {
  render() {
    return (
        <div class="row">
          <div class="col-8">
            <h2>Welcome to the React Chat!</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
            <img 
              className="img-fluid" 
              src={image} alt="logo"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="col-4">
              <h2 class="red">Latest Posts</h2>
              <PostContainer 
                url={'https://jsonplaceholder.typicode.com/posts'} 
                showSummary={true} 
                showCount={5}/>
            </div>
        </div>       
    );
  }
}

export default Home;