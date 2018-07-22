import Component from 'vue-class-component';
import {MENU} from '../../common/constant';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';
import Search from '../sub/search/Search';
import MemberList from '../sub/memberlist/MemberList';

@Component({
  template: require('./Members.html'),
  name: 'Members',
  components: {
    Search,
    MemberList,
  },
})

/**
 * Membersコンポーネント
 */
export default class Members extends CompomentBase {

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.MEMBERS);
  }

}
