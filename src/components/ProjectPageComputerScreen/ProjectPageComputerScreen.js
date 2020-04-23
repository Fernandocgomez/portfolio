import React from 'react'
import './ProjectPageComputerScreen.css';
import { Responsive } from 'semantic-ui-react';


function ProjectPageComputerScreen(props) {



  const obj = props.obj
  console.log('obj', obj)

  function mapItemList(arr) {
    return arr.map((item, index) => {
      return (
        <ul>
          <li key={index}>{item}</li>
        </ul>
      )
    })
  }

  function mapIconeAndLogo(arr) {
    return arr.map((item, index) => {
      return (
        <div key={index} className="computer-screen-project-page-link-item">
            <i key={index} className={item.icon}></i>
        <a key={index} href={item.link}>{item.label}</a>
        </div>
      )
    })
  }

  function mapImagesAndLabels(arr) {
    return arr.map((item, index) => {
      return (
        <div className="computer-screen-project-page-project-pictures" key={index}>
          <h3 key={index}>{item.label}</h3>
          <img src={item.imageUrl} alt={item.label} key={index}/>
        </div>
      )
    }) 
  }

  


  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-screen-project-page-container">
        <div className="computer-screen-project-page-title">
          <h1>{obj.title}</h1>
        </div>
        <div className="computer-screen-project-page-main-img">
          <iframe 
          width="560" 
          height="315" 
          src={`https://www.youtube.com/embed/${obj.videoId}?&autoplay=0`}
          frameBorder="0" 
          allowFullScreen 
          allow="autoplay;"
          autoPlay="0"
          title="project demo"
          />
        </div>

        <div className="computer-screen-project-page-des">
          <p>{obj.des}</p>
          <p>{obj.title} was built using popular technologies such as:</p>
        </div>

        {
          (obj.frontEnd !== undefined) ? (
            <div className="computer-screen-project-page-list">
            <h3>Front End</h3>
            {mapItemList(obj.frontEnd)}
        </div>
          ) : (
            <></>
          )
        }
        {
          (obj.backEnd !== undefined) ? (
            <div className="computer-screen-project-page-list">
              <h3>Back End</h3>
              {mapItemList(obj.backEnd)}
            </div>
          ) : (<></>)
        }
        

        {
          (obj.mobile !== undefined) ? (
            <div className="computer-screen-project-page-list">
              <h3>Mobile</h3>
              {mapItemList(obj.mobile)}
            </div>
          ) : (<></>)
        }
        

        <div className="computer-screen-project-page-link-container">
          {mapIconeAndLogo(obj.links)}
        </div>


        {
          (obj.imgs !== undefined) ? (
            <div className="computer-screen-project-page-sample-imgs">
              <h2>Project Pictures</h2>
              {mapImagesAndLabels(obj.imgs)}
            </div>
          ) : (
            <></>
          )
        }

        {
          (obj.imgsWireframe !== undefined) ? (
            <div className="computer-screen-project-page-sample-imgs">
              <h2>Wireframe Project Pictures</h2>
              {mapImagesAndLabels(obj.imgsWireframe)}
            </div>
          ) : (
            <></>
          )
        }
  
      </div>
    </Responsive>
  )
}

export default ProjectPageComputerScreen
