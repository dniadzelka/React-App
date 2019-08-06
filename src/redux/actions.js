import { SEARCH_TEXT } from "./actionTypes";

/*
 * action creators
 */
export function setSearchText(text) {
  console.log('dispatched', { type: SEARCH_TEXT, text });
  return { type: SEARCH_TEXT, text }
}