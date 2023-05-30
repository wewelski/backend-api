import app from "./app.js";
import config from "./utils/config.js";

const PORT = process.env.PORT || 8080;

app.get('/',(req,res) => {
  res.send('Hello World!');
})

app.listen(config.PORT, () => {
  console.log(`Listening to port: ${config.PORT}`);
});