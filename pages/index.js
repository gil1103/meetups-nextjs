// will be routed under our-domain.com/ (defult routing)
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';
import { Fragment } from 'react';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="browse a huge list of highly active React meetups!"
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
