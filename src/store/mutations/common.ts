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