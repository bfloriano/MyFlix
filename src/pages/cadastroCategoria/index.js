import React, { useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const startValues = {
    name: "teste",
    description: "resre",
    color: "#000",
  };

  const [values, setValues] = useState(startValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const change = (info) => {
    setValue(info.target.getAttribute("name"), info.target.value);
  };

  return (
    <PageDefault>
      <h1>Cadastro de Categorias: {values.name}</h1>

      <form
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={values.name}
              name="name"
              onChange={change}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={change}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.color}
              name="color"
              onChange={change}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={indice}>{categoria.name}</li>;
        })}
      </ul>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
