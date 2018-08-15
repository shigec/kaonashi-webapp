import Component from 'vue-class-component';
import {MENU} from '../../../../common/constant';
import store from '../../../../store/index';
import CompomentBase from '../../../ComponentBase';

@Component({
  template: require('./MemberList.html'),
  name: 'MemberList',
})

/**
 * MemberListコンポーネント
 */
export default class MemberList extends CompomentBase {

  public mounted(): void {
  }

  public getListData(): any[] {
    return store.state.members.members;
  }

  public shouldFilter(text: string): boolean {
    const filterTeam: string = store.state.members.filterTeam;
    if (!text || !filterTeam) {
      return false;
    }
    return text.toLowerCase().indexOf(filterTeam) === -1;
  }

}
