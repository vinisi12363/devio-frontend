
export function UseCapitalizeFirstLetter(str:string) {
    if (str && typeof str === 'string') { 
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return str; 
    }
}
  