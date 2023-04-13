import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Page from '@/components/Page'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useSignIn } from '@/hooks/user'


const SignInPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { signInError, signInLoading, signIn } = useSignIn()


    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<any> {
        event.preventDefault();

        const valid = await signIn(email, password);
        if (valid) { router.push('/'); }


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
                {signInError && <p className='text-red-700'>Invalid credentials</p>}
                {signInLoading ? (
                    <p className='text-green-700'>Loading...</p>
                ) : (
                    <Button type={'submit'}>Sign In</Button>
                )}

            </form>
        </Page>
    )
}

export default SignInPage