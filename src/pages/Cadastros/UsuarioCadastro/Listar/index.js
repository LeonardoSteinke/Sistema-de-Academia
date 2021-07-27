import React, { useEffect } from "react";

import MaterialTable from "material-table";

import { useHistory } from "react-router-dom";

const List = () => {
  const history = useHistory();

  const [user, setUser] = React.useState([]);

  useEffect(() => {
    //search from firebase
    setUser([
      {
        name: "Leonardo",
        email: "leo@gmail.com",
        enrollment: "123",
      },
    ]);
  }, []);

  return (
    <div style={{ minWidth: "100%" }}>
      <MaterialTable
        columns={[
          { title: "Nome", field: "name" },
          { title: "E-mail", field: "email" },
          { title: "Matrícula", field: "enrollment" },
        ]}
        data={user}
        actions={[
          {
            icon: "add",
            tooltip: "Adicionar Usuário",
            isFreeAction: true,
            onClick: () => history.push(`/cadastro/usuario`),
          },
        ]}
        localization={{
          toolbar: {
            searchPlaceholder: "Pesquisar",
          },
          header: {
            actions: "Ações",
          },
        }}
        options={{
          actionsColumnIndex: -1,
          pageSize: 10,
        }}
        title="Usuário"
      />
    </div>
  );
};

export default List;
