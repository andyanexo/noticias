import React, { Component } from "react";
import Header from "./components/Header/Header";
import ListaNoticias from "./components/ListaNoticias/ListaNoticias";
import Formulario from "./components/Formulario/Formulario";

class App extends Component {
  state = { noticias: [] };
  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async () => {
    const url = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e7bba0160b5547f797e8d474e991e475`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({ noticias: noticias.articles });
    console.log(this.state.noticias);
  };

  render() {
    return (
      <div>
        <Header titulo="Noticias API"></Header>
        <div className="container white contenedor-noticias">
          <Formulario />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
