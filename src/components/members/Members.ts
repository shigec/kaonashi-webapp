import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';
import {MENU} from '../../common/constant';

@Component({
  template: require('./Members.html'),
  name: 'Members',
})

/**
 * Membersコンポーネント
 */
export default class Members extends CompomentBase {

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.MEMBERS);
  }

}
