const FAVORITES_KEY = "favorites";

export function getFavorites(): number[] {
    const data = localStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
}

export function toggleFavorite(id: number) {
    const current = getFavorites();

    const updated = current.includes(id)
    ? current.filter(x => x !== id)
    : [...current, id];

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));

    return updated;
}

export function isFavorite(id: number) {
    return getFavorites().includes(id);
}