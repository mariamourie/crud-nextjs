import Client from "./Cliente";

export default interface ClientRepository {
    save(client: Client) : Promise<Client>
    delete(client: Client) : Promise<Client>
    selectAll() : Promise<Client[]>
}