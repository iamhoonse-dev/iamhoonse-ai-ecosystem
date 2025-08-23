import type { Meta, StoryObj } from "@storybook/react-vite";
import { ShadcnButton } from "@repo/react-ui/base";

const meta = {
  title: "on-storybook/base/Button",
  component: ShadcnButton,
  tags: ["autodocs"],
} satisfies Meta<typeof ShadcnButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I am a primary button.",
  },
};
