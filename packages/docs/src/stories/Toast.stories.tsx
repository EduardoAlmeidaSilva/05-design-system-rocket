import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Text } from '@ignite-ui/react'
import { X } from 'phosphor-react'

export default {
    title: 'Form/Toast',
    component: Toast,
    args: {
        children: <>
            <Text>Componet Toast</Text>
            <X size={24} />
        </>
    },
    argTypes: {
        children: {
            control: {
                type: null,

            },
        },
    },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}