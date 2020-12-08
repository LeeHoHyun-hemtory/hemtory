function originalCode() {
  var result = '';
  var width = 96;
  var height = 48;
  var sizeA = 32;
  var sizeB = 16;

  for(var y = 0; y < height; y++) {
    for(var x = 0; x < width; x++) {
      var dstnc = Math.sqrt(Math.pow(width / 2 - x, 2) + Math.pow((height / 2 - y) * 2, 2));

      if(dstnc < sizeA) {
        if(dstnc < sizeB) {
          result += '2';
        }
        else {
          result += '1';
        }
      }
      else {
        result += '0';
      }
    }
    result += '\n';
  }
  console.log(result);
  return result;
}

originalCode();