import type { AppStore } from './appStore';

export type RootState = ReturnType<AppStore['getState']>;
