import Client from "../../core/Cliente";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    conversor = {
        toFirestore(client: Client) {
            
        }
    }
    async save(client: Client) : Promise<Client> {
        return null
    }
    async delete(client: Client): Promise<Client> {
        return null   
    }
    async selectAll() : Promise<Client[]> {
        return null
    }
    
}