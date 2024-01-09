import { useLayoutEffect } from 'react';
let originalStyle = '';

export function useScrollLock(lock: boolean): void {
    useLayoutEffect(() => {
        
        originalStyle = document.body.style.overflow;

        if (lock) {
            document.body.style.overflow = 'hidden';
        } else {
            
            document.body.style.overflow = originalStyle;
        }

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, [lock]);
}