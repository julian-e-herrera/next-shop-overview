import React from 'react'
import Link from 'next/link'
import { useUser, useSignOut } from '@/hooks/user';



const Navbar = () => {

    const user = useUser();
    const signOut = useSignOut();


    return (
        <nav className='px-2 py-1 text-sm '>
            <ul className='flex gap-2'>
                <li className='text-lg font-extrabold'>
                    <Link href='/'>
                        Next Shop
                    </Link>
                </li>
                <li role='separator' className='flex-1'></li>
                {user ? (
                    <>
                        <li><Link href={'/cart'}>Cart</Link></li>
                        <li>{user.name}</li>
                        <li>
                            <button onClick={signOut}>
                                Sign Out
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link href='/sign-in'>
                            Sign In
                        </Link>
                    </li>
                )}

            </ul>
        </nav>
    )
}

export default Navbar