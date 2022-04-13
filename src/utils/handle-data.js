// 获取歌手字母类别
export function generateSingerAlpha() {
  var alphabets = ["-1"];
  var start = 'A'.charCodeAt(0);
  var last  = 'Z'.charCodeAt(0);
  for (var i = start; i <= last; ++i) {
    alphabets.push(String.fromCharCode(i));
  }
  alphabets.push("0");
  return alphabets;
}

export const singerAlphas = generateSingerAlpha();