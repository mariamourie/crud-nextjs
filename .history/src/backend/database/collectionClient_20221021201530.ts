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
        if(client?.userId) {
            await this.collection().doc(client.userId).set(client);
            return client;
        } else {
            const docRef = await this.collection().add(client);
            const doc = await docRef.get();
            return doc.data();
        }
    }
    async delete(client: Client): Promise<void> {
        return this.collection().doc(client.userId).delete()
    }
    async selectAll() : Promise<void> {
        return null   
    }
    private collection() {
        return firebase.firestore().collection('clientes').withConverter(this.conversor)
    }
}