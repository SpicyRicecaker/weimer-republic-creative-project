import { writable } from 'svelte/store';
import type {Writable } from 'svelte/store';

export const noTitleExpansion = writable(true);
export const noPiggyBank = writable(true);
export const noPeople = writable(true);
export const noPresident = writable(true);

export const viewed: Writable<any[]> = writable([]);
export const viewedRight = writable([]);
export const viewedLeft = writable([]);

export const activeView = writable(0);