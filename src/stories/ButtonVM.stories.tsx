import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonVM from "../components/Buttons/ButtonVM"

export default {
  title: 'Example/ButtonVM',
  component: ButtonVM,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonVM>;

const Template: ComponentStory<typeof ButtonVM> = (args:any) => <ButtonVM {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  primary: "danger"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
