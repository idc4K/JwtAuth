import React from 'react';
import styled from 'styled-components';
import responsive_video from '../../image/responsive_video.png';
function SecondSection() {
    return (
        <>
            <Sections>
                <Container>
                    <TextInfo>
                        <h1 className='farafina-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
                        <p className='farafina-text'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                    </TextInfo>
                    <ImageInfo>
                      <img src={responsive_video}/>
                    </ImageInfo>
                </Container>
            </Sections>
        </>
      )
}

const Sections = styled.section`
  margin-top: 17vh;
  padding: 50px 5%;
  position: relative;
  @media screen and (max-width: 991px) {
    padding: 35px 50px
    
 }
 @media screen and (max-width: 767px) {
   padding: 25px;
    
 }
 `
const Container = styled.div`
 display: flex;
 align-items: center;
 flex-direction: row;
 justify-content: space-between;

 @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    
 }
`
const TextInfo = styled.div`
  width:48%;
  flex: 0 auto;
  opacity:1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding:0;
    
 }

  p{
    font-size:1.3rem;
    font-weight: 100;
    @media screen and (min-width: 375px) and (max-width: 550px){
      font-size: 1rem;
      line-height: 1rem;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top:1vh;
    }
  }
`
const ImageInfo = styled.div`
  width:48%;
  flex: 0 auto;
  opacity:1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px) {
    width: 100%;
    padding:0;
    
 }
  img{
    width:100%;
    max-width: 600px;
    height: auto;

    @media screen and (min-width: 500px) and (max-width: 1200px){
      width:100%;
      object-fit: contain;
      height: auto;
    }
    @media screen and (min-width: 280px) and (max-width: 500px){
      width:105%;
      object-fit: contain;
      height: 31vh;
    }
    @media screen and (min-width: 180px) and (max-width: 280px){
      width:110%;
      object-fit: contain;
      height: 31vh;
    }
  }

`



export default SecondSection