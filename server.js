const http = require("http");
const stats = require("./pcRAMUsage");

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
      const obj = JSON.parse(JSON.stringify(stats, null, 2));

      res.end(`
        <style>
          *{
            margin:0;
            padding:10px;
          }
          table, th, td {
            border:1px solid black;
            border-collapse: collapse;
          }
          #destaque{
            font-weight: bold;
            font-style: italic;
          }
        </style>
        <h1>Dados do PC</h1>
        <div>
          <table style="width:100%">
                <tr>
                    <th>Sistema Operacional</th>
                    <th>Processador</th>
                    <th>TotalRAM</th>
                    <th>FreeRam</th>
                    <th>Usage</th>
                    <th>% Usage</th>
                </tr>
                <tr>
                    <td>${obj.stats.OS}</td>
                    <td>${obj.stats.Arch}</td>
                    <td>${obj.stats.TotalRAM}</td>
                    <td>${obj.stats.FreeRAM}</td>
                    <td>${obj.stats.Usage}</td>
                    <td>${obj.stats.UsagePercent}</td>
                </tr>
            </table>
        </div>
        `);
    } else {
      res.end(`<h1>Welcome to NodeJS</h1>
      <p>Para testar a aplica&ccedil;&atilde;o utilize a rota <em><b><code>/stats</code></b></em></p>`);
    }
  })
  .listen(3000, () => {
    console.log("Server is Running !!");
  });
