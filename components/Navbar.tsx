import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { fetchJson } from '@/lib/api';
import handleLogOut from '@/pages/api/logout';

type User = {
    name: string,
    id: number
}


const Navbar = () => {
    const [user, setUser] = useState<User>();


    useEffect(() => {
        (async () => {
            try {
                const userObj = await fetchJson('/api/user', { method: 'GET' });
                setUser(userObj);
            } catch (error) {

            }

        })();
    }, [])


    const handleSignOut = async () => {
        await fetchJson('/api/logout', {});
        setUser(undefined);
    }

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
                        <li>{user.name}</li>
                        <li>
                            <button onClick={handleSignOut}>
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