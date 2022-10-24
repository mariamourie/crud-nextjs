import Client from "../core/Cliente";
import { useState } from "react";
import CollectionClient from "../backend/database/CollectionClient";
import { useEffect } from "react";
import ClientRepository from "../core/ClientRepository";
import useVisibility from "./useVisibility";

export default function useClients() {

    const repository: ClientRepository = new CollectionClient();
    const {tableVisibility, formVisibility, displayForm, displayTable} = useVisibility();
    const [client, setClient] = useState<Client>(Client.empty());
    const [clients, setClients] = useState<Client[]>([]);

    useEffect(selectAll, []);

    function selectAll() {
        repository.selectAll().then(clients => {
        setClients(clients);
        displayTable();
        })
    }

    function selectedClient(cliente: Client) {
        setClient(cliente);
        displayForm();
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
        displayForm();
    }

    return {
        client, clients, saveClient, newClient, deletedClient, selectedClient, selectAll
    }
}