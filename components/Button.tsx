import React, { FC, ReactNode } from 'react'


interface Props {
    children: ReactNode,
    type: "button" | "submit" | "reset"
}

const Button: FC<Props> = ({ children, type }) => {
    return (
        <button className='bg-green-800 rounded text-gray-100 px-4 py-2 my-2 hover:bg-green-700' type={type}>{children}</button>
    )
}

export default Button