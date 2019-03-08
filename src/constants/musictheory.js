var numKeys = 88;
var keys = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
var chromaticScale = ["C","B","A#","A","G#","G","F#","F","E","D#","D","C#"]
var keyboard = ["A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"]
var chords = ["I","III","IV","V","VI","VII","i","ii","iio","iii","iv","v","vi","viio"]
var noteNumbers = ["1 Note", "2 Notes", "3 Notes", "4 Notes", "5 Notes", "6 Notes"]

// C = 0, C# = 1, D = 2, D# = 3, E = 4, F = 5, F# = 6, G = 7, G# = 8, A = 9, A# = 10, B = 11
//    12      13     14      15     16     17      18     19      20     21       22      23
// TODO add 7th, add 9th, add 13th, sepereate into chords eg
var chordNotes = {
  "C Major":[[0,4,7],[4,7,12],[7,12,16],[11,14,21]],
  "D Minor":[[2,5,9],[5,9,14],[9,14,17]],
  "E Minor":[[4,7,11],[7,11,16],[11,16,19]],
  "F Major":[[5,9,12],[9,12,17],[12,17,21]],
  "G Major":[[7,11,14],[11,14,19],[14,19,23]],
  "A Minor":[[9,12,16],[12,16,21],[16,21,24]],
  "B Dim5":[[11,14,17],[14,17,23],[17,23,26]],
  "C Minor":[[0,3,7],[3,7,12],[7,12,15]],
  "D Dim5":[[2,5,8],[5,8,14],[8,14,17]],
  "E Major":[[4,8,11],[8,11,16],[11,16,20]],
  "F Minor":[[5,8,12],[8,12,17],[12,17,20]],
  "G Minor":[[7,10,14],[10,14,19],[14,19,22]],
  "A Minor":[[9,13,16],[13,16,21],[16,21,25]],
  "B Major":[[11,15,18],[15,18,23],[18,23,27]],
  "Db Major":[[1,5,8],[5,8,13],[8,13,17]],
  "Eb Minor":[[3,6,10],[6,10,15],[10,15,18]],
  "Gb Major":[[6,10,13],[10,13,18],[13,18,22]],
  "Ab Major":[[8,12,15],[12,15,20],[15,20,24]],
  "Bb Minor":[[10,13,17],[13,17,22],[17,22,25]],
  "C Dim5":[[0,3,6],[3,6,12],[6,12,15]],
  "Db Minor":[[1,4,8],[4,8,13],[8,13,16]],
  "Eb Dim5":[[3,6,9],[6,9,15],[9,15,17]],
  "Gb Minor":[[6,9,13],[9,13,18],[13,18,21]],
  "Ab Minor":[[8,11,15],[11,15,20],[15,20,23]],
  "Bb Major":[[10,14,17],[14,17,22],[17,22,26]],
  "D Major":[[2,6,9],[6,9,14],[9,14,18]],
  "E Minor":[[4,7,11],[7,11,16],[11,16,19]],
  "F# Minor":[[6,9,13],[9,13,18],[13,18,21]],
  "A Major":[[9,13,16],[13,16,21],[16,21,25]],
  "B Minor":[[11,14,18],[14,18,23],[18,23,26]],
  "C# Dim5":[[1,4,7],[4,7,13],[7,13,16]],
  "E Dim5":[[4,7,10],[7,10,16],[10,16,19]],
  "F# Major":[[6,10,13],[10,13,18],[13,18,22]],
  "C# Major":[[1,5,8],[5,8,13],[8,13,17]],
  "Eb Major":[[3,7,10],[7,10,15],[10,15,19]],
  "F Dim5":[[5,8,11],[8,11,17][11,17,20]],
  "D# Dim5":[[3,6,9],[6,9,15],[9,15,18]],
  "F# Dim5":[[6,9,12],[9,12,18],[12,18,21]],
  "G# Major":[[8,12,15],[12,15,20],[15,20,24]],
  "E Dim5":[[4,7,10],[7,10,16],[10,16,19]],
  "G Dim5":[[7,10,13],[10,13,19],[13,19,22]],
  "Ab Dim5":[[8,11,14],[11,14,20],[14,20,23]],
  "A Dim5":[[9,13,15],[13,15,21],[15,21,24]],
  "Bb Dim5":[[10,13,16],[13,16,22],[16,22,25]],
  "C# Minor":[[1,4,8],[4,8,13],[8,13,16]],
  "G# Dim5":[[8,11,14],[11,14,20],[14,20,23]],
  "D# Minor":[[3,6,10],[6,10,15],[10,15,18]],
  "G# Minor":[[8,11,15],[11,15,20],[15,20,23]],
  "A# Dim5":[[10,13,16],[13,16,22],[16,22,25]],
  "D# Major":[[3,7,10],[7,10,15],[10,15,19]],
  "A# Major":[[10,14,17],[14,17,22],[17,22,26]],
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
      "VI":"A Minor", //A MAJOR
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
    // C = 0, C# = 1, D = 2, D# = 3, E = 4, F = 5, F# = 6, G = 7, G# = 8, A = 9, A# = 10, B = 11
    //    12      13     14      15     16     17      18     19      20     21       22      23
    //    24      25     26      27
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
    // C = 0, C# = 1, D = 2, D# = 3, E = 4, F = 5, F# = 6, G = 7, G# = 8, A = 9, A# = 10, B = 11
    //    12      13     14      15     16     17      18     19      20     21       22      23
    //    24      25     26      27
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
      "i":[[1,4,8],[4,8,13],[8,13,16]], // Db MINOR
      "iio":[[3,6,9],[6,9,15],[9,15,17]], // Eb DIM
      "III":[[4,8,11],[8,11,16],[11,16,20]], // E MAJOR
      "iv":[[6,9,13],[9,13,18],[13,18,21]], // Gb MINOR
      "v":[[8,11,15],[11,15,20],[15,20,23]], // Ab MINOR
      "VI":[[9,13,16],[13,16,21],[16,21,25]], // A MAJOR
      "VII":[[11,15,18],[15,18,23],[18,23,27]], // B MAJOR
      "I":[[1,5,8],[5,8,13],[8,13,17]], // Db Major
      "ii":[[3,6,10],[6,10,15],[10,15,18]], // Eb Minor
      "iii":[[4,7,11],[7,11,16],[11,16,19]], // E MINOR
      "IV":[[6,10,13],[10,13,18],[13,18,22]], // Gb MAJOR
      "V":[[8,12,15],[12,15,20],[15,20,24]], // Ab MAJOR
      "vi":[[9,13,16],[13,16,21],[16,21,24]], // A MINOR
      "viio":[[11,14,17],[14,17,23],[17,23,26]], // B DIM
    },
    "D":{
      "i":[[2,5,9],[5,9,14],[9,14,17]], // D MINOR
      "iio":[[4,7,10],[7,10,16],[10,16,19]], // E DIM
      "III":[[5,9,12],[9,12,17],[12,17,21]], // F MAJOR
      "iv":[[7,10,14],[10,14,19],[14,19,22]], // G MINOR
      "v":[[9,13,16],[13,16,21],[16,21,24]], // A MINOR
      "VI":[[10,14,17],[14,17,22],[17,22,26]], // Bb MAJOR
      "VII":[[0,4,7],[4,7,12],[7,12,16]], // C MAJOR
      "I":[[2,6,9],[6,9,14],[9,14,18]], // D MAJOR
      "ii":[[4,7,11],[7,11,16],[11,16,19]], // E MINOR
      "iii":[[5,8,12],[8,12,17],[12,17,20]], // F Minor
      "IV":[[7,11,14],[11,14,19],[14,19,23]], // G MAJOR
      "V":[[9,13,16],[13,16,21],[16,21,25]], //A MAJOR
      "vi":[[10,13,17],[13,17,22],[17,22,25]], // Bb MINOR
      "viio":[[0,3,6],[3,6,12],[6,12,15]], // C DIM
    },
    "Eb":{
      "i":[[3,6,10],[6,10,15],[10,15,18]], // Eb Minor
      "iio":[[5,8,11],[8,11,17][11,17,20]], // F DIM
      "III":[[6,10,13],[10,13,18],[13,18,22]], // Gb MAJOR
      "iv":[[8,11,15],[11,15,20],[15,20,23]], // Ab MINOR
      "v":[[10,13,17],[13,17,22],[17,22,25]], // Bb MINOR
      "VI":[[11,15,18],[15,18,23],[18,23,27]], // B MAJOR
      "VII":[[1,5,8],[5,8,13],[8,13,17]], // Db Major
      "I":[[3,7,10],[7,10,15],[10,15,19]], // Eb MAJOR
      "ii":[[5,8,12],[8,12,17],[12,17,20]], // F Minor
      "iii":[[6,9,13],[9,13,18],[13,18,21]], // Gb MINOR
      "IV":[[8,12,15],[12,15,20],[15,20,24]], // Ab MAJOR
      "V":[[10,14,17],[14,17,22],[17,22,26]], // Bb MAJOR
      "vi":[[11,14,18],[14,18,23],[18,23,26]], // B MINOR
      "viio":[[1,4,7],[4,7,13],[7,13,16]], //Db DIM
    },
    "E":{
      "i":[[4,7,11],[7,11,16],[11,16,19]], // E MINOR
      "iio":[[6,9,12],[9,12,18],[12,18,21]], // F# DIM
      "III":[[7,11,14],[11,14,19],[14,19,23]], // G MAJOR
      "iv":[[9,12,16],[12,16,21],[16,21,24]], // A MINOR
      "v":[[11,14,18],[14,18,23],[18,23,26]], // B MINOR
      "VI":[[0,4,7],[4,7,12],[7,12,16]], // C MAJOR
      "VII":[[2,6,9],[6,9,14],[9,14,18]], // D MAJOR
      "I":[[4,8,11],[8,11,16],[11,16,20]], // E MAJOR
      "ii":[[6,9,13],[9,13,18],[13,18,21]], // F# MINOR
      "iii":[[7,10,14],[10,14,19],[14,19,22]], // G MINOR
      "IV":[[9,13,16],[13,16,21],[16,21,25]], // A MAJOR
      "V":[[11,15,18],[15,18,23],[18,23,27]], // B MAJOR
      "vi":[[0,3,7],[3,7,12],[7,12,15]], // C MINOR
      "viio":[[2,5,8],[5,8,14],[8,14,17]], // D DIM
    },
    "F":{
      "i":[[5,8,12],[8,12,17],[12,17,20]], // F MINOR
      "iio":[[7,10,13],[10,13,19],[13,19,22]], // G DIM
      "III":[[8,12,15],[12,15,20],[15,20,24]], // Ab MAJOR
      "iv":[[10,14,17],[14,17,22],[17,22,26]], // Bb MAJOR
      "v":[[0,3,7],[3,7,12],[7,12,15]], // C MINOR
      "VI":[[1,5,8],[5,8,13],[8,13,17]], // Db Major
      "VII":[[3,7,10],[7,10,15],[10,15,19]], // Eb MAJOR
      "I":[[5,9,12],[9,12,17],[12,17,21]], // F MAJOR
      "ii":[[7,10,14],[10,14,19],[14,19,22]], // G MINOR
      "iii":[[8,11,15],[11,15,20],[15,20,23]], // Ab MINOR
      "IV":[[10,14,17],[14,17,22],[17,22,26]], // Bb MAJOR
      "V":[[0,4,7],[4,7,12],[7,12,16]], // C MAJOR
      "vi":[[1,4,8],[4,8,13],[8,13,16]], // Db MINOR
      "viio":[[3,6,9],[6,9,15],[9,15,17]], // Eb DIM
    },/*
    "Gb":{
      "i":[[6,9,13],[9,13,18],[13,18,21]], // Gb MINOR
      "iio":[[8,11,14],[11,14,20],[14,20,23]], // Ab DIM
      "III":[[9,13,16],[13,16,21],[16,21,25]], //A MAJOR
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    },
    "G":{
      "i":
      "iio":
      "III":
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    },
    "Ab":{
      "i":
      "iio":
      "III":
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    },
    "A":{
      "i":
      "iio":
      "III":
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    },
    "Bb":{
      "i":
      "iio":
      "III":
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    },
    "B":{
      "i":
      "iio":
      "III":
      "iv":
      "v":
      "VI":
      "VII":
      "I":
      "ii":
      "iii":
      "IV":
      "V":
      "vi":
      "viio":
    }*/
  }

}
var intervals = ["Major","Minor"]//,"Major Pentatonic","Minor Pentatonic","Blues Major","Blues Minor","Mixolydian","Dorian","Lydian"]
