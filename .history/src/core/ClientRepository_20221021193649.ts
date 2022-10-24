export default interface ClientRepository {
    save(client: Client) : Promise<Client>
}