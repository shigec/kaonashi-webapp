import Component from 'vue-class-component';
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

  // public mounted(): void {
  // }

  public getListData(): any[] {
    return store.state.members.members;
  }

  public shouldFilter(text: string): boolean {
    const filterTeam: string = store.state.members.filterTeam;
    if (!text) {
      return true;
    }
    if (!filterTeam) {
      return false;
    }
    return text.toLowerCase().indexOf(filterTeam.toLocaleLowerCase()) === -1;
  }

  public toggleFavorite(id: string): void {

  }

  public deleteItem(id: string): void {

  }

  public addItem(): void {

  }

  public setActiveItem(id: string): void {
    store.commit('setActiveItemId', id);
  }

  public clearActiveItem(): void {
    store.commit('clearActiveItemId');
  }

  public isActiveItem(id: string): boolean {
    return id === store.state.members.activeItemId;
  }

}
