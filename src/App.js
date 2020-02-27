import React, { Component } from "react";
import Header from "./components/Header/Header";
import ListaNoticias from "./components/ListaNoticias/ListaNoticias";
import Formulario from "./components/Formulario/Formulario";

class App extends Component {
  state = { noticias: [] };
  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = "general", pais = "ar") => {
    const url = `http://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=e7bba0160b5547f797e8d474e991e475`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();
    this.setState({ noticias: noticias.articles });
    console.log(this.state.noticias);
  };

  render() {
    return (
      <div>
        <Header titulo="Noticias ADCH Consumendo API"></Header>
        <div className="container white contenedor-noticias">
          <Formulario consultarNoticias={this.consultarNoticias} />
          <ListaNoticias noticias={this.state.noticias} />
        </div>
      </div>
    );
  }
}

export default App;
