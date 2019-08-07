import { SEARCH_TEXT, LOADING, GIF_ITEMS } from "./actionTypes";

/*
 * action creators
 */

export function setSearchText(text) {
  return { type: SEARCH_TEXT, text }
}

export function setLoading(loading) {
  return { type: LOADING, loading }
}

export function setGifItems(gifItems) {
  return { type: GIF_ITEMS, gifItems }
}