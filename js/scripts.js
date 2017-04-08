function rysujChoinke(n) {
	for ( var k = 1 ; k < n; k++) {
		var odstep = ' ';
		var odstepyWsz = '';

		for (var o = 1; o < n-k; o++ ) {
			odstepyWsz = odstepyWsz + odstep;
		}

		var star = odstepyWsz + '*';
		for ( var j = 1 ; j < k*2-1; j++) {
			star  += '*';
		}
		console.log(star);
	}
	
}

rysujChoinke(8);
//zrobiłem to z dużą pomocą - szczerze to wogóle nie rozumiem tego zadania - prosiłbym o krótki komentarz dlaczego tj. tak a nie inaczej.