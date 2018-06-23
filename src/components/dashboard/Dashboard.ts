import Component from 'vue-class-component';
import CompomentBase from '../ComponentBase';
import store from '../../store/index';

@Component({
  template: require('./Dashboard.html'),
  name: 'Dashboard'
})
/**
 * Dashboardコンポーネント
 */
export default class Dashboard extends CompomentBase {

  created() {
    store.commit('setSampleText', 'hoge');
  }

  updated() {
  }

  mounted() {
  }

  /**
   * 
   */
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