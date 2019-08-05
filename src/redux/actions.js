import { SEARCH_TEXT } from "./actionTypes";

/*
 * action creators
 */
export function setSearchText(text) {
  return { type: SEARCH_TEXT, text }
}