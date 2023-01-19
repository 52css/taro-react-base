export default function (value) {
  var REGEXP = /^\d+(\.\d+)?$/

  if (value == null) {
    return '';
  }

  return REGEXP.test('' + value) ? value + 'rpx' : value;
}
