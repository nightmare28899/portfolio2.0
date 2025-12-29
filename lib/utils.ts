const ASSETS_BASE = process.env.NEXT_PUBLIC_ASSETS_BASE_URL || "";

export const assetUrl = (path: string) => {
    if (path.match(/^https?:\/\//)) {
        return path;
    }

    const cleanPath = path.replace(/^\//, "");

    return `${ASSETS_BASE}/assets/${cleanPath}`;
}
