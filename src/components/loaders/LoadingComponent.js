import React from 'react'
import styled from 'styled-components'

const LoadingComponent = (props) => {
  return(
    <Styling className={props.classes ? props.classes: ''} style={props.styles? props.styles: {}}></Styling>
  )
}

const Styling = styled.div`
  background: #f5f6f7;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;

  &::after {
    animation: FBLoadShimmer-animate 1s steps(20, end) infinite forwards;
    background-color: #f5f6f7;
    background-image: linear-gradient( to right, #F5F6F7 0%, #edeef1 20%, #F5F6F7 40%, #F5F6F7 100% );
    content: ' ';
    display: block;
    height: 100%;
    position: relative;
    width: 100%;
    will-change: transform;
}


  @keyframes FBLoadShimmer-animate{
    0%{transform:translateX(-100%)}
    100%{transform:translateX(100%)}
  }
`
export default LoadingComponent
