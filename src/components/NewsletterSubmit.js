
import {useMutation, useQuery} from '@apollo/client';
import NEWSLETTER_MUTATION from "../mutations/newsletter.js";
import {useState} from "react"
import styles from "../styles/newsletter.module.css"


const NewsletterSubmit = () => {
	const [email, setEmail] = useState("");
	const [requestError, setRequestError] = useState(null);


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
				registerLoading = "error"
            }
            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '')

        },
		onCompleted: () => {
		 	registerLoading = "done"
           console.log("completed with", email)
        }
    });

	const register = (event) => {
		event.preventDefault();
		registerMutation()
		// console.log("completed with", email)
	}


    return(
	<div className={styles['email-group']}>
		<div className={styles.newsletter_header}>SUBSCRIBE FOR PRE-ACCESS ON 17TH OF DECEMBER 6PM (CET)</div>
			<form onSubmit={register} className={styles['email']}>
				<input
					onChange={handler}
					type="text"
					value={email}
					placeholder="E-MAIL"
				/>
				<input
					type="submit"
					value={ registerLoading ? "SUBMITTING" : registerLoading === "done" ? "SUBMITTED" : "SUBMIT" }
				/>
			</form>
	</div>
    )
}

export default NewsletterSubmit
