import type { Meta, StoryObj } from '@storybook/react';
import InteractionBuilder from '../../Components/InteractionBuilder';
import { Interaction, ElementTypes, WidgetStatCardTypes } from '../../types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Components/InteractionBuilder',
    component: InteractionBuilder,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
      // layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
    },
} satisfies Meta<typeof InteractionBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

let PrimartInteraction : Interaction = {
      name: "Interaction Builder",
      slug : "interaction_builder",
      title : "Interaction Builder",
      subtitle : "",
      icon : "user",
      schema: {
        elements: [
          {
            type: ElementTypes.ROW,
            width: {
              xxxs: 12,
              xxs: 12,
              xs: 12,
              sm: 12 ,
              md: 12,
              lg: 12,
              xl: 12,
              xxl: 12,
              xxxl: 12
            },
            elements: [
              {
                type: ElementTypes.STATS_CARD,
                name: 'Stats Card',
                title: 'Stats Card',
                subtitle: 'Subtitle',
                data: {
                  title: 'Stats Card',
                  subtitle: 'Subtitle',
                  value: 100,
                  value_2: 200,
                  icon: 'user',
                  unit: 'unit',
                  precision: 2,
                  seperator: 'seperator'
                },
                width: {
                  xxxs: 12,
                  xxs: 12,
                  xs: 12,
                  sm: 6 ,
                  md: 6,
                  lg: 4,
                  xl: 3,
                  xxl: 2,
                  xxxl: 2
                }
              },
              {
                type: ElementTypes.STATS_CARD,
                name: 'Stats Card',
                title: 'Stats Card',
                subtitle: 'Subtitle',
                data: {
                  type: WidgetStatCardTypes.SIMPLE_DUAL,
                  title: 'Stats Card',
                  value: 100,
                  value_2: 1000,
                  format: false,
                  icon: 'user',
                  seperator: '/',
                  unit: 'unit',
                  unit_2: 'kgs',
                  precision: 2,
                },
                width: {
                  xxxs: 12,
                  xxs: 12,
                  xs: 12,
                  sm: 6 ,
                  md: 6,
                  lg: 4,
                  xl: 3,
                  xxl: 2,
                  xxxl: 2
                }
              },
              {
                type: ElementTypes.STATS_CARD,
                name: 'Stats Card',
                title: 'Stats Card',
                subtitle: 'Subtitle',
                data: {
                  title: 'Stats Card',
                  subtitle: 'Subtitle',
                  value: 100,
                  value_2: 200,
                  icon: 'user',
                  unit: 'unit',
                  precision: 2,
                  seperator: 'seperator'
                },
                width: {
                  xxxs: 12,
                  xxs: 12,
                  xs: 12,
                  sm: 12 ,
                  md: 12,
                  lg: 4,
                  xl: 3,
                  xxl: 2,
                  xxxl: 2
                }
              },
            ]
          },
          {
            type: ElementTypes.ROW,
            width: {
              xxxs: 12,
              xxs: 12,
              xs: 12,
              sm: 12 ,
              md: 12,
              lg: 12,
              xl: 12,
              xxl: 12,
              xxxl: 12
            },
            elements: [
              {
                type: ElementTypes.CARD,
                name: 'Stats Card',
                title: 'Stats Card',
                subtitle: 'Subtitle',
                data: {
                  header: {
                    title: 'Card Title',
                    subtitle: 'Card Sub Title',
                    // icon: 'plus',
                    image: '/resources/assets/js/stories/static/logo.png',
                  },
                  body: {
                    content: 'Card Content',
                  },
                },
                width: {
                  xxxs: 12,
                  xxs: 12,
                  xs: 12,
                  sm: 6 ,
                  md: 6,
                  lg: 4,
                  xl: 3,
                  xxl: 3,
                  xxxl: 3
                }
              },
            ]
          },
        ]
      }
    }

export const Primary: Story = {
  args: {
    ... PrimartInteraction
  }
};


