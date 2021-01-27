import React, { useState } from 'react';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import PageDefault from '../../components/PageDefault';
import './style.css';

function CadastroCategoria() {
  const startValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(startValues);

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const change = (info) => {
    setValue(info.target.getAttribute('name'), info.target.value);
  };

  return (
    <PageDefault className="pageCCategory">
      <form
        className="cCategory__form"
        onSubmit={function handleSubmit(info) {
          info.preventDefault();
          setCategorias([...categorias, values]);
          setValues(startValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={change}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={change}
        />
        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={change}
        />

        <Button className="cCategory__button">Cadastrar</Button>
      </form>
      <section className="containerCCategory">
        <h1 className="cCategory__title">
          Cadastro de Categorias:
          <br />
          {values.name}
        </h1>
        <ul className="listCategory">
          {categorias.map((categoria) => <li key={`${categoria.name}`}>{categoria.name}</li>)}
        </ul>
      </section>
    </PageDefault>
  );
}

export default CadastroCategoria;
