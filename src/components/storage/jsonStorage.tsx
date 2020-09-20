// UFERDIG OG IKKE TESTET ENDA

export const getJson = (key: string) =>
    (typeof window !== "undefined" && JSON.parse(localStorage.getItem(key) || "{}"));

//kun string som kan lagres her nå
export const setJson = (key: string, value: any) =>
    typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value));
