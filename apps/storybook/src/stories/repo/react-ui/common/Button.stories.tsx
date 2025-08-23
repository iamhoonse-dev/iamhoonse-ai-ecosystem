import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@repo/react-ui/common";

const meta = {
  title: "on-storybook/common/Button",
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
