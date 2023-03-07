class Formatter {
//   constructor(string) {
//   this.string = string
// }
  //add static methods here
  static capitalize (string) {
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }
  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g,"")
  }
  static titleize (string) {
    return string.toLowerCase().replace(/\b(?!(?!^)(?:a|an|of|and|for|at|by|but|the|from)\b)([a-z])/g, m => m.toUpperCase()) 
  }
}
//takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.