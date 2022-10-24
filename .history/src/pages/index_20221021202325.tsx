import Table from '../components/Table';
import Layout from '../components/Layout';
import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Client from '../core/Cliente';
import Button from '../components/Button';
import ClientRepository from '../core/ClientRepository';
import CollectionClient from '../backend/database/collectionClient';

export default function Home() {

  const repository: ClientRepository = new CollectionClient();
  const [visible, setVisible] = useState<'table' | 'form'>('table');
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const clientes  = []

  useEffect(() => {
    repository.selectAll().then(setClients);
  }, [])

  function selectedClient(cliente: Client) {
    setClient(cliente);
    setVisible('form');
  }

  function deletedClient(cliente: Client) {
    console.log('Excluindo: ', cliente.userName);
  }

  function saveClient(client: Client) {
    setVisible('table');
    console.log(client);
  }

  function newClient() {
    setClient(Client.empty());
    setVisible('form');
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro'>
        {visible === 'table' ? (
          <>
          <div className='flex justify-end'>
            <Button className='mb-4 bg-green-400' onClick={newClient}>Novo cliente</Button>
          </div>
          <Table clientes={clientes} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
        </>
        ) : (  
          <Form client={client} cancel={() => setVisible('table')} onChangeClient={saveClient} />
        )}
        
      </Layout>
    </div>
  )
}
