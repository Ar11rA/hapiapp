import mailer from 'nodemailer';
import passwordGenerator from 'generate-password';
import Boom from 'boom';

const sendPassword = async (to, from='aritra119.26@gmail.com', subject='New Password') => {
  try {
    const transporter = mailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'aritra119.26@gmail.com',
          pass: 'Caljam667!'
      }
     });
    const password = passwordGenerator.generate({
      length: 8,
      numbers: true
    })
    const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: password
    };
    const reply = await transporter.sendMail(mailOptions)
    return password
  }
  catch(exception) {
    throw Boom.badImplementation('Mail not sent');
  }
}

export default { sendPassword }