import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { ArticleCard } from './article-card';
import { BlogArticleModel } from '../../../domain/types/blog.entities';

const mockArticle: BlogArticleModel = {
  slug: 'comment-publier-votre-premier-livre',
  title: 'Comment publier votre premier livre en auto-édition',
  content:
    "L'auto-édition est devenue une option populaire pour les auteurs qui souhaitent garder le contrôle créatif et commercial de leurs œuvres. Dans cet article, nous explorons les étapes essentielles pour publier votre premier livre avec succès. De la finalisation du manuscrit à la promotion, découvrez comment naviguer dans le monde de l'auto-édition.",
  tags: ['auto-édition', 'écriture', 'publication'],
  cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
  date: '2024-01-15',
  author: {
    author_name: 'Marie Dupont',
    author_pic: 'https://i.pravatar.cc/150?img=5',
    author_description: 'Auteure et experte en auto-édition',
    author_link: '/auteurs/marie-dupont',
    author_title: 'Auteure',
  },
  category: 'auto-édition',
};

const meta: Meta<ArticleCard> = {
  title: 'Blog/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    article: {
      control: 'object',
      description: 'The blog article to display',
    },
  },
};

export default meta;
type Story = StoryObj<ArticleCard>;

export const Default: Story = {
  args: {
    article: mockArticle,
  },
};
