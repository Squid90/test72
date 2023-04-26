export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const accessSymbols = /^[A-Za-z0-9-_]+$/.test(this.name);
    const startSymbols = /^[^-_0-9]/.test(this.name);
    const endSymbols = /[^-_0-9]$/.test(this.name);
    const repeatSymbols = !(/\d{4}/).test(this.name);

    return accessSymbols && startSymbols && endSymbols && repeatSymbols;
  }
}
