const API_BASE_ADDRESS = 'http://www.osfocus.com/lb-api';
export default class Api {
	static fetchProducts(payload) {
		const uri = API_BASE_ADDRESS + "/products";
		return fetch(uri, {
			method: 'POST',
		   	headers: {
				'Accept':'application/json',
				'Content-type':'application/json'
			},
			body:JSON.stringify(payload)
       });
	}
}