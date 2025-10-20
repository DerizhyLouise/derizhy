import { page } from "$app/state";

export function getLink(baseLink: string, subLink: string): string {
    if (page.url.pathname === baseLink) {
        return subLink;
    } else {
        return baseLink + subLink;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay = 2000,
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;

    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}
