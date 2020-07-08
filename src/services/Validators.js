const Validators = {
  required: function (value, label) {
    return {
      valid: value ? true : false,
      message: value ? '' : label + " is required",
      touched: true,
      label: label
    };
  },
  email: function (value, label) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return {
      valid: re.test(value) ? true : false,
      message: re.test(value) ? '' : label + " is invalid",
      touched: true,
      label: label
    };
  }
}

export default Validators
