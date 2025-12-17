import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const ASSETS_BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL || "";

export const assetUrl = (path: string) => {
    // If the path is already an absolute URL (starts with http/https), return it as is
    if (path.match(/^https?:\/\//)) {
        return path;
    }
    // Remove leading slash if present to avoid double slashes when joining
    const cleanPath = path.replace(/^\//, "");

    return `${ASSETS_BASE}/assets/${cleanPath}`;
}
