import React from 'react';
import styled from 'styled-components';
import grid from '../../image/im.png';

function FourthSection() {
  return (
    <>
      <Title>
                <h1>Stream Exclusive Farafina Originals</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
      </Title>
      <Section>
        <Container>
            
            {/* <GridImg>
                <Image><img src={grid}/></Image>
            </GridImg> */}
        </Container>
      </Section>
    </>
  )
}
const Section = styled.section`
  background: url(${grid});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:75vh;
  padding: 5vh 0;
  position:relative;
  /* margin-top: 10vh; */

`
const Container = styled.div`
    width:95%;
    margin:0 auto;
`
const Title = styled.div`
    text-align: center;
    margin-top: 10vh;
    margin-bottom:4vh;

    p{
        font-size: 1rem;
        @media screen and (max-with:550px){
            font-size: .8rem;
        }
    }

`
// const GridImg = styled.div``
// const Image = styled.div`
//   img{background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
//   height:75vh;} 
// `

export default FourthSection