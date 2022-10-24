import Client from "./Cliente";

export default interface ClientRepository {
    save(client: Client) : Promise<Client>
    delete(client: Client) : Promise<void>
    selectAll(client: Client) : Promise<void>
}