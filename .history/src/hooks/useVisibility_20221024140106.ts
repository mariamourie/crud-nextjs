import { useState } from "react";

export default function useVisibility() {
    const [visible, setVisible] = useState<'table' | 'form'>('table');
}