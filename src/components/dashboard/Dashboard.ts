import Component from 'vue-class-component';
import {MENU} from '../../common/constant';
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

  public created(): void {
    store.commit('setSampleText', 'hoge');
  }

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.DASHBOARD);
  }

  public getCount(): number {
    return store.state.common.count;
  }

  public countUp(): void {
    store.commit('countUp');
  }

  public getSampleText(): string {
    return store.state.common.sampleText;
  }

  public changeHage(): void {
    store.commit('setSampleText', 'hage');
  }

}
