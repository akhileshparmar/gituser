import React from "react";
import "./Usercard.css";

const Usercard = (user) => {

  if (user.user){
    const { login, avatar_url, html_url, name, bio, public_repos, followers, following  } = user.user;
    return (
      <>
        <div className="row text-center info col-10 col-md-10">
          <div className="col-8 col-lg-6 image">
            <img src={avatar_url} className="img-thumbnail mx-auto" alt="Img" />
          </div>
  
          <div className="col-12 col-lg-6 details">
            <h2>{name}</h2>
            <p>{login}</p>
            <a href={html_url}>{html_url}</a><br/>
            <p>{bio}</p>
  
            <div className="stats">
              <div className="stat-info mx-1">Repo <p>{public_repos}</p></div>
              <div className="stat-info mx-1">Followers <p>{followers}</p></div>
              <div className="stat-info mx-1">Following <p>{following}</p></div>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
      return(
        <>
        </>
      )
      }  
};

export default Usercard;
