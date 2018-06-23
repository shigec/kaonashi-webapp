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

}
