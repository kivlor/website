import { signal } from "@preact/signals";

export const hovering = signal<string>('');

export const loading = signal<boolean>(false);
