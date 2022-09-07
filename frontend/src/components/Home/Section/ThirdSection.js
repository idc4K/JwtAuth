import React from 'react';
import styled from 'styled-components';
import chaka from '../../image/chaka.jpg';
function ThirdSection() {
  return (
    <>
        <Section>
            <Container>
                <Content>
                    <h1 className='farafina-title'>Farafina</h1>
                    <h1 className='farafina-title'>Movie</h1>
                    <li>sed do eiusmod</li>
                    <li>Lorem ipsum dolor</li>
                    <li>incididunt ut </li>
                    <li>consectetur adipiscing</li>
                </Content>
            </Container>
        </Section>
    </>
  )

}
const Section = styled.section`
  background-image: radial-gradient(rgba(0, 0, 0, 0.616), rgba(10, 2, 2, 7)),url(${chaka});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height:75vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1200px){
    height: 65vh;

  }
  @media screen and (min-width: 280px) and (max-width: 767px){
    height: 59vh;
    
  }
`
const Container = styled.div`
  width:91%;
  margin: 0 auto;

  @media screen and (min-width: 280px) and (max-width: 991px){
    width:85%;

 }
`

const Content = styled.div`
    margin-top: 17vh;
    @media screen and (min-width: 280px) and (max-width: 1200px){
        margin-top: 13vh;

    }

    li{
        font-size:1rem;
        font-weight: 300;
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size:0.80rem;
           

        }
    }
    
`
export default ThirdSection