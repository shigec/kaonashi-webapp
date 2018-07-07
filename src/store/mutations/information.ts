/**
 * Notification Button押下状態を設定します。
 * @param state
 */
export function setActiveNotificationButton(state: any, selected: boolean): void {
  state.information.notificationButtonActive = selected;
}

export function setActiveMenuButton(state: any, selected: boolean): void {
  state.information.menuButtonActive = selected;
}
