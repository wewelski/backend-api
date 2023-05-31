import app from "./app.js";
import config from "./utils/config.js";

const PORT = config.PORT;

app.get('/',(req,res) => {
  res.send('Hello World!');
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});