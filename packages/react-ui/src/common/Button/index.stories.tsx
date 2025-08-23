import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from ".";

const meta = {
  title: "react-ui/common/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I am a primary button.",
  },
};
