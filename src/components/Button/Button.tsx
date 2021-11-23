import React, { ReactNode } from 'react'
import * as S from './Button.styles'

export enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

type Props = {
  type: ButtonTypes | undefined
  children: ReactNode
}

export default function Button({ children, ...props }: Props) {
  return (
    <>
      <S.Container {...props}>{children}</S.Container>
    </>
  )
}