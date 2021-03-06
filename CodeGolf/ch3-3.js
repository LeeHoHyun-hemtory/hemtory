function originalCode() {
  var res = '';

  var w = 55;
  var h = 35;
  var maze = new Array(w * h);
  for(var y = 1; y < h - 1; y++) {
    for(var x = 1; x < w - 1; x++) {
      maze[x + (w * y)] = 1;
    }
  }

  var startX = w - 5;
  var startY = 4;
  var dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];
  var pattern = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 2, 3, 1], [0, 3, 1, 2], [0, 3, 2, 1], [1, 0, 2, 3], [1, 0, 3, 2], [1, 2, 0, 3],
[1, 2, 3, 0], [1, 3, 0, 2], [1, 3, 2, 0], [2, 0, 1, 3], [2, 0, 3, 1], [2, 1, 0, 3], [2, 1, 3, 0], [2, 3, 0, 1], [2, 3, 1, 0], [3, 0, 1, 2], 
[3, 0, 2, 1], [3, 1, 0, 2], [3, 1, 2, 0], [3, 2, 0, 1], [3, 2, 1, 0]];

  function dig(x, y) {
    var type = (x + 3) * (y + 5) * 7 % pattern.length;
    for(var i = 0; i < dir.length; i++) {
      var next = dir[pattern[type][i]];
      if(maze[(x + next[0] * 2) + w * (y + next[1] * 2)] === 1) {
        maze[(x + next[0] * 2) + w * (y + next[1] * 2)] = 0;
        maze[(x + next[0]) + w * (y + next[1])] = 0;
        dig(x + next[0] * 2, y + next[1] * 2);
      }
    }
  }
  dig(startX, startY);

  for(var y = 0; y < h; y++) {
    for(var x = 0; x < w; x++) {
      if(maze[x + w * y] === 1) {
        res += '■';
      }
      else {
        res += ' ';
      }
    }
    res += '\n';
  }
console.log(res)
  return res;
}

originalCode()