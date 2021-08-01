import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Grid from '@material-ui/core/Grid';

import ProductForm from '../components/ProductForm';
import Container from '../../../../components/Container';
import firebase from '../../../../api/firebase';

const CreateProduct = () => {
  const { goBack } = useHistory();

  const handleCreateProduct = useCallback(
    async ({ name, value }) => {
      const db = firebase.firestore();

      const productId = uuid();

      await db.collection('produtos').doc(productId).set({
        nome: name,
        valor: value,
      });

      goBack();
    },
    [goBack]
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
