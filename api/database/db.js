import serverlessMysql from "serverless-mysql";

const connectDB = serverlessMysql({
  config: {
    port: 3306,
    host: "localhost",
    database: "todo",
    user: "root",
    password: "",
  },
});

export default connectDB;
