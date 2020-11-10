import { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';
import Title from './Title.svelte'

export const expandedTitle = writable(false);
export const viewed = writable([Title]);