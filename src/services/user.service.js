
export class UserService {

	static async search(email) {

		const res = await fetch('http://localhost:4000/user?email=' + email, {
			headers: {
			Authorization: UserService.getToken()
			}
		});
		return res.json();

	}

}