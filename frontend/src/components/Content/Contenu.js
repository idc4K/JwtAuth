import React from 'react';
import SlideFirst from './Slide/SlideFirst';
import '../Styles/Content.css';
import styled from 'styled-components';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Home/NavBar/Navbar';
function Contenu() {
  return (
    <>
    <Navbar/>
    <Container>
        <SlideFirst/>
    </Container>
    <Footer/>
     
    </>
  )
}
const Container = styled.main`
  position: relative;
  height: calc(120vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  display: block;
  overflow: hidden;


`
export default Contenu