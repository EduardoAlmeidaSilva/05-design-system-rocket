import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps, Text } from '@ignite-ui/react'

export default {
    title: 'Form/Tooltip',
    component: Tooltip,
    args: {
        children: <Text>Componet Tooltip</Text>
    },
    argTypes: {
        children: {
            control: {
                type: null,

            },
        },
    },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}