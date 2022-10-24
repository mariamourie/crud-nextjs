import Client from "./Cliente";

export default interface ClientRepository {
    saveClient(client: Client) : Promise<Client>
    deletedClient(client: Client) : Promise<Client>
}