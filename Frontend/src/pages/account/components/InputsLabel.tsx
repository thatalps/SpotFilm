import { Input } from '@/components/ui/input.tsx'
import { HTMLInputTypeAttribute } from 'react'

interface IInputsLabel {
  id: string
  placeholder: string
  label: string
  type: HTMLInputTypeAttribute
}

export function InputsLabel({ id, placeholder, label, type }: IInputsLabel) {
  return (
    <>
      <label htmlFor={id} className={'flex items-start'}>
        {label}
      </label>
      <Input
        id={id}
        placeholder={placeholder}
        className={'bg-gray-100 border-gray-100 focus:border-gray-300'}
        type={type}
      />
    </>
  )
}
//
