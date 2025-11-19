import { componentWrapperDecorator, type Meta, type StoryObj } from '@storybook/angular';
import { WaveDivider } from './wave-divider';

const meta: Meta<WaveDivider> = {
  title: 'Shared/WaveDivider',
  component: WaveDivider,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator((story) => `
        <div class="bg-primary p-8 relative">
          <div class="text-primary-content mb-8">
            <h2 class="text-2xl font-bold mb-4">Section Above Wave</h2>
            <p>This wave divider creates a smooth transition between sections.</p>
          </div>
          ${story}
        </div>
        
        <div class="bg-base-100 p-8">
          <h2 class="text-2xl font-bold mb-4">Section Below Wave</h2>
          <p>The wave seamlessly connects the primary section above with this base section.</p>
        </div>
      `
    ),
  ],
};

export default meta;
type Story = StoryObj<WaveDivider>;

export const Default: Story = {};
