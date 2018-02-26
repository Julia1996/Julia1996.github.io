const correctLogin = 'julia';
const correctPassword = '123';

export class AutorizationService {
  constructor() {}

  login(login: string, password: string) {
    if (login === correctLogin && password === correctPassword) {
      localStorage.setItem('authorized', '1');
      return true;
    } else {
      return false;
    }
  }

  get isAutorized() {
    return localStorage.getItem('authorized') === '1';
  }

  set isAutorized(newValue) {
    newValue ? localStorage.setItem('authorized', '1') : localStorage.setItem('authorized', '0');
  }
}
