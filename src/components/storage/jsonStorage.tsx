// UFERDIG OG IKKE TESTET ENDA

export const getJson = (key: string) =>
    (typeof window !== "undefined" && JSON.parse(localStorage.getItem(key) || '{}'));

export const setJson = (key: string, value: any) =>
    typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value));
