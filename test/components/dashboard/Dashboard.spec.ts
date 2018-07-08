import Dashboard from '../../../src/components/dashboard/Dashboard';

describe('Dashboard.ts Test', () => {
  it('countUp', () => {
    const component: Dashboard = new Dashboard();
    expect(component.getCount()).toBe(0);
    component.countUp();
    expect(component.getCount()).toBe(1);
  });
});
