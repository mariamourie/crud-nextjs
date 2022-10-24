interface InputProps {
    label: string
    typeInput: 'text' | 'number'
    value: any
    readOnly?: boolean
    onChangeValue?: (value: any) => void
    className?: string
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2"> {props.label} </label>
            <input type={props.typeInput ?? 'text'} value={props.value} readOnly={props.readOnly} onChange={e => props.onChangeValue?.(e.target.value)} className={`
                border border-purple-500 rounded-lg px-4  py-2 mt-2 bg-gray-100 w-full focus:outline-none ${props.readOnly ? '' : 'focus:bg-white'}
            `} />
        </div>
    )
}