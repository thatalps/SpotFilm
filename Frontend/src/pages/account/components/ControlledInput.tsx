import { Input } from '@/components/ui/input.tsx'
import { HTMLInputTypeAttribute } from 'react'
import {
  Control,
  Controller,
  FieldPathValue,
  FieldValues,
} from 'react-hook-form'
import { TSignup } from '@/pages/account/Signup.tsx'

interface IControlledInput {
  id: string
  placeholder: string
  label: string
  type: HTMLInputTypeAttribute
  control: Control<FieldValues>
  errorMessage: string | undefined
}
export function ControlledInput({
  id,
  placeholder,
  label,
  type,
  control,
  errorMessage,
}: IControlledInput) {
  return (
    <>
      <Controller
        control={control}
        name={id as FieldPathValue<TSignup, TSignup>}
        render={({ field: { ref, onChange, onBlur, value } }) => {
          return (
            <div className={'w-full mb-3'}>
              <label htmlFor={id} className={'flex items-start mb-1'}>
                {label}
              </label>
              <Input
                id={id}
                placeholder={placeholder}
                className={'bg-gray-100 border-gray-100 focus:border-gray-300 '}
                type={type}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
              {errorMessage !== undefined && (
                <div className={'text-red-600'}>{errorMessage}</div>
              )}
            </div>
          )
        }}
      />
    </>
  )
}
