import { ElementType, ComponentProps } from 'react'
import { styled } from '../styles'

export const Tooltip = styled('div', {
    padding: '$4',
    borderRadius: '$md',
    backgroundColor: '$gray800',
    fontSize: '$md',
    fontWeight: '$medium',
    fontFamily: '$default',
    width: 140,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$white",
    position: "absolute",

})

export interface TooltipProps extends ComponentProps<typeof Tooltip> {
    as?: ElementType
}

Tooltip.displayName = 'Tooltip'