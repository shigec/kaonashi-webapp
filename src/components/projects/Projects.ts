import Component from 'vue-class-component';
import {MENU} from '../../common/constant';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Projects.html'),
  name: 'Projects',
})

/**
 * Membersコンポーネント
 */
export default class Projects extends CompomentBase {

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.PROJECTS);
  }

}
