import React, { ChangeEvent, FC } from 'react'


interface Props {
    type: string,
    value: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
    required: boolean
}
const Input: FC<Props> = ({ type, value, handleChange, required }) => {

    return (
        <input className='border rounded px-3 py-1' type={type} value={value} required={required} onChange={handleChange} />
    )
}

export default Input