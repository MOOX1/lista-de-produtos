const http = require("http");
const data = require("./data.json");
const URL = require("url");
const fs = require("fs");
const path = require("path");

const write = (cb) => {
  fs.writeFile(
    path.join(__dirname, "data.json"),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;

      cb(JSON.stringify({ message: "ok" }));
    }
  );
};

http
  .createServer((req, res) => {
    const { id, line, url_thumbnail, description, del, create } = URL.parse(
      req.url,
      true
    ).query;

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
    });

    //all recurces
    if (!line || !url_thumbnail || !description) {
      if (!id) {
        return res.end(JSON.stringify({ data, id: Math.random() }));
      } else {
        return res.end(JSON.stringify({ data, id: id }));
      }
    }

    if (del) {
      data.materials = data.materials.filter(
        (item) => String(item.id) !== String(id)
      );
      return write((message) => res.end(message));
    }
    data.materials.push({ description, url_thumbnail, line, id });

    return write((message) => res.end(message));
  })
  .listen(3001, () => console.log("API is running"));
