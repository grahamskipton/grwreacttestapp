'use client';

import React, { useState, useEffect } from "react";
import Post from "./Post";
import LoadingImage from "../../../images/loadingImage.gif";

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


export default function PostContainer({url,showSummary,showCount}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  wait(1500);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div class="text-center">
      <img 
        className="img-fluid" 
        src={LoadingImage} alt="logo"/>
        <h4>Fetching Content!!</h4>
    </div>);

  if (error) return (
    <div class="alert alert-danger">
      <h2>OOOOPS! Somethings gone wrong!</h2>
      <p>
        Obviously we wouldnt output an error message like this to the real world.. But, what the heck! Here is is:
        <ul>
            <li> {error.message}</li>
        </ul>
      </p>
</div>
  )

  if(!showSummary)
  {
    return (
      <div>
         {data.map((dataObj, index) => {
          if(index <= showCount){
            return(   
            <Post obj={dataObj} totalCount={data.length}/>)
        }})}
    </div>
    );
}
else
{
  return (
    <div>
      <p>These are the most recent postings in the pretend chat. The data doesnt have date, so one has been randomly generated. Go to the main view to see the full bulletin text</p>
      {data.map((dataObj, index) => {
        if(index <= showCount){
          return(   
          <Post obj={dataObj} totalCount={data.length} showSummary={showSummary}/>)
      }})}
  </div>
  );
}
}

 

    
