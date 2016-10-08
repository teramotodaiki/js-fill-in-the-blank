true
( true ) == true
( 1 == 1 ) == true
( 1 == 2 ) != true
( i == N ) == true
( N == i ) != true
( 1 == 2 ) == false
( i == i ) == false
( i == N ) == ( N == N )
( N == i ) != ( i == N )
( B == i ) == ( N == i )
( i == B ) != ( i == i )

true && true
true && i
( 1 == 1 ) && true
( N == i ) && true
true && ( i == N )
( N == i ) && ( i == N )

true || false
false || i
( 1 == 1 ) || false
( N == i ) || false
false || ( i == N )
( i == N ) || ( N == N )
