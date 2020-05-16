const fs = require("fs");
const readline = require("readline");

async function processLineByLine(a, b, c, d) {
  const fileStream = fs.createReadStream("test2.srt");
  const writeStream = fs.createWriteStream("output.srt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const l = line.split("-->");
    if (l.length === 2) {
      let nl = "";

      for (let i in l) {
        const dms = l[i].split(":");
        let hr = Number(dms[0]) + a;
        let m = Number(dms[1]) + b;
        const mmm = dms[2].split(",");
        let s = Number(mmm[0]) + c;
        let ms = Number(mmm[1]) + d;
        
        s = s + ~~(ms / 1000);
        ms = ms - 1000 * ~~(ms / 1000);

        m = m + ~~(s / 60);
        s = s - 60 * ~~(s / 60);
        
        hr = hr + ~~(m / 60);
        m = m - 60 * ~~(m / 60);

        hr = String(hr);
        m = String(m);
        s = String(s);
        ms = String(ms)

        if (hr.length < 2) hr = "0" + hr;
        if (m.length < 2) m = "0" + m;
        if (s.length < 2) s = "0" + s;
        while (ms.length < 3) ms = "0" + ms;

        if (i == 1) nl += " --> ";

        nl += hr + ":" + m + ":" + s + "," + ms;
      }

      writeStream.write(nl + "\n");
    } else writeStream.write(line + "\n");
  }

  writeStream.close();
}

function run(t) {
  let m = ~~(t / 60000);
  const s = ~~(t / 1000 - 60 * m);
  const ms = t % 1000;
  processLineByLine(0, m, s, ms);
}

run(7007);
