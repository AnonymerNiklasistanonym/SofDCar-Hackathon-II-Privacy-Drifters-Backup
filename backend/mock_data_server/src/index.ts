import express from 'express';

import rootRoute from "./routes/root"
import jsonRouteAs from "./routes/jsonAs"
import jsonRouteMs from "./routes/jsonMs"
import jsonRouteScb from "./routes/jsonScb"

const app = express();
const port = process.env.PORT || 3000;

app.use('/json_as/', jsonRouteAs)
app.use('/json_ms/', jsonRouteMs)
app.use('/json_scb/', jsonRouteScb)
app.use('/', rootRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
