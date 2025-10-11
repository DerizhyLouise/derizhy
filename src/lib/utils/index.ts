import { page } from "$app/state";

export function getLink(baseLink: string, subLink: string): string {
    if (page.url.pathname === baseLink) {
        return subLink;
    } else {
        return baseLink + subLink;
    }
}
