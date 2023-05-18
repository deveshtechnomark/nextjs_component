import { Type, ToastProvider, Toast } from '../types/types';
export interface Toaster extends ToastProvider {
    type: Type;
}
export declare const toaster: ({ content, type, config }: Toaster) => Toast;
