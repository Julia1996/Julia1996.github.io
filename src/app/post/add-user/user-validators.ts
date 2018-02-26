import { FormControl } from '@angular/forms';

export default class UserValidators {
  static date(formControl: FormControl) {
    const birthDate = new Date(formControl.value);
    const _18yearsAgo = new Date();
    _18yearsAgo.setFullYear(_18yearsAgo.getFullYear() - 18);
    if (birthDate > _18yearsAgo) {
      return { 'UserValidates.date': { message: 'User is too young' } };
    }
    return null;
  }

  static email(formControl: FormControl) {
    if (/^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/.test(formControl.value)) {
      return null;
    }
    return { 'UserValidates.email': { message: 'Email is not correct' } };
  }
}
