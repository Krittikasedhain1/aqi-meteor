// Search.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import Search from ".";
import "../../app/globals.css";

export default {
  title: "Search",
  component: Search,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta;

const Template: Story = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {};
