import { useState } from "react";
import { SectionWrap } from "../../ui/sectionwrap/style";
import FlexContent, { GridContent } from "../../ui/wrappers";

export default function ContactPage() {
    const [ name, setName ] = useState("");
    const [ userMail, setUserMail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ subject, setSubject ] = useState("");

    //https://smtpjs.com/ 
    //SMTP js
    function sendEmail() {
        Email.send({
            SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
            To : 'them@website.com',
            From : userMail,
            Subject : subject,
            Body : message,
        }).then(
          message => alert(message)
        );
    }
        //https://smtpjs.com/ 
    //SMTP js
    // function sendEmail(event) {
    //   event.preventDefault();
    //     Email.send({
    //         SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
    //         To : 'trine.marie.sandberg@gmail.com',
    //         From : userMail,
    //         Subject : subject,
    //         Body : message,
    //     }).then(
    //       message => alert(message)
    //     );
    // }

    //https://medium.com/@Scofield_Idehen/smtp-js-send-email-without-a-server-from-the-browser-9c6babfa80d9
    // function sendEmail(event) {
    //   event.preventDefault();
    //   const email = {
    //     from: 'sender@example.com',
    //     to: 'trine.marie.sandberg@gmail.com',
    //     subject: 'Test email',
    //     text: 'This is a test email sent from the browser'
    //   }
    //   smtp.sendMail(email)
    //     .then(info => console.log(info))
    //     .catch(err => console.error(err))
    // }
    return(
        <GridContent>
            <h1>Get in touch</h1>
            <SectionWrap>
            <form onSubmit={sendEmail}>
                <label>
                    Name
                    <input 
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input 
                      type="email"
                      onChange={(e) => setUserMail(e.target.value)}
                    />
                </label>
                <label>
                    Subject
                    <input 
                      type="text" 
                      onChange={(e) => setSubject(e.target.value)}
                    />
                </label>
                <label>
                    Message
                    <input 
                      type="text"
                      onChange={(e) => e.target.value}
                    />
                </label>
                <button type="submit" value="send">SUBMIT</button>
            </form>
            </SectionWrap>
        </GridContent>
    )
};