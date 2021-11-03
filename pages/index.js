// will be routed under our-domain.com/ (defult routing)
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>My Meetups</title>
				<meta
					name="description"
					content="browse a huge list of highly active meetups!"
				/>
			</Head>
			<MeetupList meetups={props.meetups} />;
		</Fragment>
	);
}

export async function getStaticProps() {
	const client = await MongoClient.connect(
		'mongodb+srv://gil:test1234@cluster0.l3sni.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupCollection = db.collection('meetups');

	const meetups = await meetupCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString()
			}))
		},
		revalidate: 1
		// is the number in sec, nextjs will wait untill regenerate the page for incoming req
		// this ensure the page will be regenerated from the server after deployement
	};
}

export default HomePage;

// const MEETUPS = [
// 	{
// 		id: 'm1',
// 		image:
// 			'https://corporette.com/wp-content/uploads/2017/03/best-places-for-informal-business-meetings-for-women-lawyers-consultants-and-more.jpg',
// 		title: 'A first Meetup',
// 		address: 'Some address 5, 12345',
// 		description: 'this is a first meetup!'
// 	},
// 	{
// 		id: 'm2',
// 		image:
// 			'https://www.anywhere.pl/wp-content/uploads/2019/07/stanislawie-1024x535-2.jpg',
// 		title: 'A second Meetup',
// 		address: 'Some address 8, 89678',
// 		description: 'this is a second meetup!'
// 	},
// 	{
// 		id: 'm3',
// 		image:
// 			'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/THE-BURJ-AL-ARAB-HOTEL-Al-Muntaha-lounge-bar.jpg',
// 		title: 'THE BURJ AL ARAB HOTEL',
// 		address: 'Al Muntaha lounge bar',
// 		description:
// 			'One of the most dazzling and spectacular luxury lounge bars in the world atop the world’s most luxurious seven-star hotel the Burj Al Arab on the Arabian Gulf, one is awed into admiring silence by the sweeping 180 degrees, wide-angled panoramas across the blue ocean and the City of Gold in resplendent glory'
// 	},
// 	{
// 		id: 'm4',
// 		image:
// 			'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/Ritz-Carlton-Hong-Kong-Luxury-bar-lounge-seating.jpg',
// 		title: 'RITZ CARLTON',
// 		address: 'HONG KONG',
// 		description:
// 			'Jaw dropping, spectacular views freeze your gaze across the stunningly picturesque Victoria Harbor below and beyond at 490 meters, the highest floor in this grand luxury landmark. As the ever-alive bejeweled city shimmers in its global grandeur, we take in the tizzy heights in strobe neon psychedelia at this highest bar in the world at the world’s highest super grand luxury five-star hotel'
// 	},
// 	{
// 		id: 'm5',
// 		image:
// 			'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/Luxury-hotel-bar-decor-CAMIRAL-hotel.jpg',
// 		title: 'HOTEL CAMIRAL',
// 		address: 'PGA Catalunya resort',
// 		description:
// 			'Relaxed and informal, the Lounge Bar captures the passion and personality of its location. The menu offers the right balance between a range of local dishes, all made with market ingredients of the very highest quality and type of the Catalan area and an international offer that provides a choice of lighter dining options alongside classic bar favorites and fresh seafood, all of the course complemented by a unique selection of local and world wines'
// 	},
// 	{
// 		id: 'm6',
// 		image:
// 			'https://www.restaurantinteriordesign.eu/wp-content/uploads/2018/08/Brabbu-Contract-bar-lounge-seating-ideas.jpg',
// 		title: 'NYC hotel’s lounge bar seating',
// 		address: 'New York',
// 		description:
// 			'This NYC hotel’s lounge bar seating combines the comfort of your own living room with the drama of a lavishly adorned theater. A stainless-steel fireplace anchors the two-story room and reflects its energy. Richly textured chairs and couches, in muted shades of primary colors, are grouped for conversation'
// 	}
// ];

// export async function getServerSideProps(contex) { // run for every req-should be used for data changes very frequentely
// 	const req = contex.req;
// 	const res = contex.res;

//   //fetch data from API

// 	return {
// 		props: {
//       meetups: MEETUPS
//     }
// 	};
// }
