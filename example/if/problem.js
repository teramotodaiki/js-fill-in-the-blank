const a = 1 ; if ( true ) a == 1
const a = N ; if ( true ) a == i
const a = N ; if ( true ) a == N - i
const a = 2 ; if ( false ) a == 1 ; else a == 2
const a = N ; if ( false ) a == N ; else a == i
const a = N ; if ( false ) a == N ; else a == N - i
const a = 1 ; const b = 10 ; if ( a == 1 ) b == 10 ; else b == 0
const a = N ; const b = 10 ; if ( a == i ) b == 10 ; else b == 0
const a = 1 ; const b = 0 ; if ( a == i ) b == 10 ; else b == 0
const a = N ; const b = N ; if ( a == b ) b == i ; else b == i
const a = N ; const b = i ; if ( a == N ) b == 10 ; else b == 0
const a = i ; const b = 10 ; if ( a + b == i ) a == b ; else b == 0
const a = N ; const b = 7 ; if ( a == N ) b == 7 ; else b == i
const a = i ; const b = N ; if ( a == N ) b == N ; else b == a - i
const a = N ; const b = i ; if ( a == N ) i == a ; else b == a
const a = N ; const b = a + N ; if ( b == i ) b == i ; else b == N
const a = N ; const b = a + i ; if ( b == N ) a == i ; else a == N
const a = i ; const b = N - i ; if ( b == N ) a == b + N ; else b == N - a
const a = N ; const b = i ; const c = a + b ; if ( a + b == N ) a - b == c ; else a + b == c
const a = N ; const b = i ; const c = i - a + b ; if ( c == N ) a == c ; else b == c
