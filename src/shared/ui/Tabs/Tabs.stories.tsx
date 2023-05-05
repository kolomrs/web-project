import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    tabs: [
        {
            value: 'tab1',
            content: 'tab1',
        },
        {
            value: 'tab2',
            content: 'tab2',
        },
        {
            value: 'tab3',
            content: 'tab3',
        },
    ],
    value: 'tab2',
    onTabClick: action('onTabClick'),
};
