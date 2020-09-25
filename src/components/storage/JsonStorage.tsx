//Funksjon som henter en dictionary fra localstorage med gitt key, hvis den ikke fins vil det lages en ny, tom dictionary med gitt key
export const getJsonLocal = (key: string) =>
    (typeof window !== "undefined" && JSON.parse(localStorage.getItem(key) || "{}"));

//Funksjon som kan oppdatere/overskrive en dictionary i localstorage lagret under en bestemt key
export const setJsonLocal = (key: string, value: any) =>
    typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value));


//Samme som getJsonLocal, men for sessionstorage
export const getJsonSession = (key: string) =>
    (typeof window !== "undefined" && JSON.parse(sessionStorage.getItem(key) || "{}"));

//Samme som setJsonLocal, men for sessionstorage
export const setJsonSession = (key: string, value: any) =>
    typeof window !== "undefined" &&
    sessionStorage.setItem(key, JSON.stringify(value));