import bcrypt from "bcrypt";

import prisma from "@/lib/prisma/utils/prismaClient.js";
const transporter = nodemailer.createTransport({
  // Configure your email service here
});


export const signIn = async (user) => {
  try {
    const email = user.email.trim();
    const password = user.password.trim();

    // Check if email and password are not empty.
    if (email === "" || password === "")
      return { error: "Fields can not be empty !" };

    // Check if email is valid.
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(regEx)) return { error: "Email is not valid !" };

    const existingUser = await prisma.user.findUniqueOrThrow({
      where: { email: email },
    });

    if (existingUser) {
      // Compare hash of passwords.
      if (!bcrypt.compareSync(password, existingUser.password))
        return { error: "Bad password !" };

      return {
        user: {
          id: existingUser.id,
          name: existingUser.name,
          email: existingUser.email,
          emailVerified: existingUser.emailVerified,
          image: existingUser.image,
        },
      };
    }
  } catch (error) {
    return { error };
  }
};

export const signUp = async (user) => {
  try {
    const firstname = user.firstname.trim();
    const lastname = user.lastname.trim();
    const email = user.email.trim();
    let password = user.password.trim();
    const mobile = user.mobile.trim();

  if (firstname === "" ||lastname === ""||email==="") return { error: "All Fields must not be empty !" };

  // Check if email is valid.
  const regEx =
    /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

  if (!email.match(regEx)) return { error: "Email is not valid !" };

    // Check if user already exists by email.
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) return { error: "Email already taken!" };

    // Hash the password.
    password = bcrypt.hashSync(password, 12);

    // Create user in DB.
    const newUser = await prisma.user.create({
      data: { firstname, lastname, email, password, mobile },
    });

    return { user: newUser };
  } catch (error) {
    return { error };
  }
};

export  async function forget(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a reset token (you can use a library like crypto to generate a secure token)
    const resetToken = 'generated-reset-token';

    // Save the token in the database or send it via email
    await prisma.verificationToken.create({
      data: {
        identifier: user.email,
        token: resetToken,
        expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Token expires in 24 hours
      },
    });

    // Send reset instructions to the user's email
    await transporter.sendMail({
      from: 'your@email.com',
      to: user.email,
      subject: 'Password Reset Instructions',
      text: `To reset your password, use this token: ${resetToken}`,
    });

    res.status(200).json({ message: 'Reset instructions sent' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


export  async function ResetPassword(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { identifier, token, newPassword } = req.body;

  try {
    const verificationToken = await prisma.verificationToken.findUnique({
      where: { identifier, token },
      select: { expires: true },
    });

    if (!verificationToken || new Date() > verificationToken.expires) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const user = await prisma.user.findUnique({ where: { email: identifier } });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Optionally, delete the verification token from the database
    // await prisma.verificationToken.delete({ where: { identifier, token } });

    res.status(200).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}