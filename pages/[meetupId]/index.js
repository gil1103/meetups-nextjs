// alternative way:dismiss the dynamic folder [meetupId] and name the file[meetupId].js
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import { Fragment } from 'react';
import MeetupDetail from './../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>
			<MeetupDetail
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</Fragment>
	);
}

export async function getStaticPaths() {
	// should be used for dynamic pages (when id changes)
	const client = await MongoClient.connect(
		'mongodb+srv://gil:test1234@cluster0.l3sni.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupCollection = db.collection('meetups');

	const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: false, // if visiting a page which its id doesnt exit-he will get 404 page
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() }
		}))
	};
}

export async function getStaticProps(context) {
	const meetupId = context.params.meetupId;

	// fetch data for a single meetup

	const client = await MongoClient.connect(
		'mongodb+srv://gil:test1234@cluster0.l3sni.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();

	const meetupCollection = db.collection('meetups');

	const selectedMeetup = await meetupCollection.findOne({
		_id: ObjectId(meetupId)
	});

	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description
			}
		}
	};
}

export default MeetupDetails;
