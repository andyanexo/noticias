import React, { Component } from "react";

class Formulario extends Component {
  state = {
    categoria: "general",
    pais: "ar"
  };

  actualizarCategoria = event => {
    this.setState({ categoria: event.target.value }, () => {
      //Pasarlo  a pantalla principal
      const { categoria, pais } = this.state;
      this.props.consultarNoticias(categoria, pais);
    });
  };

  actualizarPais = event => {
    this.setState({ pais: event.target.value }, () => {
      //Pasarlo  a pantalla principal
      const { categoria, pais } = this.state;
      this.props.consultarNoticias(categoria, pais);
    });
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Buscar por Categoría</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.actualizarCategoria}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
          </form>
          <form>
            <h2>Buscar por Pais</h2>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.actualizarPais}>
                <option value="ar">Argentina</option>
                <option value="br">Brasil</option>
                <option value="ch">China</option>
                <option value="co">Colombia</option>
                <option value="us">Estados Unidos</option>
                <option value="mx">Mexico</option>
                <option value="ve">Venezuela</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Formulario;
