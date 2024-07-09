import type { Meta, StoryObj } from '@storybook/react';
import FormBuilder from '../../../Components/Form/FormBuilder';
import { WidgetFormType, WidgetFormElementType } from '../../../types';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Form',
  component: FormBuilder,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof FormBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    form: {
      name: '',
      title: 'Form Title',
      type: WidgetFormType.CREATE,
      rows: [
        {
          group_label: 'Group 1',
          group_description: 'Group 1 description',
          elements: [
            {
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
              },
              type: WidgetFormElementType.TEXT,
              map: 'name',
              label: 'Name'
            },
            {
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
              },
              type: WidgetFormElementType.EMAIL,
              map: 'mail',
              label: 'Email address',
            },
            {
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
              },
              type: WidgetFormElementType.NUMBER,
              map: 'digits',
              label: 'Digits',
            },
            {
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
              },
              type: WidgetFormElementType.AMOUNT,
              map: 'charges',
              label: 'Charges',
            }
          ]
        },
        {
          group_label: '',
          group_description: '',
          elements: [
            {
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
              type: WidgetFormElementType.TEXT_AREA,
              map: 'bio',
              label: 'Enter your bio here',
            },
            {
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
              },
              type: WidgetFormElementType.EMAIL,
              map: 'mail',
              label: 'Email address',
            },
            {
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
              },
              type: WidgetFormElementType.NUMBER,
              map: 'digits',
              label: 'Digits',
            },
            {
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
              },
              type: WidgetFormElementType.AMOUNT,
              map: 'charges',
              label: 'Charges',
            }
          ]
        }
      ]
    },
    submitAt: '',
    values: {
        name: 'John Doe',
        mail: 'youremail@example.com',
        digits: '200',
        charges: '198525',
    }
  },
};


// export const TextArea: Story = {
//   args: {
//     element: {
//         type: 'textarea',
//         map: 'bio',
//         label: 'Enter your bio here',
//     },
//     data: {
//         bio: 'I am a software engineer with 9 years of experience in the field. I have worked on various projects and have a good understanding of the latest technologies.',
//     }
//   },
// };

// export const Password: Story = {
//   args: {
//     element: {
//         type: 'password',
//         map: 'your_password',
//         label: 'Please enter password',
//     },
//     data: {
//         your_password: 'yourpassword',
//     }
//   },
// };

// export const Hidden: Story = {
//   args: {
//     element: {
//         type: 'hidden',
//         map: 'id',
//         label: '',
//     },
//     data: {
//         id: '123123',
//     }
//   },
// };

// export const Relation: Story = {
//   args: {
//     element: {
//         type: 'relation',
//         map: 'account',
//         label: 'Please select account',
//     },
//     data: {
//         account: null,
//     }
//   },
// };

// export const Date: Story = {
//   args: {
//     element: {
//         type: 'date',
//         map: 'request_date',
//         label: 'Please select date',
//     },
//     data: {
//         request_date: null,
//     }
//   },
// };

// export const Age: Story = {
//   args: {
//     element: {
//         type: 'age',
//         map: 'your_age',
//         label: 'Please enter your age',
//     },
//     data: {
//         your_age: '',
//     }
//   },
// };

// export const Phone: Story = {
//   args: {
//     element: {
//         type: 'phone',
//         map: 'phone_number',
//         label: 'Please enter your phone number',
//     },
//     data: {
//         phone_number: null,
//     }
//   },
// };

// export const Tags: Story = {
//   args: {
//     element: {
//         type: 'tags',
//         map: 'countries',
//         options: ['USA', 'UK', 'Canada', 'Australia'],
//         label: 'Please select your coutry',
//     },
//     data: {
//         countries: null,
//     }
//   },
// };


// export const Select: Story = {
//   args: {
//     element: {
//         type: 'select',
//         map: 'countries',
//         options: [
//           { value: 'USA', label: 'USA' },
//           { value: 'UK', label: 'UK' },
//           { value: 'Canada', label: 'Canada' },
//           { value: 'Australia', label: 'Australia' },
//         ],
//         label: 'Please select your coutry',
//     },
//     data: {
//         countries: null,
//     }
//   },
// };


// export const SimpleSelect: Story = {
//   args: {
//     element: {
//         type: 'simple_select',
//         map: 'countries',
//         options: [
//           { value: 'USA', label: 'USA' },
//           { value: 'UK', label: 'UK' },
//           { value: 'Canada', label: 'Canada' },
//           { value: 'Australia', label: 'Australia' },
//         ],
//         label: 'Please select your coutry',
//     },
//     data: {
//         countries: null,
//     }
//   },
// };


// export const UrlInput: Story = {
//   args: {
//     element: {
//         type: 'url_select',
//         map: 'profile_url',
//         label: 'Enter your profile URL',
//     },
//     data: {
//         profile_url: null,
//     }
//   },
// };


// export const Address: Story = {
//   args: {
//     element: {
//         type: 'address',
//         map: 'shipping_address',
//         label: 'Shipping Address',
//     },
//     data: {
//         shipping_address: null,
//     }
//   },
// };


// export const EmailEditor: Story = {
//   args: {
//     element: {
//         type: 'email_editor',
//         map: 'content',
//         label: 'Email template',
//     },
//     data: {
//         content: null,
//     }
//   },
// };


// export const RichTextEditor: Story = {
//   args: {
//     element: {
//         type: 'rich_text_editor',
//         map: 'description',
//         label: 'Description',
//     },
//     data: {
//         description: null,
//     }
//   },
// };


// export const FormEditor: Story = {
//   args: {
//     element: {
//         type: 'form_editor',
//         map: 'form',
//         label: 'Edit Form',
//     },
//     data: {
//         form: null,
//     }
//   },
// };


// export const CheckBox: Story = {
//   args: {
//     element: {
//         type: 'checkbox',
//         map: 'concent',
//         label: 'Do you comply',
//     },
//     data: {
//         concent: null,
//     }
//   },
// };