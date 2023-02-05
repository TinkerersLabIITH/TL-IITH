import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
}
html {
  overflow-x: hidden;
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}


h1{
  color:${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}

h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
   text-align: center;
  }

  h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: .7;
  font-size: 1.65rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 3.5rem;
  padding-bottom: 7rem;
}

.grid-one-column {
  padding: 15px 320px;
  padding-bottom: 2rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 3rem;
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 3rem;
}

.grid-four-column{
  grid-template-columns: repeat(4,1fr) ;
  padding-bottom: 3rem;
}

.grid-five-column{
  grid-template-columns: 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr ;
  padding-bottom: 3rem;
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

  .title {
      font-size: 2.8rem;
      font-weight: 500;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

    input, textarea{
    max-width: 50rem;
    border-radius: 15px;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  }
  input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
  }
  
  
  @media (max-width:${({ theme }) => theme.media.tab}) {
    .container{
      padding: 0 3.2rem;
    }
    
    .grid-one-column{
      padding-top: 1rem;
      padding-bottom: 3rem;
      /* padding: 0rem; */
    }
      .grid-three-column {
      grid-template-columns: 1fr 1fr;
      padding-bottom: 3rem;
    }

      .grid-four-column {
      grid-template-columns: 1fr 1fr 1fr;
      padding-bottom: 3rem;
    }
  }
  
  @media (max-width:${({ theme }) => theme.media.mobile}) {
    
    html{
      font-size: 50%;
    }
    
    .grid{
      gap: 3.2rem;
      padding-bottom: 3rem;
    }

    .grid-one-column{
      padding-top: 1rem;
      padding-bottom: 2rem;
      padding: 15px 2rem;
    }
    
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: repeat(2,1fr);
      padding-bottom: 3rem;
      }
}

  @media (max-width:${({ theme }) => theme.media.mobileMini}) {
    
    html{
      font-size: 50%;
    }
    
    .grid{
      gap: 3.2rem;
      padding-bottom: 3rem;
    }
    
    .grid-one-column{
      padding-top: 1rem;
      padding-bottom: 2rem;
      padding: 15px 2rem;
    }
    
    .grid-two-column, .grid-three-column, .grid-four-column{
      grid-template-columns: repeat(1,1fr);
      padding-bottom: 3rem;
    }
    
    .common-heading {
        font-size: 3.2rem;
      }
}


`;
