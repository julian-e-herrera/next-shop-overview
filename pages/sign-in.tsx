import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Page from '@/components/Page'
import { fetchJson } from '@/lib/api'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'


const SignInPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState({ loading: false, error: false })
    const router = useRouter()



    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<any> {
        event.preventDefault();
        setStatus({ loading: true, error: false })


        try {
            const response = await fetchJson('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            setStatus({ loading: false, error: false })
            console.log(response);
            router.push('/');
        } catch (error) {
            setStatus({ loading: false, error: true })
        }

    }

    return (
        <Page title='Sign In'>
            <form onSubmit={handleSubmit}>
                <Label text={'Email'}>
                    <Input type={'email'} value={email} required handleChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} />
                </Label>
                <Label text={"Password"}>
                    <Input type={'password'} required value={password} handleChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} />
                </Label>
                {status.error && <p className='text-red-700'>Invalid credentials</p>}
                {status.loading ? (
                    <p className='text-green-700'>Loading...</p>
                ) : (
                    <Button type={'submit'}>Sign In</Button>
                )}

            </form>
        </Page>
    )
}

export default SignInPage