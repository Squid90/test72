export default class Validator {
  constructor(number) {
    this.number = number;
  }

  validateNumber() {
    const re = /[^0-9]/gi;
    const clearNumber = (this.number.replace(re, ''));
    const numberWithoutCode = clearNumber.substring(clearNumber.length - 10);
    let codeCountry = clearNumber.substring(0, clearNumber.length - 10);
    codeCountry = codeCountry === '8' ? codeCountry = '7' : codeCountry;
    return `+${codeCountry}${numberWithoutCode}`;
  }
}
