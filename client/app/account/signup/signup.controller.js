'use strict';
var flg=0;


class SignupController {
  //end-non-standard

  constructor(Auth, $location) {
      this.Auth = Auth;
      this.$location = $location;
    }
    //start-non-standard

    regEx="[0-9]{10}";
  register(form) {
    this.submitted = true;
    

    if (form.$valid) {
      this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          phone: this.user.phone,
          institution: this.institution
        })
        .then(() => {
          // Account created, redirect to home
          this.$location.path('/');
          this.message = 'Successfully signed up.';
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            flg=1;
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
          if(flg!=1)
            this.message = 'Sorry! Your MAC address is already in use.';
        });
    }
  }
}

angular.module('lecturesApp')
  .controller('SignupController', SignupController);
