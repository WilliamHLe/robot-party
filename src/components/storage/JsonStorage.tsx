
// localstorage-funksjonene ble implementert med utgangspunkt i at vi skulle lagre dictionaries/objekter som inneholdt flere verdier, trenger
// egentlig ikke alt dette kun for å lagre et navn.

//Funksjon som henter en dictionary fra localstorage med gitt key, hvis den ikke fins vil det lages en ny, tom dictionary med gitt key
export const getJson = (key: string) =>
    (typeof window !== "undefined" && JSON.parse(localStorage.getItem(key) || "{}"));

//Funksjon som kan oppdatere/overskrive en dictionary i localstorage lagret under en bestemt key
export const setJson = (key: string, value: any) =>
    typeof window !== "undefined" &&
    localStorage.setItem(key, JSON.stringify(value));
