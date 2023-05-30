import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css';
import logo from './img/musikdin-logo.png';
import Body from './body';
import Header from './header';
import Footer from './footer';
import Pesquisa from './pesquisa';
import Formulario from './formulario';
import Cadastro from './cadastro';
import Login from './login';


export default function App() {
   window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position)
   )

   return (
      <>
         {/* header inicio */}
         <Header />
         {/* header fim */}

         <Body />

         {/* <Pesquisa /> */}

          <Cadastro /> 

         {/* <Login/> */}


         {/* footer inicio */}
         <Formulario/>
         <Footer />
         {/* footer fim */}

      </>
   )
}
ReactDOM.render(
   <App />,
   document.querySelector("#root")
)