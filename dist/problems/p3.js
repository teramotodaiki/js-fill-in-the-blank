true == true
( true && true ) == true
( true && i ) == true
false == false
( true && false ) == false
( false && i ) == i
( true && i ) == ( false && true )
( false && i ) == ( true && i )
( B && B && i ) == ( i && B && B )
( B && i && i ) == ( i && i && B )

( true || true ) == true
( true || false ) == true
( false || i ) == false
( false || i ) == ( true || false )
( true || i ) == ( false || i )
( i || B || B ) == ( true || B )
( B || B || i ) == ( i || B || B )
( i || B || i ) != ( false || i || false )
