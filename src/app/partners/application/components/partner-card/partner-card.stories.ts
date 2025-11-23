import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { PartnerCardComponent } from './partner-card';

const meta: Meta<PartnerCardComponent> = {
  title: 'Partners/PartnerCard',
  component: PartnerCardComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        // Provide router for RouterLink
        provideRouter([]),
      ],
    }),
    // Center the card with proper layout
    (story) => ({
      template: `
        <div class="min-h-screen bg-base-200 p-8 flex items-center justify-center">
          <div class="w-full max-w-md">
            <story />
          </div>
        </div>
      `,
    }),
  ],
  argTypes: {
    name: {
      control: 'text',
      description: 'Partner name',
    },
    slug: {
      control: 'text',
      description: 'Partner URL slug for routing',
    },
    description: {
      control: 'text',
      description: 'Partner description text',
    },
    image: {
      control: 'text',
      description: 'Partner logo image URL',
    },
    highlights: {
      control: 'object',
      description: 'Array of partner highlights/features',
    },
  },
};

export default meta;
type Story = StoryObj<PartnerCardComponent>;

/**
 * Default partner card with realistic French content
 */
export const Default: Story = {
  args: {
    name: "Le Portail de l'Auto-édition",
    slug: 'portail-ae',
    description:
      'Fondé par Abby, le Portail AE valorise les auteurs et autrices de la littérature indépendante depuis 2017.',
    image: '/images/portail-ae-logo.webp',
    highlights: [
      'Présentations trimestrielles des nouveautés',
      'Émission en direct avec Littlepurplebooks',
      'Service presse pour les auteurs indépendants',
      'Annuaire des auteurs auto-édités',
    ],
  },
};

/**
 * Tests card behavior with a very long partner name
 */
export const LongName: Story = {
  args: {
    name: "Le Réseau Collaboratif International de l'Auto-édition Francophone et de la Littérature Indépendante",
    slug: 'reseau-collaboratif',
    description:
      'Un réseau dédié à la promotion et au développement de la littérature auto-éditée dans toute la francophonie.',
    image: '/images/portail-ae-logo.webp',
    highlights: [
      'Formations pour auteurs débutants',
      'Networking international',
      'Événements mensuels',
    ],
  },
};

/**
 * Tests card with extensive description text
 */
export const LongDescription: Story = {
  args: {
    name: 'Plume & Papier',
    slug: 'plume-papier',
    description:
      "Plume & Papier est une plateforme communautaire créée en 2015 qui accompagne les auteurs auto-édités à chaque étape de leur parcours. De l'écriture à la publication, en passant par la correction, la mise en page, et la promotion, nous offrons un écosystème complet pour réussir dans l'auto-édition. Notre mission est de démocratiser l'accès à la publication et de valoriser la diversité des voix littéraires.",
    image: '/images/portail-ae-logo.webp',
    highlights: [
      'Ateliers d\'écriture hebdomadaires',
      'Corrections collaboratives',
      'Conseils en marketing littéraire',
    ],
  },
};

/**
 * Tests card with many highlights (8+ items)
 */
export const ManyHighlights: Story = {
  args: {
    name: 'Auto-Édition Pro',
    slug: 'autoedition-pro',
    description:
      'Votre partenaire complet pour réussir dans l\'auto-édition avec une gamme complète de services professionnels.',
    image: '/images/portail-ae-logo.webp',
    highlights: [
      'Formation complète à l\'auto-édition (10 modules)',
      'Service de correction professionnelle',
      'Mise en page et couverture sur mesure',
      'Distribution numérique multi-plateformes',
      'Accompagnement marketing personnalisé',
      'Ateliers d\'écriture mensuels',
      'Communauté active de 2000+ auteurs',
      'Podcasts et webinaires hebdomadaires',
      'Service client disponible 7j/7',
      'Outils de promotion gratuits',
    ],
  },
};

/**
 * Tests card with minimal highlights (only 2 items)
 */
export const FewHighlights: Story = {
  args: {
    name: 'Éditions Libres',
    slug: 'editions-libres',
    description:
      'Une maison d\'édition collaborative qui valorise l\'indépendance des auteurs.',
    image: '/images/portail-ae-logo.webp',
    highlights: ['Catalogue trimestriel', 'Accompagnement juridique'],
  },
};

/**
 * Tests behavior with missing or broken image
 * Note: Browser will show broken image icon, but layout should remain stable
 */
export const NoImage: Story = {
  args: {
    name: 'Nouveaux Horizons Littéraires',
    slug: 'nouveaux-horizons',
    description:
      'Partenaire émergent dans le domaine de l\'auto-édition, spécialisé dans les premiers romans.',
    image: '/images/missing-partner-logo.webp',
    highlights: [
      'Focus sur les nouveaux auteurs',
      'Mentorat par des auteurs établis',
      'Prix du premier roman',
    ],
  },
};

/**
 * Shows multiple partner cards in a grid layout
 * Useful for demonstrating responsive behavior
 */
export const GridLayout: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div class="min-h-screen bg-base-200 p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <app-partner-card
            name="Le Portail de l'Auto-édition"
            slug="portail-ae"
            description="Valorise les auteurs indépendants depuis 2017."
            image="/images/portail-ae-logo.webp"
            [highlights]="['Présentations trimestrielles', 'Émissions en direct', 'Service presse']"
          />
          <app-partner-card
            name="Plume & Papier"
            slug="plume-papier"
            description="Plateforme communautaire pour auteurs auto-édités."
            image="/images/portail-ae-logo.webp"
            [highlights]="['Ateliers d\'écriture', 'Corrections collaboratives', 'Conseils marketing']"
          />
          <app-partner-card
            name="Auto-Édition Pro"
            slug="autoedition-pro"
            description="Services professionnels pour réussir dans l'auto-édition."
            image="/images/portail-ae-logo.webp"
            [highlights]="['Formation complète', 'Service de correction', 'Distribution numérique']"
          />
        </div>
      </div>
    `,
  }),
  decorators: [],
};
