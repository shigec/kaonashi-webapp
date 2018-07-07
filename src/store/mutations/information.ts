/**
 * Notification Button押下状態を設定します。
 * @param state
 */
export function setActiveNotificationButton(state: any, active: boolean): void {
  state.information.notificationButtonActive = active;
}

export function setActiveMenuButton(state: any, active: boolean): void {
  state.information.menuButtonActive = active;
}
