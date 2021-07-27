import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';

const List = () => {
  const history = useHistory();

  const [students, setStudents] = React.useState([{
    name: "Leonardo",
    email: "leo@gmail.com",
    enrollment: "123"
  }]);

  useEffect(() => {
    //search from firebase
    setStudents([])
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'name' },
          { title: 'E-mail', field: 'email' },
          { title: 'Matrícula', field: 'enrollment' },
        ]}
        data={students}
        actions={[
          {
            icon: 'add',
            tooltip: 'Adicionar Aluno',
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/aluno`),
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
        title="Alunos"
      />
    </div>
  );
};

export default List;