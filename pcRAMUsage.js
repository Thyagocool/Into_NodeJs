const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRAM = totalmem() / 1024 / 1024;
  const fRAM = freemem() / 1024 / 1024;
  const usage = tRAM - fRAM;
  const perUsage = (fRAM / tRAM) * 100;

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRAM)} MB`,
    FreeRAM: `${parseInt(fRAM)} MB`,
    Usage: `${parseInt(usage)} MB`,
    UsagePercent: `${perUsage.toFixed(2)}%`,
  };
  //console.clear();

  //console.table(stats);

  exports.stats = stats;
}, 1000);
