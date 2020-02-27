import React from "react";
import Noticia from "../Noticia/Noticia";

const listaNoticias = props => (
  <div className="row">
    {props.noticias.map(noticia => {
      return <Noticia key={noticia.url} noticia={noticia} />;
    })}
  </div>
);

export default listaNoticias;
