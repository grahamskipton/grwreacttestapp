'use client';
 
import {useState} from 'react';
import userimage from '../../../images/userimage.png';

function GetUserId(userId)
{
  switch (userId)
  {
      case 1:
          return ('John Petrucci')
          break;
      case 2:
          return ('Mike Portnoy')
          break;
      default:
          return ('User Unknown');
  }
}

export default function Post({obj,totalCount,showSummary}) {

    const [showButton, setShowButton] = useState(false);
    const [buttonText, setButtonText] = useState(false);

    const ToggleView = () => {
        setShowButton(!showButton);
      }
    
    if(showSummary)
    {
      return (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{obj.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">{GetUserId(obj.userId)} - 23rd March 2024 @ 15:04</h6>
          </div>
        </div>
      )
    }
    else
    {
      return(
      <div class="row">
        <div class="col-2">
        <div class="card">
          <img src={userimage} class="card-img-top" alt=""/>
            <div class="card-body">
              <h5>{GetUserId(obj.userId)}</h5>
            </div>
          </div>
        </div>
        <div class="col-10">
        <p class="lead">Friday 22nd March 2024 @ 16:03</p>
          <h3>
            {obj.title}
          </h3>
            {showButton && <p>{obj.body}</p>};
            {showButton && 
              <button 
                className={'btn btn-dark btn-lg'} 
                onClick={ToggleView}>
                  Hide Content
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                  </svg>
            </button>}  
            {!showButton && 
              <button 
                className={'btn btn-dark btn-lg'} 
                onClick={ToggleView}>
                  Show Content 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                  </svg>  
            </button>} 
        </div>
        <hr/>
      </div>
      )
    }
  
  
}