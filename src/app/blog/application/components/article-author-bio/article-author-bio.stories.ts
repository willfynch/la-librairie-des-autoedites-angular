import type { Meta, StoryObj } from '@storybook/angular';
import { ArticleAuthorBio } from './article-author-bio';
import { BlogArticle } from '../../../domain/types/blog.entities';

const mockArticle: BlogArticle = {
  slug: 'comment-publier-votre-premier-livre',
  title: 'Comment publier votre premier livre en auto-édition',
  content:
    "L'auto-édition est devenue une option populaire pour les auteurs qui souhaitent garder le contrôle créatif et commercial de leurs œuvres.",
  tags: ['auto-édition', 'écriture', 'publication'],
  cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
  date: '2024-01-15',
  author: {
    authorName: 'Marie Dupont',
    authorPic: 'https://i.postimg.cc/Y0dvxT2n/465190803-1063951018859068-3320607388455320261-n.jpg',
    authorDescription:
      "Auteure passionnée depuis plus de 10 ans, Marie accompagne les écrivains dans leur parcours d'auto-édition. Elle a publié plusieurs guides pratiques et anime des ateliers d'écriture.",
    authorLink: 'https://example.com/auteurs/marie-dupont',
    authorTitle: 'Auteure et Coach en Écriture',
  },
  category: 'auto-édition',
};

const meta: Meta<ArticleAuthorBio> = {
  title: 'Blog/ArticleAuthorBio',
  component: ArticleAuthorBio,
  tags: ['autodocs'],
  argTypes: {
    blogArticle: {
      control: 'object',
      description: 'The blog article containing author information',
    },
  },
};

export default meta;
type Story = StoryObj<ArticleAuthorBio>;

export const Default: Story = {
  args: {
    blogArticle: mockArticle,
  },
};
