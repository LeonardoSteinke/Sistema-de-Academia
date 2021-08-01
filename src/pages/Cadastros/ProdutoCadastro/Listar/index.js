import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    // search from firebase
    setProducts([
      {
        name: 'Leonardo',
        email: 'leo@gmail.com',
        enrollment: '123',
      },
    ]);
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'E-mail', field: 'email' },
          { title: 'Matrícula', field: 'enrollment' },
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
