export class Base64Service {

  encode(toEncode) {
    return btoa(toEncode);
  }

  decode(toDecode) {
    return atob(toDecode);
  }

}
