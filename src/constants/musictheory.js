var numKeys = 88;
var keys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
var chromaticScale = ["C","B","A#","A","G#","G","F#","F","E","D#","D","C#"]
var keyboard = ["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"]
var chords = ["I","III","IV","V","VI","VII","i","ii","iio","iii","iv","v","vi","viio"]
var noteNumbers = ["1 Note", "2 Notes", "3 Notes", "4 Notes", "5 Notes", "6 Notes"]
var noteLengths = ["1/8","1/4", "1/2","3/4","1"]
// C = 0, C# = 1, D = 2, D# = 3, E = 4, F = 5, F# = 6, G = 7, G# = 8, A = 9, A# = 10, B = 11
//    12      13     14      15     16     17      18     19      20     21       22      23
//    24      25     26      27     28     29      30     31      32     33       34      35
var chordNotes = {
  "C Major":[[0,4,7],[4,7,12],[7,12,16],[11,14,21]],
  "D Minor":[[2,5,9],[5,9,14],[9,14,17],[12,16,23]],
  "E Minor":[[4,7,11],[7,11,16],[11,16,19],[14,18,25]],
  "F Major":[[5,9,12],[9,12,17],[12,17,21],[16,19,26]],
  "G Major":[[7,11,14],[11,14,19],[14,19,23],[17,21,28]],
  "A Minor":[[9,12,16],[12,16,21],[16,21,24],[19,23,30]],
  "B Dim5":[[11,14,17],[14,17,23],[17,23,26],[21,24,31]],
  "C Minor":[[0,3,7],[3,7,12],[7,12,15],[22,26,33]],
  "D Dim5":[[2,5,8],[5,8,14],[8,14,17],[24,27,34]],
  "E Major":[[4,8,11],[8,11,16],[11,16,20],[14,18,25]],
  "F Minor":[[5,8,12],[8,12,17],[12,17,20],[15,19,26]],
  "G Minor":[[7,10,14],[10,14,19],[14,19,22],[17,21,28]],
  "A Major":[[9,13,16],[13,16,21],[16,21,25],[19,23,30]],
  "B Major":[[11,15,18],[15,18,23],[18,23,27],[21,24,32]],
  "Db Major":[[1,5,8],[5,8,13],[8,13,17],[12,15,22]],
  "Eb Minor":[[3,6,10],[6,10,15],[10,15,18],[13,17,24]],
  "Gb Major":[[6,10,13],[10,13,18],[13,18,22],[17,20,27]],
  "Ab Major":[[8,12,15],[12,15,20],[15,20,24],[18,22,29]],
  "Bb Minor":[[10,13,17],[13,17,22],[17,22,25],[20,24,31]],
  "C Dim5":[[0,3,6],[3,6,12],[6,12,15],[10,13,20]],
  "Db Minor":[[1,4,8],[4,8,13],[8,13,16],[11,15,22]],
  "Eb Dim5":[[3,6,9],[6,9,15],[9,15,17],[13,16,23]],
  "Gb Minor":[[6,9,13],[9,13,18],[13,18,21],[16,20,27]],
  "Ab Minor":[[8,11,15],[11,15,20],[15,20,23],[18,22,29]],
  "Bb Major":[[10,14,17],[14,17,22],[17,22,26],[20,24,31]],
  "D Major":[[2,6,9],[6,9,14],[9,14,18],[13,16,23]],
  "F# Minor":[[6,9,13],[9,13,18],[13,18,21],[16,20,27]],
  "B Minor":[[11,14,18],[14,18,23],[18,23,26],[21,25,27]],
  "C# Dim5":[[1,4,7],[4,7,13],[7,13,16],[11,14,21]],
  "E Dim5":[[4,7,10],[7,10,16],[10,16,19],[14,17,24]],
  "F# Major":[[6,10,13],[10,13,18],[13,18,22],[16,20,27]],
  "C# Major":[[1,5,8],[5,8,13],[8,13,17],[12,15,22]],
  "Eb Major":[[3,7,10],[7,10,15],[10,15,19],[14,17,24]],
  "F Dim5":[[5,8,11],[8,11,17][11,17,20],[15,18,25]],
  "D# Dim5":[[3,6,9],[6,9,15],[9,15,18],[13,16,23]],
  "F# Dim5":[[6,9,12],[9,12,18],[12,18,21],[16,19,26]],
  "G# Major":[[8,12,15],[12,15,20],[15,20,24],[18,22,29]],
  "E Dim5":[[4,7,10],[7,10,16],[10,16,19],[14,17,24]],
  "G Dim5":[[7,10,13],[10,13,19],[13,19,22],[17,20,27]],
  "Ab Dim5":[[8,11,14],[11,14,20],[14,20,23],[18,21,28]],
  "A Dim5":[[9,13,15],[13,15,21],[15,21,24],[19,22,29]],
  "Bb Dim5":[[10,13,16],[13,16,22],[16,22,25],[18,23,30]],
  "C# Minor":[[1,4,8],[4,8,13],[8,13,16],[11,15,22]],
  "G# Dim5":[[8,11,14],[11,14,20],[14,20,23],[18,21,28]],
  "D# Minor":[[3,6,10],[6,10,15],[10,15,18],[13,17,24]],
  "G# Minor":[[8,11,15],[11,15,20],[15,20,23],[18,22,29]],
  "A# Dim5":[[10,13,16],[13,16,22],[16,22,25],[18,23,30]],
  "D# Major":[[3,7,10],[7,10,15],[10,15,19],[14,17,24]],
  "A# Major":[[10,14,17],[14,17,22],[17,22,26],[20,24,31]],
  "Db Dim5":[[1,4,7],[4,7,13],[7,13,16],[11,14,21]],
}

var chordKeys = {
  "Major":{
    "C":{
      "I":"C Major",
      "ii":"D Minor", // D MINOR
      "iii":"E Minor", // E MINOR
      "IV":"F Major", // F MAJOR
      "V":"G Major", // G MAJOR
      "vi":"A Minor", // A MINOR
      "viio":"B Dim5", // B DIM
      "i":"C Minor", // C MINOR
      "iio":"D Dim5", // D DIM
      "III":"E Major", // E MAJOR
      "iv":"F Minor", // F MINOR
      "v":"G Minor", // G MINOR
      "VI":"A Major", //A MAJOR
      "VII":"B Major" // B MAJOR
    },
    "Db":{
      "I":"Db Major", // Db Major
      "ii":"Eb Minor", // Eb Minor
      "iii":"F Minor", // F Minor
      "IV":"Gb Major", // Gb MAJOR
      "V":"Ab Major", // Ab MAJOR
      "vi":"Bb Minor", // Bb MINOR
      "viio":"C Dim5", // C DIM
      "i":"Db Minor", // Db MINOR
      "iio":"Eb Dim5", // Eb DIM
      "III":"F Major", // F MAJOR
      "iv":"Gb Minor", // Gb MINOR
      "v":"Ab Minor", // Ab MINOR
      "VI":"Bb Major", // Bb MAJOR
      "VII":"C Major" // C MAJOR
    },
    "D":{
      "I":"D Major", // D MAJOR
      "ii":"E Minor", // E MINOR
      "iii":"F# Minor", // F# MINOR
      "IV":"G Major", // G MAJOR
      "V":"A Major", // A MAJOR
      "vi":"B Minor", // B MINOR
      "viio":"C# Dim5", //C# DIM
      "i":"D Minor", // D MINOR
      "iio":"E Dim5", // E DIM
      "III":"F# Major", // F# MAJOR
      "iv":"G Minor", // G MINOR
      "v":"A Minor", // A MINOR
      "VI":"B Major", // B MAJOR
      "VII":"C# Major" // C# MAJOR
    },
    "Eb":{
      "I":"Eb Major",
      "ii":"F Minor",
      "iii":"G Minor",
      "IV":"Ab Major",
      "V":"Bb Major",
      "vi":"C Minor",
      "viio":"D Dim5",
      "i":"Eb Minor",
      "iio":"F Dim5", // F DIM
      "III":"G Major", // G MAJOR
      "iv":"Ab Minor", // Ab MINOR,
      "v":"Bb Minor", // Bb MINOR
      "VI":"C Major", // C MAJOR
      "VII":"D Major" // D MAJOR
    },
    "E":{
      "I":"E Major",
      "ii":"Gb Minor", // Gb MINOR
      "iii":"Ab Minor", // Ab MINOR
      "IV":"A Major", // A MAJOR
      "V":"B Major", // B MAJOR
      "vi":"Db Minor", // Db MINOR
      "viio":"D# Dim5", // D# DIM
      "i":"E Minor", // E MINOR
      "iio":"F# Dim5", // F# DIM
      "III":"G# Major", // G# MAJOR
      "iv":"A Minor", // A MINOR
      "v":"B Minor", // B MINOR
      "VI":"Db Major", // Db Major
      "VII":"Eb Major" // Eb MAJOR
    },
    "F":{
      "I":"F Major", // F MAJOR
      "ii":"G Minor", // G MINOR
      "iii":"A Minor", // A MINOR
      "IV":"Bb Major", // Bb MAJOR
      "V":"C Minor", // C MAJOR
      "vi":"D Minor", // D MINOR
      "viio":"E Dim5", // E DIM
      "i":"F Minor", // F MINOR
      "iio":"G Dim5", // G DIM
      "III":"A Major", // A MAJOR
      "iv":"Bb Minor", // Bb MINOR
      "v":"C Minor", // C MINOR
      "VI":"D Major", // D MAJOR
      "VII":"E Major" // E MAJOR
    },
    "Gb":{
      "I":"Gb Major", // Gb MAJOR
      "ii":"Ab Major", // Ab MAJOR
      "iii":"Bb Minor", // Bb MINOR
      "IV":"B Major", // B MAJOR
      "V":"Db Major", // Db Major
      "vi":"Eb Minor", // Eb Minor
      "viio":"F Dim5", // F DIM
      "i":"Gb Minor", // Gb MINOR
      "iio":"Ab Dim5", // Ab DIM
      "III":"Bb Major", // Bb MAJOR
      "iv":"B Minor", // B MINOR
      "v":"Db Minor", // Db MINOR
      "VI":"Eb Major", // Eb MAJOR
      "VII":"F Major", // F MAJOR
    },
    "G":{
      "I":"G Major", // G MAJOR
      "ii":"A Minor", // A MINOR
      "iii":"B Minor", // B MINOR
      "IV":"C Major", // C MAJOR
      "V":"D Major", // D MAJOR
      "vi":"E Minor", // E MINOR
      "viio":"F# Dim5", // F# DIM
      "i":"G Minor", // G MINOR
      "iio":"A Dim5", // A DIM
      "III":"B Major", // B MAJOR
      "iv":"C Minor", // C MINOR
      "v":"D Minor", // D MINOR
      "VI":"E Major", // E MAJOR
      "VII":"F# Major", // F# MAJOR
    },
    "Ab":{
      "I":"Ab Major", // Ab MAJOR
      "ii":"Bb Minor", // Bb MINOR
      "iii":"C Minor", // C MINOR
      "IV":"Db Major", // Db Major
      "V":"Eb Major", // Eb MAJOR
      "vi":"F Minor", // F Minor
      "viio":"G Dim5", // G DIM
      "i":"Ab Minor", // Ab MINOR
      "iio":"Bb Dim5", // Bb DIM
      "III":"C Major", // C MAJOR
      "iv":"Db Minor", // Db MINOR
      "v":"Eb Minor", // Eb Minor
      "VI":"F Major", // F MAJOR
      "VII":"G Major" // G MAJOR
    },
    "A":{
      "I":"A Major", //A MAJOR
      "ii":"B Minor", // B MINOR
      "iii":"C# Minor", // C# MINOR
      "IV":"D Major", // D MAJOR
      "V":"E Major", // E MAJOR
      "vi":"F# Minor", // F# MINOR
      "viio":"G# Dim5", // G# DIM
      "i":"A Minor", // A MINOR
      "iio":"Bb Dim5", // Bb DIM
      "III":"C# Major", // C# MAJOR
      "iv":"D Minor", // D MINOR
      "v":"E Minor", // E MINOR
      "VI":"F# Major", // F# MAJOR
      "VII":"G# Major", // G# MAJOR
    },
    "Bb":{
      "I":"Bb Major", // Bb MAJOR
      "ii":"C Minor", // C MINOR
      "iii":"D Minor", // D MINOR
      "IV":"Eb Major", // Eb MAJOR
      "V":"F Major", // F MAJOR
      "vi":"G Minor", // G MINOR
      "viio":"A Dim5", // A DIM
      "i":"Bb Minor", // Bb MINOR
      "iio":"C Dim", // C DIM
      "III":"D Major", // D MAJOR
      "iv":"Eb Minor", // Eb Minor
      "v":"F Minor", // F MINOR
      "VI":"G Major", // G MAJOR
      "VII":"A Major", // A MAJOR
    },
    "B":{
      "I":"B Major", // B MAJOR
      "ii":"C# Minor", // C# MINOR
      "iii":"D# Minor", // D# Minor
      "IV":"E Major", // E MAJOR
      "V":"F# Major", // F# MAJOR
      "vi":"G# Minor", // G# MINOR
      "viio":"A# Dim5", // A# DIM
      "i":"B Minor", // B MINOR
      "iio":"C# Dim5", //C# DIM
      "III":"D# Major", // D# MAJOR
      "iv":"E Minor", // E MINOR
      "v":"F# Minor", // F# MINOR
      "VI":"G# Major", // G# MAJOR
      "VII":"A# Major", // A# MAJOR
    }
  },
  "Minor":{
    "C":{
      "i":"C Minor", // C MINOR
      "iio":"D Dim5", // D DIM
      "III":"Eb Major", // Eb MAJOR
      "iv":"F Minor", // F MINOR
      "v":"G Minor", // G MINOR
      "VI":"Ab Major", // Ab MAJOR
      "VII":"Bb Major", // Bb MAJOR
      "I":"C Major", // C MAJOR
      "ii":"D Minor", // D MINOR
      "iii":"Eb Minor", // Eb MINOR
      "IV":"F Major", // F MAJOR
      "V":"G Major", // G MAJOR
      "vi":"Ab Minor", // Ab MINOR
      "viio":"Bb Dim5", // Bb DIM
    },
    "Db":{
      "i":"Db Minor", // Db MINOR
      "iio":"Eb Dim5", // Eb DIM
      "III":"E Major", // E MAJOR
      "iv":"Gb Minor", // Gb MINOR
      "v":"Ab Minor", // Ab MINOR
      "VI":"A Major", // A MAJOR
      "VII":"B Major", // B MAJOR
      "I":"Db Major", // Db Major
      "ii":"Eb Minor", // Eb Minor
      "iii":"E Minor", // E MINOR
      "IV":"Gb Major", // Gb MAJOR
      "V":"Ab Major", // Ab MAJOR
      "vi":"A Minor", // A MINOR
      "viio":"B Dim5", // B DIM
    },
    "D":{
      "i":"D Minor", // D MINOR
      "iio":"E Dim", // E DIM
      "III":"F Major", // F MAJOR
      "iv":"G Minor", // G MINOR
      "v":"A Minor", // A MINOR
      "VI":"Bb Major", // Bb MAJOR
      "VII":"C Major", // C MAJOR
      "I":"D Major", // D MAJOR
      "ii":"E Minor", // E MINOR
      "iii":"F Minor", // F Minor
      "IV":"G Major", // G MAJOR
      "V":"A Major", //A MAJOR
      "vi":"Bb Minor", // Bb MINOR
      "viio":"C Dim5", // C DIM
    },
    "Eb":{
      "i":"Eb Minor", // Eb Minor
      "iio":"F Dim5", // F DIM
      "III":"Gb Major", // Gb MAJOR
      "iv":"Ab Minor", // Ab MINOR
      "v":"Bb Minor", // Bb MINOR
      "VI":"B Major", // B MAJOR
      "VII":"Db Major", // Db Major
      "I":"Eb Major", // Eb MAJOR
      "ii":"F Minor", // F Minor
      "iii":"Gb Minor", // Gb MINOR
      "IV":"Ab Major", // Ab MAJOR
      "V":"Bb Major", // Bb MAJOR
      "vi":"B Minor", // B MINOR
      "viio":"Db Dim5", //Db DIM
    },
    "E":{
      "i":"E Minor", // E MINOR
      "iio":"F# Dim5", // F# DIM
      "III":"G Major", // G MAJOR
      "iv":"A Minor", // A MINOR
      "v":"B Minor", // B MINOR
      "VI":"C Major", // C MAJOR
      "VII":"D Major", // D MAJOR
      "I":"E Major", // E MAJOR
      "ii":"F# Minor", // F# MINOR
      "iii":"G Minor", // G MINOR
      "IV":"A Major", // A MAJOR
      "V":"B Major", // B MAJOR
      "vi":"C Minor", // C MINOR
      "viio":"D Dim5", // D DIM
    },
    "F":{
      "i":"F Minor", // F MINOR
      "iio":"G Dim5", // G DIM
      "III":"Ab Major", // Ab MAJOR
      "iv":"Bb Major", // Bb MAJOR
      "v":"C Minor", // C MINOR
      "VI":"Db Major", // Db Major
      "VII":"Eb Major", // Eb MAJOR
      "I":"F Major", // F MAJOR
      "ii":"G Minor", // G MINOR
      "iii":"Ab Minor", // Ab MINOR
      "IV":"Bb Major", // Bb MAJOR
      "V":"C Major", // C MAJOR
      "vi":"Db Minor", // Db MINOR
      "viio":"Eb Dim5", // Eb DIM
    },
    "Gb":{
      "i":"Gb Minor", // Gb MINOR
      "iio":"Ab Dim5", // Ab DIM
      "III":"A Major", //A MAJOR
      "iv":"B Minor",
      "v":"Db Minor",
      "VI":"D Major",
      "VII":"E Major",
      "I":"Gb Major",
      "ii":"Ab Minor",
      "iii":"A Minor",
      "IV":"B Major",
      "V":"Db Major",
      "vi":"D Minor",
      "viio":"E Dim5",
    },
    "G":{
      "i":"G Minor",
      "iio":"A Dim5",
      "III":"Bb Major",
      "iv":"C Minor",
      "v":"D Minor",
      "VI":"Eb Major",
      "VII":"F Major",
      "I":"G Major",
      "ii":"A Minor",
      "iii":"Bb Minor",
      "IV":"C Major",
      "V":"D Major",
      "vi":"Eb Minor",
      "viio":"F Dim5",
    },
    "Ab":{
      "i":"Ab Minor",
      "iio":"Bb Dim5",
      "III":"B Major",
      "iv":"Db Minor",
      "v":"Eb Minor",
      "VI":"E Major",
      "VII":"Gb Major",
      "I":"A Major",
      "ii":"Bb Minor",
      "iii":"B Minor",
      "IV":"Db Major",
      "V":"Eb Major",
      "vi":"E Minor",
      "viio":"Gb Dim5",
    },
    "A":{
      "i":"A Minor",
      "iio":"B Dim5",
      "III":"C Major",
      "iv":"D Minor",
      "v":"E Minor",
      "VI":"F Major",
      "VII":"G Major",
      "I":"A Major",
      "ii":"B Minor",
      "iii":"C Minor",
      "IV":"D Major",
      "V":"E Major",
      "vi":"F Minor",
      "viio":"G Dim5",
    },
    "Bb":{
      "i":"Bb Minor",
      "iio":"C Dim5",
      "III":"Db Major",
      "iv":"Eb Minor",
      "v":"F Minor",
      "VI":"Gb Major",
      "VII":"Ab Major",
      "I":"Bb Major",
      "ii":"C Minor",
      "iii":"Db Minor",
      "IV":"Eb Major",
      "V":"F Major",
      "vi":"Gb Minor",
      "viio":"Ab Dim5",
    },
    "B":{
      "i":"Bb Minor",
      "iio":"C# Dim5",
      "III":"D Major",
      "iv":"E Minor",
      "v":"F# Minor",
      "VI":"G Major",
      "VII":"A Major",
      "I":"B Major",
      "ii":"C# Minor",
      "iii":"D Minor",
      "IV":"E Major",
      "V":"F# Major",
      "vi":"G Minor",
      "viio":"A Dim5",
    }
  }
}
var intervals = ["Major","Minor"]//,"Major Pent.","Minor Pent.","Blues Major","Blues Minor","Mixolydian","Dorian","Lydian"]
