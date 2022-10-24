import Client from "../core/Cliente";
import { useState } from "react";
import CollectionClient from "../backend/database/CollectionClient";
import { useEffect } from "react";
import ClientRepository from "../core/ClientRepository";

export default function useClients() {

    const repository: ClientRepository = new CollectionClient();
    const [visible, setVisible] = useState<'table' | 'form'>('table');
    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(selectAll, []);

    function selectAll() {
        repository.selectAll().then(clients => {
        setClients(clients);
        setVisible('table');
        })
    }

    function selectedClient(cliente: Client) {
        setClient(cliente);
        setVisible('form');
    }

    async function deletedClient(cliente: Client) {
        await repository.delete(cliente);
        selectAll();
    }

    async function saveClient(client: Client) {
        await repository.save(client);
        selectAll();
    }

    function newClient() {
        setClient(Client.empty());
        setVisible('form');
    }
}