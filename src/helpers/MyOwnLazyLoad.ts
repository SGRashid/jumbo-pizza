import React from 'react';

export function myOwnLazyLoad(path: string, componentName: string) {
    return React.lazy(async () => {
        const module = await import(path);
        return { default: module[componentName] };
    });
}