
import User from "@/models/User";
import connectDB from "@/utils/connectDB";


export default async function handler(req, res) {
    try {
        await connectDB();
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "Error in connecting to database" });
      return;
    }
  
    if (req.method === "PATCH") {
      const id = req.query.profileId;
      const data = req.body.data;
      console.log(id,'*************id***********')

      try {
        const user = await User.findOne({email: id });
        user.name = data.name;
        user.lastName = data.lastName;
        user.email = data.email;
        user.updatedAt = Date.now();
        user.save();
  

        res.status(200).json({ status: "success", data: user });
      } catch (err) {
        console.log(err.message);
        res.status(500).json({
          status: "failed",
          message: "Error in retrieving data from database",
        });
      }
    }
  }