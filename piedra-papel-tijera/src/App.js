import './App.css';
import Header from './header';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Table from './table';

const AppStyled =  styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
  
  background-image: radial-gradient(circle at top, #1F3757 20%, #111f43 100%); 
  min-height: 100vh;  
  padding: 2em 0;
  color: white; 
  body{
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  
` 


function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
