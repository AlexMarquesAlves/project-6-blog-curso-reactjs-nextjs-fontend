import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from './mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit
        ullam saepe maxime impedit tenetur mollitia? Dolorem nam porro corrupti,
        dignissimos qui consequatur cumque, quia aliquid sunt beatae eius non?
        Voluptates minus commodi natus hic saepe, incidunt libero quam! Illo
        quibusdam laudantium doloribus nam suscipit. Nobis adipisci officiis
        explicabo illum! Dolore voluptatum totam eligendi maxime quod id veniam
        dolorum tenetur.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit
        ullam saepe maxime impedit tenetur mollitia? Dolorem nam porro corrupti,
        dignissimos qui consequatur cumque, quia aliquid sunt beatae eius non?
        Voluptates minus commodi natus hic saepe, incidunt libero quam! Illo
        quibusdam laudantium doloribus nam suscipit. Nobis adipisci officiis
        explicabo illum! Dolore voluptatum totam eligendi maxime quod id veniam
        dolorum tenetur.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit
        ullam saepe maxime impedit tenetur mollitia? Dolorem nam porro corrupti,
        dignissimos qui consequatur cumque, quia aliquid sunt beatae eius non?
        Voluptates minus commodi natus hic saepe, incidunt libero quam! Illo
        quibusdam laudantium doloribus nam suscipit. Nobis adipisci officiis
        explicabo illum! Dolore voluptatum totam eligendi maxime quod id veniam
        dolorum tenetur.
      </p>
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore fugit
        ullam saepe maxime impedit tenetur mollitia? Dolorem nam porro corrupti,
        dignissimos qui consequatur cumque, quia aliquid sunt beatae eius non?
        Voluptates minus commodi natus hic saepe, incidunt libero quam! Illo
        quibusdam laudantium doloribus nam suscipit. Nobis adipisci officiis
        explicabo illum! Dolore voluptatum totam eligendi maxime quod id veniam
        dolorum tenetur.
      </p>
      <br />
      <br />
    </div>
  );
};
