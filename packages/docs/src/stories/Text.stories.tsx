import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non, iure a voluptate voluptatibus sint, dolorem eveniet mollitia hic qui neque officia architecto quibusdam sequi eos laboriosam provident distinctio atque?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustonTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
