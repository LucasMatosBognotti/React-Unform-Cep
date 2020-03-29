import React, { useState } from 'react';
import { Form } from '@unform/web'

import api from './services/api';

import Input from './components/Input/index';

import { Container } from './styles/styles';
import GlobalStyles from './styles/global';

export default function App() {
  const [cep, setCep ] = useState([]);

  async function handleSubmit(data, { reset }) {

    const response = await api.get(`${data.cep}/json`);

    setCep(response.data);

    reset();
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} >
          <Input name="cep" type="number" placeholder="Digite seu CEP" />
        </Form>
        { cep.cep ? 
        <ul>
          <li><span>cep</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.cep}</span></li>
          <li><span>logradouro</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.logradouro}</span></li>
          <li><span>complemento</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.complemento}</span></li>
          <li><span>bairro</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.bairro}</span></li>
          <li><span>localidade</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.localidade}</span></li>
          <li><span>uf</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.uf}</span></li>
          <li><span>unidade</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.unidade}</span></li>
          <li><span>ibge</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.ibge}</span></li>
          <li><span>gia</span><strong>:</strong> <span style={{ color: '#F1FA8C' }}>{cep.gia}</span></li>
        </ul>
        : null}
      </Container>
      <GlobalStyles />
    </>
  );
}
