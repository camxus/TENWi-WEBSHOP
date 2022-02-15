
import {useMutation, useQuery} from '@apollo/client';
import NEWSLETTER_MUTATION from "../mutations/newsletter.js";
import {useState} from "react"
import styles from "../styles/newsletter.module.css"
import Mailchimp from 'mailchimp-api-v3'



const NewsletterSubmit = () => {
	const [email, setEmail] = useState("");
	const [errorHandler, setErrorHandler] = useState("");
	const [requestError, setRequestError] = useState(null);
	var mailchimp = Mailchimp(process.env.MAILCHIMP_API_KEY);

	const handler = (event) => {
        const value = event.target.value
		console.log(event.target.value)
        setEmail(value)
    }

	const [registerMutation, {
        data: registerResponse,
        loading: registerLoading,
    }] = useMutation(NEWSLETTER_MUTATION, {
        variables: {
            input: {email: email}
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
				if(error?.graphQLErrors?.[0]?.message  === "Für diese E-Mail-Adresse existiert bereits ein Kundenkonto. <a href=\"#\" class=\"showlogin\">Bitte anmelden.</a>")
				{
					setErrorHandler("email-exists")
				}
				else{
					setErrorHandler("error")
				}
            }
            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '', errorHandler)

        },
		onCompleted: () => {
			setErrorHandler("done")
           console.log("completed with", email)
        }
    });

	function addUserToMailchimp(email){
		mailchimp.post('/lists/id/members', {
			email_address : email,
			status : 'subscribed'
		  })
		  .then(function(results) {
			setErrorHandler("done")
		  })
		  .catch(function (err) {
			setErrorHandler("error")
            console.log("ERROR ", err)
		  })
	}
	const register = (event) => {
		event.preventDefault();
		addUserToMailchimp(email)
		// registerMutation()
		// console.log("completed with", email)
	}

	
    return(
	<div className={styles['email-group']}>
		<div className={styles.newsletter_header}>
			{/* SUBSCRIBE FOR PRE-ACCESS ON 17TH OF DECEMBER 6PM (CET) */}
		</div>
			<form onSubmit={register} className={styles['email']}>
				<input
					onChange={handler}
					type="text"
					value={email}
					placeholder="E-MAIL"
				/>
				<input
					type="submit"
					value={ registerLoading === true ? "SUBMITTING" : errorHandler === "done" ? "SUBMITTED" : errorHandler === "email-exists" ? "ALREADY REGISTERED" : errorHandler === "error" ? "INVALID E-MAIL" :  "SUBMIT" }
				/>
			</form>
	</div>
    )
}

export default NewsletterSubmit
