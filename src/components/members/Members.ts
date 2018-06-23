import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Members.html'),
  name: 'Members',
})

/**
 * Membersコンポーネント
 */
export default class Members extends CompomentBase {

}
