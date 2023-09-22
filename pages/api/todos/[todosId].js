
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

    if (req.method === "GET") {
      const id = req.query.todosId;
      console.log(id,"id-back")
      try {
        const user = await User.findOne({_id:id})
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
  