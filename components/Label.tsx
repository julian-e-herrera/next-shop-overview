import React, { FC, ReactNode } from 'react'


interface Props {
    text: string,
    children?: ReactNode

}
const Label: FC<Props> = ({ text, children }) => {
    return (
        <label className='block my-2'>
            <span className='block text-sm text-gray-600 w-80'>{text}</span>
            {children}
        </label>
    )
}

export default Label