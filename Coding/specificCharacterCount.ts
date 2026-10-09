export{}
let a = "helloa specifica helloa"

// total length
let withAcount = a.length

// g → global flag, meaning "replace all occurrences", not just the first one.
let withoutAcount = a.replace(/a/g, "").length

console.log(`${withoutAcount} without 'a', ${withAcount} with 'a'`)
