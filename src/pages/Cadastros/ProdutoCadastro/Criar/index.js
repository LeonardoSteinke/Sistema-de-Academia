import React, { useCallback } from 'react';

import Grid from '@material-ui/core/Grid';

import ProductForm from '../components/ProductForm';
import Container from '../../../../components/Container';

const CreateProduct = () => {
  const handleCreateProduct = useCallback(
    async ({ name, email, enrollment }) => {
      alert(`Enviar para Firebase ${name} ${email} ${enrollment}`);
    },
    []
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ProductForm
            title="Cadastrar Produto"
            actionTitle="Criar"
            handleForm={handleCreateProduct}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateProduct;
