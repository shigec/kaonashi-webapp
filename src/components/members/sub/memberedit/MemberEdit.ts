import Component from 'vue-class-component';
import store from '../../../../store/index';
import CompomentBase from '../../../ComponentBase';

@Component({
  template: require('./MemberEdit.html'),
  name: 'MemberEdit',
})

/**
 * MemberEditコンポーネント
 */
export default class MemberEdit extends CompomentBase {

  public closeEditor(): void {
    store.commit('setEditMode', false);
  }
}
