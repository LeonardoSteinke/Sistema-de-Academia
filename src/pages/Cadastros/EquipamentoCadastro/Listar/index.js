import React, { useEffect } from 'react';

import MaterialTable from 'material-table';

import { useHistory } from 'react-router-dom';
import firebase from '../../../../api/firebase';

const List = () => {
  const history = useHistory();

  const [equipment, setEquipment] = React.useState([]);

  useEffect(() => {
    async function loadEquipments() {
      try {
        const db = firebase.firestore();

        const atividadesRef = db.collection('equipamentos');

        const results = await atividadesRef.get();

        const data = results.docs.map((item) => item.data());

        setEquipment(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadEquipments();
  }, []);

  return (
    <div style={{ minWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'Nome', field: 'nome' },
          { title: 'Quantidade', field: 'quantidade' },
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
