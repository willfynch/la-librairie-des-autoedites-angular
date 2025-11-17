import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, componentWrapperDecorator } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { ArticleHeader } from './article-header';
import { BlogArticleModel } from '../../../domain/types/blog.entities';

const mockArticle: BlogArticleModel = {
  slug: 'comment-publier-votre-premier-livre',
  title: 'Comment publier votre premier livre en auto-édition',
  content:
    "L'auto-édition est devenue une option populaire pour les auteurs qui souhaitent garder le contrôle créatif et commercial de leurs œuvres.",
  tags: ['auto-édition', 'écriture', 'publication'],
  cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
  date: '2024-01-15',
  author: {
    author_name: 'Marie Dupont',
    author_pic: 'https://i.pravatar.cc/150?img=5',
    author_description:
      "Auteure passionnée depuis plus de 10 ans, Marie accompagne les écrivains dans leur parcours d'auto-édition.",
    author_link: 'https://example.com/auteurs/marie-dupont',
    author_title: 'Auteure et Coach en Écriture',
  },
  category: 'auto-édition',
};

const meta: Meta<ArticleHeader> = {
  title: 'Blog/ArticleHeader',
  component: ArticleHeader,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    blogArticle: {
      control: 'object',
      description: 'The blog article to display in the header',
    },
  },
};

export default meta;
type Story = StoryObj<ArticleHeader>;

export const Default: Story = {
  args: {
    blogArticle: mockArticle,
  },
};

export const WithinArticlePage: Story = {
  args: {
    blogArticle: mockArticle,
  },
  decorators: [componentWrapperDecorator((story) => `
        <app-navbar/>
        <div class="min-h-screen bg-base-100">
          ${story}
          <article class="prose prose-coffee max-w-4xl mx-auto px-8 py-12">
            <h2>Introduction</h2>
            <p>
              L'auto-édition a révolutionné le monde de l'édition, offrant aux auteurs une liberté sans précédent.
              Dans cet article, nous explorerons les étapes essentielles pour publier votre premier livre avec succès.
            </p>

            <h2>Pourquoi choisir l'auto-édition ?</h2>
            <p>
              De plus en plus d'auteurs se tournent vers l'auto-édition pour plusieurs raisons :
            </p>
            <ul>
              <li>Contrôle créatif total sur votre œuvre</li>
              <li>Revenus plus élevés par livre vendu</li>
              <li>Publication rapide sans attendre l'approbation d'un éditeur</li>
              <li>Flexibilité dans la fixation des prix</li>
            </ul>

            <h2>Les étapes clés</h2>
            <h3>1. Finaliser votre manuscrit</h3>
            <p>
              Avant de penser à la publication, assurez-vous que votre manuscrit est parfaitement relu et corrigé.
              N'hésitez pas à faire appel à un correcteur professionnel.
            </p>

            <h3>2. Créer une couverture professionnelle</h3>
            <p>
              La couverture est souvent le premier élément qui attire l'attention des lecteurs.
              Investissez dans un design professionnel qui reflète le contenu de votre livre.
            </p>

            <h3>3. Choisir votre plateforme de publication</h3>
            <p>
              Plusieurs plateformes s'offrent à vous : Amazon KDP, Kobo Writing Life, Apple Books, et bien d'autres.
              Chacune a ses avantages et inconvénients.
            </p>

            <blockquote>
              "L'auto-édition n'est pas un raccourci, c'est une voie alternative qui demande autant de travail,
              sinon plus, que l'édition traditionnelle." - Marie Dupont
            </blockquote>

            <h2>Conclusion</h2>
            <p>
              L'auto-édition est une aventure passionnante qui vous permet de partager vos histoires avec le monde.
              Avec de la persévérance et les bonnes stratégies, vous pouvez réussir en tant qu'auteur auto-édité.
            </p>
          </article>
        </div>
      `
    )],
};
