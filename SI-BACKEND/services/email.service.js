const nodemailer = require("nodemailer");
const nodemailerConfig = require("../utils/nodemailer.config");

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendWelcomeEmail = async (toEmail, username, password) => {
  const mailOptions = {
    from: "shecancodeinventorymanagement@gmail.com",
    to: toEmail,
    subject: "Welcome to SheCanCode Inventory Management",
    text: `Hello ${username},\nWelcome to SheCanCode Inventory Management!!!\n 
    \nYour username is : ${username}\nYour password is : ${password} `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

const sendOTPEmail = async (toEmail, username, password) => {
  const mailOptions = {
    from: "shecancodeinventorymanagement@gmail.com",
    to: toEmail,
    subject: "Reset Password",
    text: `Hello ${username},\n Your new password is ${password}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


// send request email
const createEmailTable = async (order, toEmail) => {
  const tableRows = order.products.map((product) => {
    return `<tr>
              <td>${product.product}</td>
              <td>${product.quantity}</td>
              <td>${product.price} RWF</td>
              <td>${product.totalprice} RWF</td>
            </tr>`;
  });

  const emailTable = `
    <table border="1">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows.join("")}
      </tbody>
    </table>
    <p>Status: ${order.status}</p>
    <p>Total Amount: ${order.totalAmount}</p>
    <p>Created At: ${order.createdAt}</p>
    <p>Updated At: ${order.updatedAt}</p>
  `;

  const mailOptions = {
    from: "shecancodeinventorymanagement@gmail.com",
    to: toEmail,
    subject: "Welcome to SheCanCode Inventory Management",
    html: emailTable,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = { sendWelcomeEmail, sendOTPEmail, createEmailTable };
