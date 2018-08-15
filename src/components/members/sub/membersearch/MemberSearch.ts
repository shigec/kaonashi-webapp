import Component from 'vue-class-component';
import {MENU} from '../../../../common/constant';
import store from '../../../../store/index';
import CompomentBase from '../../../ComponentBase';

@Component({
  template: require('./MemberSearch.html'),
  name: 'MemberSearch',
  props: ['sampleText'],
})

/**
 * Searchコンポーネント
 */
export default class MemberSearch extends CompomentBase {

  public filterTeam: string = '';

  public mounted(): void {
  }

  public inputFilterTeam(): void {
    store.commit('setFilterTeam', this.filterTeam);
  }

}
