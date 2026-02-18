import http from "http";
import os from "os";

const server = http.createServer((request, response) => {
  const requestUrl = request.url;
  const requestMethod = request.method;

  // Set default header
  response.setHeader("Content-Type", "text/plain");

  if (requestUrl === "/") {
    return response.end("Home Page");
  }

  if (requestUrl === "/users") {
    return response.end("List of Users");
  }

  if (requestUrl === "/deviceinfo") {
    const totalMemGB = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 ** 3)).toFixed(2);
    const userInfo = os.userInfo();

    const info = `
    OS Platform: ${os.platform()}
    OS Type: ${os.type()}
    OS Release: ${os.release()}
    CPU Architecture: ${os.arch()}
    Hostname: ${os.hostname()}
    Memory: ${freeMemGB}GB free of ${totalMemGB}GB
    Current User: ${userInfo.username}
    Home Directory: ${os.homedir()}
    `;

    return response.end(info);
  }

  // 404 fallback
  response.statusCode = 404;
  response.end("Route Not Found");
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

