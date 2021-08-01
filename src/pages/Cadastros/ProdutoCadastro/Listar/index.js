import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const db = firebase.firestore();

        const produtosRef = db.collection('produtos');

        const results = await produtosRef.get();

        const data = results.docs.map((item) => item.data());

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadProducts();
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'nome' },
          { title: 'Valor', field: 'valor' },
        ]}
        data={products}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Produto',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/produto`),
          },
        ]}
        localization={{
          toolbar: {
            searchPlaceholder: 'Pesquisar',
          },
          header: {
            actions: 'Ações',
          },
        }}
        options={{
          actionsColumnIndex: -1,
          pageSize: 10,
        }}
        title="Produtos"
      />
    </div>
  );
};

export default List;
