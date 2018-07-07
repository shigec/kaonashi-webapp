import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Information.html'),
  name: 'Information',
})

/**
 * Informationコンポーネント
 */
export default class Information extends CompomentBase {

  public getUserName(): string {
    return store.state.common.userName;
  }

  public getUserId(): string {
    return store.state.common.userId;
  }

  public activeNotificationButton(): void {
    store.commit('setActiveNotificationButton', true);
  }

  public inactiveNotificationButton(): void {
    store.commit('setActiveNotificationButton', false);
  }

  public getNotificationButtonActive(): boolean {
    return store.state.information.notificationButtonActive;
  }

  public activeMenuButton(): void {
    store.commit('setActiveMenuButton', true);
  }

  public inactiveMenuButton(): void {
    store.commit('setActiveMenuButton', false);
  }

  public getMenuButtonActive(): boolean {
    return store.state.information.menuButtonActive;
  }
}
