import { useState } from "react";

export default function useVisibility() {
    const [visible, setVisible] = useState<'table' | 'form'>('table');

    const displayTable = () => setVisible('table')
    const displayForm = () => setVisible('form')

    return {
        formVisibility: visible === 'form',
        tableVisibility: visible === 'table',
        displayTable,
        displayForm
    }
}