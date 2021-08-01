import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [time, setTime] = React.useState([]);

  useEffect(() => {
    // search from firebase
    setTime([
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
        data={time}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Horários',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/horario`),
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
        title="Horários"
      />
    </div>
  );
};

export default List;
