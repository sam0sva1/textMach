onmessage = function(e) {
	if(e.data.addThis !== undefined) {
		this.postMessage({result: e.data.a + e.data.b});
	}
};