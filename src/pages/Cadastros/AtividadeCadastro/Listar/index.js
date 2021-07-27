import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [activity, setActivity] = React.useState([]);

  useEffect(() => {
    //search from firebase
    setActivity([{
      name: "Leonardo",
      email: "leo@gmail.com",
      enrollment: "123"
    }])
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'E-mail', field: 'email' },
          { title: 'Matrícula', field: 'enrollment' },
        ]}
        data={activity}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Atividade',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/atividade`),
          }
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
        title="Atividades"
      />
    </div>
  );
};

export default List;