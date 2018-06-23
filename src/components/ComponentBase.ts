import Vue from 'vue';
import Component from 'vue-class-component';

/**
 * Vue ComponentのBaseクラスです。
 * <br>
 * 例えばログ出力や初期化処理等、全てのComponentに共通する処理を記述します。
 */
@Component
export default class ComponentBase extends Vue {

  public mounted() {
    // console.log('mouted!!!');
  }

}
