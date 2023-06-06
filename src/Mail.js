class Mailer {
  constructor(){
    this.emailUrl = process.env.EMAIL_URL;
  }
  async  send(recipient, subject, body){
    //return Promise.reject("There was an error sending the message.");
    let data = {
      recipient: recipient,
      subject: subject,
      body: body
    };
    if (this.emailUrl == null) {
      throw new Error("You have to configure EMAIL_URL in .env");
    }
    let response = await fetch(this.emailUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    // let resp = await Promise.resolve(response.json());
    // if (resp.success == false){
    //   throw new Error(resp.message);
    // }
    let result = await response.json();
    if (result.success == false){
      throw new Error(result.message);
    }
    console.log(result.message);
  }

  async sendWxMail(){
    let recipient = "mwpaulsen86@gmail.com";
    let subject = "This is the subject";
    let body = "this is the email body";

    await this.WxMail(recipient, subject, body);
  }

}

export default Mailer;