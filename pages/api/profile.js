import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { verifyPassword } from "@/utils/auth";
import { getSession } from "next-auth/react";
async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to DB" });
  }
  const session = await getSession({ req });

  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "You are not logged in!" });
  }
  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User doesnt exsit!" });
  }
  if (req.method === "POST") {
    const { name, lastName, password } = req.body;

    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return res
        .status(422)
        .json({ status: "failed", message: "password isincorrect!" });
    }
    user.name = name;
    user.lastName = lastName;
    user.save();
    res.status(200).json({
      status: "success",
      data: { name, lastName, email: session.user.email },
    });
  }else if(req.method==="GET"){
    return res.status(200).json({
      status: "success",
      data: { name:user.name, lastName:user.lastName, email:user.email },
    });
  }
}
export default handler;
