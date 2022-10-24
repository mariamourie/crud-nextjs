import Client from "../core/Cliente"
import { IconEdit, IconTrash } from "./Icons"

interface TableProps {
    clientes: Client[]
    selectedClient?: (cliente: Client) => void
    deletedClient?: (cliente: Client) => void
}

export default function Table(props) {
    const showActions = props.selectedClient || props.deletedClient;
    function handleHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { showActions ? <th className="text-center p-4">Ações</th> : false}
            </tr>
        )
    }
    function handleActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.selectedClient ? (
                    <button className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`} onClick={() => props.selectedClient?.(client)}> {IconEdit}</button>
                ) : false}
                {props.deletedClient ? (
                    <button className={`flex justify-center items-center text-red-600 rounded-full p-2 m-1 hover:bg-purple-50`} onClick={() => props.deletedClient?.(client)}>{IconTrash}</button>
                ) : false}
            </td>
        )
    }
    function handleData() {
        return props.clientes?.map((client, i) => {
            return (
                <tr key={client.id} className={`${ i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions ?  handleActions(client) : false}
                </tr>
            )
        })
        // Só funciona quando não é nulo
    }
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from bg-purple-500 to-purple-800
                text-gray-100
            `}>
                {handleHeader()}
            </thead>
            <tbody>
                {handleData()}
            </tbody>
            
        </table>
    )
}