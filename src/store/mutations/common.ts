/**
 * Sample その1
 * @param state
 */
export function setSampleText(state: any, text: string): void {
  state.common.sampleText = text;
}

export function countUp(state: any): void {
  state.common.count++;
}

export function setUserName(state: any, userName: string): void {
  state.common.userName = userName;
}

export function setUserId(state: any, userId: string): void {
  state.common.userId = userId;
}
