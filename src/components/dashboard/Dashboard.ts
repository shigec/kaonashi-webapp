import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Dashboard.html'),
  name: 'Dashboard',
})

/**
 * Dashboardコンポーネント
 */
export default class Dashboard extends CompomentBase {

  public created() {
    store.commit('setSampleText', 'hoge');
  }

  private getSampleText(): string {
    return store.state.common.sampleText;
  }

  private changeHage(): void {
    store.commit('setSampleText', 'hage');
  }

  private getCount(): number {
    return store.state.common.count;
  }

  private countUp(): void {
    store.commit('countUp');
  }

}
