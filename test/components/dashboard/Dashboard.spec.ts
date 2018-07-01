import Dashboard from '../../../src/components/dashboard/Dashboard';

describe('Dashboard.ts Test', () => {
  it('countUp', () => {
    const dashboard: Dashboard = new Dashboard();
    expect(dashboard.getCount()).toBe(0);
    dashboard.countUp();
    expect(dashboard.getCount()).toBe(1);
  });
});
