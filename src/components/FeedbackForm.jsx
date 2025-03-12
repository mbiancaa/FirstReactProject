import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import '../styles/FeedbackForm.css';

const FeedbackForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        message: "",
        level: "good"
    };

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(2, "Too short!").max(50, "Too long!").required("Please complete this field."),
        email: Yup.string().email("Please enter a valid email address!").required("Please complete this field."),
        password: Yup.string().min(8, "Too short").max(30, "Too long").required("Please complete this field."),
        message: Yup.string().min(3, "Too short").max(256, "Too long").required("Please complete this field."),
        level: Yup.string().oneOf(["good", "neutral", "bad"]).required("Please complete this field.")
    });

    const usernameId = useId();
    const emailId = useId();
    const passwordId = useId();
    const messageId = useId();
    const levelId = useId();

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
        >
            <Form>
                <div className="formItem">
                    <label htmlFor={usernameId}>Username</label>
                    <Field className="formField" type="text" name="username" id={usernameId} />
                    <ErrorMessage className="error" name="username" component="span" />
                </div>

                <div className="formItem">
                    <label htmlFor={emailId}>Email</label>
                    <Field className="formField" type="email" name="email" id={emailId} />
                    <ErrorMessage className="error" name="email" component="span" />
                </div>

                <div className="formItem">
                    <label htmlFor={passwordId}>Password</label>
                    <Field className="formField" type="password" name="password" id={passwordId} />
                    <ErrorMessage className="error" name="password" component="span" />
                </div>

                <div className="formItem">
                    <label htmlFor={messageId}>Text message</label>
                    <Field className="formField" as="textarea" name="message" id={messageId} rows="5" />
                    <ErrorMessage className="error" name="message" component="span" />
                </div>

                <div className="formItem">
                    <label htmlFor={levelId}>Select level</label>
                    <Field className="formField" as="select" name="level" id={levelId}>
                        <option value="good">Good</option>
                        <option value="neutral">Neutral</option>
                        <option value="bad">Bad</option>
                    </Field>
                    <ErrorMessage className="error" name="level" component="span" />
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default FeedbackForm;