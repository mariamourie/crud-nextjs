import { useState } from "react";
import Client from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client;
    onChangeClient?: (client: Client) => void;
    cancel?: () => void;
}

export default function Form(props: FormProps) {
    const id = props.client?.userId;
    const [name, setName] = useState(props.client?.userName ?? '');
    const [age, setAge] = useState(props.client?.userAge ?? 0);
    return (
        <div>
            {id ? (
                <Input label="Código" typeInput="text" value={id} className="mb-4"/>
            ) : false}
            <Input label="Nome" typeInput="text" value={name} readOnly={false} onChangeValue={setName} className="mb-4"/>
            <Input label="Idade" typeInput="number" value={age} readOnly={false} onChangeValue={setAge}/>
            <div className="flex justify-end mt-7">
                <Button className="bg-blue-400 mr-3" onClick={() => props.onChangeClient?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Button>
                <Button className="bg-gray-500" onClick={props.cancel}>
                    Cancelar
                </Button>
            </div>
        </div>
    )
}