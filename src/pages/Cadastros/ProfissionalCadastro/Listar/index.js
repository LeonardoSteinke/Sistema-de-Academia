import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [professional, setProfessional] = React.useState([]);

  useEffect(() => {
    // search from firebase
    setProfessional([
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
        data={professional}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar profissional',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/profissional`),
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
        title="Profissionais"
      />
    </div>
  );
};

export default List;
