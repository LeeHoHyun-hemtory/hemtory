function originalCode() {
  var res = '';
  var w = 80;
  var h = 40;
  var sz = 30;

  for(var y = 0; y < h; y++) {
    for(var x= 0; x < w; x++) {
      var dstnc = Math.sqrt(Math.pow(w / 2 - x, 2) + Math.pow((h / 2 - y) * 2, 2));
      if(dstnc < sz) {
        res += '*';
      }
      else {
        res += '-';
      }
    }
    res += '\n';
  }
  
  return res;
}

// originalCode();

function modifiedCode() {
  r=''
  for(y=x=a=40; y+a;) {
    r+='-*\n'[x+a?x*x--+y*y<900|0:(x=a,y-=2,2)]
  }
  return r;
}

// modifiedCode()

console.log('1\n2'[0], '1\n2'[1], '1\n2'[2]);