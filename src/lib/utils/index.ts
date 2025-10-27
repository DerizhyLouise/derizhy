import { page } from "$app/state";
import type { SearchBarTypeCount } from "$lib/type/data-type";

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

export function parseBoldHTML(text: string, darkTheme: boolean = true): string {
    return text.replace(
        /\*\*(.+?)\*\*/g,
        `<span class="font-semibold ${darkTheme ? "text-yellow" : ""}">$1</span>`,
    );
}

export const typeCount = (data: { type: string[] }[]): SearchBarTypeCount[] => {
    const typeCountMap: Record<string, number> = {};

    for (const proj of data) {
        for (const type of proj.type) {
            typeCountMap[type] = (typeCountMap[type] || 0) + 1;
        }
    }

    const result: SearchBarTypeCount[] = [
        { type: "All", count: data.length },
        ...Object.entries(typeCountMap).map(([type, count]) => ({
            type,
            count,
        })),
    ];

    return result;
};
