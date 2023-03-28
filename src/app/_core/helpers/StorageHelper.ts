export default class StorageHelper {
  private static readonly tokenKey: string = 'accessToken';

  static saveToken(token: string) {
      window.sessionStorage[this.tokenKey] = token;
  }

  static deleteToken(){
      window.sessionStorage.removeItem(this.tokenKey);
  }

  static getToken() {
      return window.sessionStorage[this.tokenKey];
  }
}
