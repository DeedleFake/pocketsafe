import PocketBase from 'pocketbase'

export const ssr = false

export async function load() {
	const pb = new PocketBase(window.location.origin)

	return {
		pb,
		files: await pb.collection('files').getList(1, 50),
	}
}
