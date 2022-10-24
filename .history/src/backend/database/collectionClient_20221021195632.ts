import Client from "../../core/Cliente";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    conversor = {
        toFirestore(client: Client) {
            return {
                name: client.userName,
                age: client.userAge,
                id: client.userId
            }
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