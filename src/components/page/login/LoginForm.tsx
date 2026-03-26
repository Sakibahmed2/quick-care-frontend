/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { baseApi } from '@/api/ApiBase'
import QuickForm from '@/components/form/QuickForm'
import QuickInput from '@/components/form/QuickInput'
import { cn } from '@/lib/utils'
import authStore from '@/store/authStore'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import z from 'zod'



const defaultValue = {
  email: '',
  password: ''
}


const formValidation = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setAuthToken } = authStore()


  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading('Logging in...')
    try {

      const response = await baseApi.post('/auth', data)

      if (response.statusText == 'OK') {
        setAuthToken(response.data.data.accessToken)
        toast.success('Login successful', { id: toastId })
      }

    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Something went wrong', { id: toastId })
    }
  }


  return (
    <QuickForm onSubmit={onSubmit} defaultValues={defaultValue} resolver={zodResolver(formValidation)} className='flex flex-col gap-4 '>
      <QuickInput name='email' label='Email' placeholder='Enter your email' />


      <div className='relative'>
        <QuickInput name='password' label='Password' placeholder='Enter your password' type={isPasswordVisible ? 'text' : 'password'} />
        <span
          className={cn(
            "cursor-pointer absolute top-8 right-3",
            isPasswordVisible ? "text-gray-600" : "text-gray-400"
          )}
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? <Eye size={22} /> : <EyeOff size={22} />}
        </span>
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-2 rounded-md mt-2"
      >
        Login
      </button>
    </QuickForm>
  )
}

export default LoginForm