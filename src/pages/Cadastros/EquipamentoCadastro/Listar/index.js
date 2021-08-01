import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [equipment, setEquipment] = React.useState([]);

  useEffect(() => {
    // search from firebase
    setEquipment([
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
        data={equipment}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar equipamento',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/equipamento`),
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
        title="Equipamentos"
      />
    </div>
  );
};

export default List;
