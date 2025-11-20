import type { Meta, StoryObj } from '@storybook/angular';
import { ArticleAuthorBio } from './article-author-bio';
import { BlogArticleAuthor } from '../../../domain/types/blog.entities';

const mockAuthor: BlogArticleAuthor = {
  authorName: 'Marie Dupont',
  authorPic: 'https://i.postimg.cc/Y0dvxT2n/465190803-1063951018859068-3320607388455320261-n.jpg',
  authorDescription:
    "Auteure passionnée depuis plus de 10 ans, Marie accompagne les écrivains dans leur parcours d'auto-édition. Elle a publié plusieurs guides pratiques et anime des ateliers d'écriture.",
  authorLink: 'https://example.com/auteurs/marie-dupont',
  authorTitle: 'Auteure et Coach en Écriture',
};

const meta: Meta<ArticleAuthorBio> = {
  title: 'Blog/ArticleAuthorBio',
  component: ArticleAuthorBio,
  tags: ['autodocs'],
  argTypes: {
    author: {
      control: 'object',
      description: 'The blog article author information',
    },
  },
};

export default meta;
type Story = StoryObj<ArticleAuthorBio>;

export const Default: Story = {
  args: {
    author: mockAuthor,
  },
};
