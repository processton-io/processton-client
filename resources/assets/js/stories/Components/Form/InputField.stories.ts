import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputField from '../../../Components/Form/InputField';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Form/Input',
  component: InputField,
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
  args: { setData: fn() },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    element: {
        map: 'name',
        label: 'Name',
    },
    data: {
        name: 'John Doe',
    }
  },
};

export const Number: Story = {
  args: {
    element: {
        map: 'digits',
        label: 'Digits',
    },
    data: {
        digits: '200',
    }
  },
};

export const Amount: Story = {
  args: {
    element: {
        map: 'charges',
        label: 'Charges',
    },
    data: {
        charges: '198525',
    }
  },
};

export const Email: Story = {
  args: {
    element: {
        map: 'mail',
        label: 'Email address',
    },
    data: {
        mail: 'youremail@example.com',
    }
  },
};

export const TextArea: Story = {
  args: {
    element: {
        map: 'bio',
        label: 'Enter your bio here',
    },
    data: {
        bio: 'I am a software engineer with 9 years of experience in the field. I have worked on various projects and have a good understanding of the latest technologies.',
    }
  },
};

export const Password: Story = {
  args: {
    element: {
        map: 'your_password',
        label: 'Please enter password',
    },
    data: {
        your_password: 'yourpassword',
    }
  },
};

export const Hidden: Story = {
  args: {
    element: {
        map: 'id',
        label: '',
    },
    data: {
        id: '123123',
    }
  },
};

export const Relation: Story = {
  args: {
    element: {
        map: 'account',
        label: 'Please select account',
    },
    data: {
        account: null,
    }
  },
};

export const Date: Story = {
  args: {
    element: {
        map: 'request_date',
        label: 'Please select date',
    },
    data: {
        request_date: null,
    }
  },
};

export const Age: Story = {
  args: {
    element: {
        map: 'your_age',
        label: 'Please enter your age',
    },
    data: {
        your_age: '',
    }
  },
};

export const Phone: Story = {
  args: {
    element: {
        map: 'phone_number',
        label: 'Please enter your phone number',
    },
    data: {
        phone_number: null,
    }
  },
};

export const Tags: Story = {
  args: {
    element: {
        map: 'countries',
        options: ['USA', 'UK', 'Canada', 'Australia'],
        label: 'Please select your coutry',
    },
    data: {
        countries: null,
    }
  },
};


export const Select: Story = {
  args: {
    element: {
        map: 'countries',
        options: [
          { value: 'USA', label: 'USA' },
          { value: 'UK', label: 'UK' },
          { value: 'Canada', label: 'Canada' },
          { value: 'Australia', label: 'Australia' },
        ],
        label: 'Please select your coutry',
    },
    data: {
        countries: null,
    }
  },
};


export const SimpleSelect: Story = {
  args: {
    element: {
        map: 'countries',
        options: [
          { value: 'USA', label: 'USA' },
          { value: 'UK', label: 'UK' },
          { value: 'Canada', label: 'Canada' },
          { value: 'Australia', label: 'Australia' },
        ],
        label: 'Please select your coutry',
    },
    data: {
        countries: null,
    }
  },
};


export const UrlInput: Story = {
  args: {
    element: {
        map: 'profile_url',
        label: 'Enter your profile URL',
    },
    data: {
        profile_url: null,
    }
  },
};


export const Address: Story = {
  args: {
    element: {
        map: 'shipping_address',
        label: 'Shipping Address',
    },
    data: {
        shipping_address: null,
    }
  },
};


export const EmailEditor: Story = {
  args: {
    element: {
        map: 'content',
        label: 'Email template',
    },
    data: {
        content: null,
    }
  },
};


export const RichTextEditor: Story = {
  args: {
    element: {
        map: 'description',
        label: 'Description',
    },
    data: {
        description: null,
    }
  },
};


export const FormEditor: Story = {
  args: {
    element: {
        map: 'form',
        label: 'Edit Form',
    },
    data: {
        form: null,
    }
  },
};


export const CheckBox: Story = {
  args: {
    element: {
        map: 'concent',
        label: 'Do you comply',
    },
    data: {
        concent: null,
    }
  },
};