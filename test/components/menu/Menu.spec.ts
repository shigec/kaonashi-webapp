import Menu from '../../../src/components/menu/Menu';

describe('Menu.ts Test', () => {
  it('isSelected', () => {
    const component: Menu = new Menu();
    expect(component.isSelected(0)).toBeTruthy();
  });
});
