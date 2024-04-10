import connectDB from "../database/db.js";

export const getNote = async (req, res) => {
  try {
    const data = await connectDB.query("select * from notes");
    return res.status(200).json({ message: "Success", data: data });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
export const postNote = async (req, res) => {
  try {
    const body = await req.body;
    const params = await req.params.id;
    return res
      .status(200)
      .json({ msg: "hola", "nos enviastes esto": [body, params] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};
