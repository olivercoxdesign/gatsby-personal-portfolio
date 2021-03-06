import React from "react";
import { navigate } from "gatsby";
import cloudinary from 'cloudinary-core'

function encode(data) {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
}

handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

componentDidMount() {
    var cl = cloudinary.Cloudinary.new({cloud_name: "olivercoxdesign"}); 
    cl.responsive();
  }

handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
    "form-name": form.getAttribute("name"),
    ...this.state
    })
})
.then(() => navigate(form.getAttribute("action")))
.catch(error => alert(error));
};

render() {

return (

    <div className="form-body-container">
        <div className="form-body-sec1">
            <form className="form-body"
            name="contact-form"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}

            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                </label>
            </p>
            <div className="form-name">
                <label>
                    Name
                    <input type="text" name="name"  autoComplete="user-password" onChange={this.handleChange} required />
                </label>
            </div>
            <div className="form-email">
                <label>
                    Email
                    <input type="email" name="email" onChange={this.handleChange} required />
                </label>
            </div>
            <div className="form-messagebox">
                <label>
                    Message
                    <textarea name="message" rows="3" onChange={this.handleChange} required />
                </label>
            </div>
            <div className="form-recaptcha" data-netlify-recaptcha></div>
            <div className="form-submit">
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
        <div className="form-body-sec2">
        <img 
            data-src="https://res.cloudinary.com/olivercoxdesign/image/upload/q_auto/w_auto,c_scale/dpr_auto/v1552239597/oliverjamescox.com/project%20media/contact-main.svg"
            className="cld-responsive"
            alt="simple letter illustration in the brand colours for the contact form"
        />
        </div>
    </div>
);
}
}