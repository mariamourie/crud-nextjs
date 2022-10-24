import Table from '../components/Table';
import Layout from '../components/Layout';
import Form from '../components/Form';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Client from '../core/Cliente';
import Button from '../components/Button';
import ClientRepository from '../core/ClientRepository';
import CollectionClient from '../backend/database/CollectionClient';
import useClients from '../hooks/useClients';

export default function Home() {

  const { client, clients, tableVisibility, displayTable, newClient, 
   saveClient, selectedClient, deletedClient, selectAll } = useClients();

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title='Cadastro'>
        {tableVisibility ? (
          <>
          <div className='flex justify-end'>
            <Button className='mb-4 bg-green-400' onClick={newClient}>Novo cliente</Button>
          </div>
          <Table clientes={clients} selectedClient={selectedClient} deletedClient={deletedClient}></Table>
        </>
        ) : (  
          <Form client={client} cancel={displayTable} onChangeClient={saveClient} />
        )}
        
      </Layout>
    </div>
  )
}
