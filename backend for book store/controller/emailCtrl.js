import asyncHandler from "express-async-handler"
import sendEmail from "../ulits/nodeMailer.js";
import validateMongoId from "../ulits/validateMongodbId.js";
import User from "../models/userModel.js";


const sendMail = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoId(id);
  console.log("Product created", id )
  const getSingUser = await User.findById(id);
  const getSenderEmail = getSingUser.email;
  console.log(req.body)
  try {
    const { email, text } = req.body;
    const subject = "New Order";

    const emailBody = `
      Name: ${req.body.name}
      Address: ${req.body.address}
      Phone: ${req.body.phone}
      ZIP: ${req.body.zip}
      Country: ${req.body.country}
      BuyerEmail: ${getSenderEmail}
    `;

    sendEmail({
      to: email,
      subject: subject,
      text: emailBody,
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    // Handle the error appropriately
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});



export {sendMail};