import PocketBase from 'pocketbase'

export async function load() {
	const pb = new PocketBase('http://[::1]:8090')

	return {
		pb,
		files: await pb.collection('files').getList(1, 50),
	}
}
