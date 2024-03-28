import React, { Component } from "react";
import PostContainer from "../Components/Posts/PostContainer2";

class OtherLayout extends Component {
  render() {
    return (
     
      <div class="container">
       
        <h2>The infamous react<span class="red">ion</span> bulletin board</h2>
       
        <p class="lead">Non sunt sint At voluptas rerum id quia debitis non similique galisum? In quia tempore et voluptate voluptatem aut nihil voluptas sed harum consequuntur non provident nostrum? In quis quia et aliquam perspiciatis et repellendus labore qui sapiente sunt aut enim beatae et dolore nesciunt et sint molestiae.</p>
      
        <PostContainer 
          url={'https://jsonplaceholder.typicode.com/posts'} 
          showSummary={false} 
          showCount={100}/>
      
      </div>
    );
  }
}

export default OtherLayout;