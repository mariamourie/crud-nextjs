import firebase from "../config";
import Client from "../../core/Cliente";
import ClientRepository from "../../core/ClientRepository";

export default class CollectionClient implements ClientRepository {
    private conversor = {
        toFirestore(client: Client) {
            return {
                name: client.userName,
                age: client.userAge,
                id: client.userId
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
          const data = snapshot.data(options);
          return new Client(data.name, data.age, snapshot?.id)
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
    private collecton() {
        return firebase.firestore().collection('clientes').withConverter(this.conversor);
    }
}