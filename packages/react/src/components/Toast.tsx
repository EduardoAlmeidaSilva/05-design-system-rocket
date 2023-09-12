import { ElementType, ComponentProps } from 'react'
import { styled } from '../styles'

export const Toast = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    fontSize: '$md',
    fontWeight: '$medium',
    fontFamily: '$default',
    width: 180,
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    color: "$white",



})

export interface ToastProps extends ComponentProps<typeof Toast> {
    as?: ElementType
}

Toast.displayName = 'Toast'