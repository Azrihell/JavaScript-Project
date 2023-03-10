function sing(song) {
  console.log(song);
}

sing("la la la")
sing("do do do")
sing("ke ke ke")


function multiply(a,b) {
  if (a > 10 || b > 10) {
      return "thats too hard";
  } else {
      return a*b;
  }
}

multiply(5,10);