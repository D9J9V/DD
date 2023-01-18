import { NFTStorage, File } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU4NTAxMGNkYjBhQzM4MTBCQTQ0ZUQ0OTRDMUZFMDVmNjc4NkYyNTMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MTE1MzIzMjM0MiwibmFtZSI6IkhhY2thdGhvbiJ9.OelGDdECif6yCsFd-Zl8VGz6oCICPe7-0zCjwhI8vXY' })

async function main() {
	const metadata = await client.store({
		name: 'Pinpie',
		description:'Pin is not delicious beef!',
		image: new File(
			[
			/* data */
			],
			'1.jpg',
			{ type: 'image/jpg' }
		),
	})
	console.log(metadata)
	//ipfs://
}

main()