import { useState } from "react";
import { SectionWrap } from "../../ui/sectionwrap/style";
import FlexContent, { GridContent } from "../../ui/wrappers";
import { ContentWrap, Form, Heading, Input, Label, Background, Submit } from "./style";

export default function ContactPage() {
    const [ name, setName ] = useState("");
    const [ userMail, setUserMail ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ subject, setSubject ] = useState("");

    async function sendEmail(e) {
        e.preventDefault();

        const formData = { name, userMail, message, subject };
        const res = await fetch("http://localhost:3001/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (res.ok) {
            console.log(formData)
            alert("Message sent successfully!");
        } else {
            alert("Something went wrong. Try again.");
        }
    }

    return(
        <ContentWrap>
            <Form onSubmit={sendEmail}>
            <Background />
                <Heading>Get in touch</Heading>
                <Label>
                    Name
                    <Input 
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                </Label>
                <Label>
                    Email
                    <Input 
                      type="email"
                      onChange={(e) => setUserMail(e.target.value)}
                    />
                </Label>
                <Label>
                    Subject
                    <Input 
                      type="text" 
                      onChange={(e) => setSubject(e.target.value)}
                    />
                </Label>
                <Label>
                    Message
                    <Input 
                      type="text"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                </Label>
                <Submit type="submit" value="send">SUBMIT</Submit>
            </Form>
        </ContentWrap>
    )
};