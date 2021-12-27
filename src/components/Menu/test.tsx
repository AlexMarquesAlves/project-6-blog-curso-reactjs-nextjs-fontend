import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
