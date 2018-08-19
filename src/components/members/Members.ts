import Component from 'vue-class-component';
import {MENU} from '../../common/constant';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';
import MemberSearch from './sub/membersearch/MemberSearch';
import MemberList from './sub/memberlist/MemberList';
import MemberEdit from './sub/memberedit/MemberEdit';

@Component({
  template: require('./Members.html'),
  name: 'Members',
  components: {
    MemberSearch,
    MemberList,
    MemberEdit,
  },
})

/**
 * Membersコンポーネント
 */
export default class Members extends CompomentBase {

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.MEMBERS);
    store.commit('setMembers', this.getMembers());
  }

  private getMembers(): any[] {
    // get member data using backend api.
    const members: any[] = [
      {id:'id0001', name: '1さん', gender: 'M', age: 23, dept: 'SS', unit: 'C&S', team: 'CS11', position: '課長', projectName: 'PJ0001', projectId: 'p0001'},
      {id:'id0002', name: '2さん', gender: 'F', age: 34, dept: 'SS', unit: 'C&S', team: 'CS12', position: '主任', projectName: 'PJ0002', projectId: 'p0002'},
      {id:'id0003', name: '3さん', gender: 'M', age: 52, dept: 'SS', unit: 'C&S', team: 'CS13', position: 'お茶くみ', projectName: 'PJ0003', projectId: 'p0003'},
      {id:'id0004', name: '4さん', gender: 'M', age: 19, dept: 'SS', unit: 'C&S', team: 'CS14', position: 'コピー', projectName: 'PJ0004', projectId: 'p0004'},
      {id:'id0005', name: '5さん', gender: 'F', age:  4, dept: 'SS', unit: 'C&S', team: 'CS21', position: '係長', projectName: 'PJ0005', projectId: 'p0005'},
      {id:'id0006', name: '6さん', gender: 'F', age: 45, dept: 'SS', unit: 'C&S', team: 'CS22', position: '課長代理', projectName: 'PJ0006', projectId: 'p0006'},
      {id:'id0007', name: '7さん', gender: 'F', age: 24, dept: 'SS', unit: 'C&S', team: 'CS23', position: 'チーフエンジニア', projectName: 'PJ0007', projectId: 'p0007'},
      {id:'id0008', name: '8さん', gender: 'M', age: 28, dept: 'SS', unit: 'C&S', team: 'CS24', position: '見習い', projectName: 'PJ0008', projectId: 'p0008'},
      {id:'id0009', name: '9さん', gender: 'M', age: 37, dept: 'SS', unit: 'C&S', team: 'CS31', position: 'バイト', projectName: 'PJ0009', projectId: 'p0009'},
      {id:'id0010', name: '10さん', gender: 'F', age: 33, dept: 'SS', unit: 'C&S', team: 'CS32', position: '一般', projectName: 'PJ0010', projectId: 'p0010'},
      {id:'id0011', name: '1さん', gender: 'M', age: 23, dept: 'SS', unit: 'C&S', team: 'CS11', position: '課長', projectName: 'PJ0001', projectId: 'p0001'},
      {id:'id0012', name: '2さん', gender: 'F', age: 34, dept: 'SS', unit: 'C&S', team: 'CS12', position: '主任', projectName: 'PJ0002', projectId: 'p0002'},
      {id:'id0013', name: '3さん', gender: 'M', age: 52, dept: 'SS', unit: 'C&S', team: 'CS13', position: 'お茶くみ', projectName: 'PJ0003', projectId: 'p0003'},
      {id:'id0014', name: '4さん', gender: 'M', age: 19, dept: 'SS', unit: 'C&S', team: 'CS14', position: 'コピー', projectName: 'PJ0004', projectId: 'p0004'},
      {id:'id0015', name: '5さん', gender: 'F', age:  4, dept: 'SS', unit: 'C&S', team: 'CS21', position: '係長', projectName: 'PJ0005', projectId: 'p0005'},
      {id:'id0016', name: '6さん', gender: 'F', age: 45, dept: 'SS', unit: 'C&S', team: 'CS22', position: '課長代理', projectName: 'PJ0006', projectId: 'p0006'},
      {id:'id0017', name: '7さん', gender: 'F', age: 24, dept: 'SS', unit: 'C&S', team: 'CS23', position: 'チーフエンジニア', projectName: 'PJ0007', projectId: 'p0007'},
      {id:'id0018', name: '8さん', gender: 'M', age: 28, dept: 'SS', unit: 'C&S', team: 'CS24', position: '見習い', projectName: 'PJ0008', projectId: 'p0008'},
      {id:'id0019', name: '9さん', gender: 'M', age: 37, dept: 'SS', unit: 'C&S', team: 'CS31', position: 'バイト', projectName: 'PJ0009', projectId: 'p0009'},
      {id:'id0020', name: '10さん', gender: 'F', age: 33, dept: 'SS', unit: 'C&S', team: 'CS32', position: '一般', projectName: 'PJ0010', projectId: 'p0010'},
      {id:'id0021', name: '1さん', gender: 'M', age: 23, dept: 'SS', unit: 'C&S', team: 'CS11', position: '課長', projectName: 'PJ0001', projectId: 'p0001'},
      {id:'id0022', name: '2さん', gender: 'F', age: 34, dept: 'SS', unit: 'C&S', team: 'CS12', position: '主任', projectName: 'PJ0002', projectId: 'p0002'},
      {id:'id0023', name: '3さん', gender: 'M', age: 52, dept: 'SS', unit: 'C&S', team: 'CS13', position: 'お茶くみ', projectName: 'PJ0003', projectId: 'p0003'},
      {id:'id0024', name: '4さん', gender: 'M', age: 19, dept: 'SS', unit: 'C&S', team: 'CS14', position: 'コピー', projectName: 'PJ0004', projectId: 'p0004'},
      {id:'id0025', name: '5さん', gender: 'F', age:  4, dept: 'SS', unit: 'C&S', team: 'CS21', position: '係長', projectName: 'PJ0005', projectId: 'p0005'},
      {id:'id0026', name: '6さん', gender: 'F', age: 45, dept: 'SS', unit: 'C&S', team: 'CS22', position: '課長代理', projectName: 'PJ0006', projectId: 'p0006'},
      {id:'id0027', name: '7さん', gender: 'F', age: 24, dept: 'SS', unit: 'C&S', team: 'CS23', position: 'チーフエンジニア', projectName: 'PJ0007', projectId: 'p0007'},
      {id:'id0028', name: '8さん', gender: 'M', age: 28, dept: 'SS', unit: 'C&S', team: 'CS24', position: '見習い', projectName: 'PJ0008', projectId: 'p0008'},
      {id:'id0029', name: '9さん', gender: 'M', age: 37, dept: 'SS', unit: 'C&S', team: 'CS31', position: 'バイト', projectName: 'PJ0009', projectId: 'p0009'},
      {id:'id0030', name: '10さん', gender: 'F', age: 33, dept: 'SS', unit: 'C&S', team: 'CS32', position: '一般', projectName: 'PJ0010', projectId: 'p0010'},
    ]
    return members;
  }

  public isEditMode(): boolean {
    return store.state.members.isEditMode;
  }
}
