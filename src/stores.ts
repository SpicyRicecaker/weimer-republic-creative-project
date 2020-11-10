import { writable } from 'svelte/store';

export const noTitleExpansion = writable(true);
export const noPiggyBank = writable(true);
export const viewed = writable([]);
export const viewedRight = writable([]);
export const activeView = writable(0);