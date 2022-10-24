import Client from "../../core/Cliente";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    async save(client: Client) : Promise<Client> {
        return null
    }
    async delete(client: Client): Promise<Client> {
        return null   
    }
    async select() : Promise<Client[]> {
        return null
    }
    
}