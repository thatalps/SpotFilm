import { apiAxios } from '../../../axios.config.ts'
import { TSignup } from '@/types/types.tsx'

export async function signupUser(data: TSignup) {
  const response = await apiAxios.post('usuarios/cadastro', {
    nome: data.name,
    email: data.email,
    senha: data.password,
    dataNascimento: data.birthDate,
    generoPreferido1: data.favGenre1,
    generoPreferido2: data.favGenre2,
  })

  if (response.status === 409) throw new Error('Email já está em uso')

  if (response.status === 500) throw new Error('Problemas no servidor')
}
