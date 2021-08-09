// alternative way:dismiss the new-meetup folder and name the file new-meetup.js
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from "next/router";
import {Fragment} from 'react';
import Head from 'next/head';

function NewMeetupPage() {
	const router = useRouter()
	const addMeetupHandler = async (enteredMeetupData) => {
		const response = await fetch('/api/api-new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-type': 'application/json'
			}
		});

		const data = response.json()
		console.log(data);

		router.push('/') // if we dont want to have the option of going back we shoul use replace
	};

	return (
		<Fragment>
			<Head>
				<title>Add a New Meetup</title>
				<meta 
				name='description'
				content='Add your own meetups and create amazing networking opportunities'
				/>
			</Head>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />;
		</Fragment>
	)
}

export default NewMeetupPage;
