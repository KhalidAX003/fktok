#!/usr/bin/env node
const a0K = function () {
  let N = true;
  return function (s, H) {
    const t = N ? function () {
      if (H) {
        const Y = H.apply(s, arguments);
        H = null;
        return Y;
      }
    } : function () {};
    N = false;
    return t;
  };
}();
(function () {
  a0K(this, function () {
    const s = new RegExp("function *\\( *\\)");
    const H = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const z = a0NE("init");
    if (!s.test(z + "chain") || !H.test(z + "input")) {
      z("0");
    } else {
      a0NE();
    }
  })();
})();
import a0v from "os";
import a0O from "inquirer";
import a0u from "fs";
import a0k from "sync-fetch";
import a0D from "puppeteer";
import a0d from "minimist";
import a0j from "terminal-image";
import a0Z from "tesseract.js";
import * as a0c from "chrome-launcher";
import a0m from "chromium";
import a0U from "chrome-remote-interface";
const a0i0 = ["e676715db507330f294bafed5be48976", "304b01a139dc821bc397313885c1eea5", "4b157d88acda5945a4b0d84bf32ececc", "3b46d4d7b34ce3c0f300ffccfadfbd5e", "8e085fafbc26d84a1123b61d949bdf5f", "57c16f0ef86342f7a72da6bedd5c54e1", "4c709f41efa9331fe573c1ed7699ae65", "56731235b022b2abbac6aa308f964263", "161b392d8f7f30f86cf04b3e23ae41f0", "a974a5afd9f2c72dce66d170447c06a7", "7257eb2f6fdf77ba3e86b5bab0751a28", "9dd90f0683b7794d9570c2f39f0a64e4", "383a2e0102afc8a3d18b2bd562daf92a", "7f6be004d53e7bbd95536fb97b541910", "9c417d204ef6abb07741873b8278ab59", "29b2d56dd41380114d8040f2e2eede6f", "d53906480689bb27529e94ea3aca7e3f", "cf4de0fca9acab966b22a6d581805161", "6d373cb81ee92eef6c0930adfc6bac39", "1e6585af891356ce62526c1f6f13763f", "fd55437873fafae13c1f0fb4804b04ae", "4fdbda5eba07ca44b1d911e06e1e5084", "4fa15191f74b88fc1f71b738a5d9e78f", "faef2896698d735a7d4c0d9fcebda3e0", "7b83b5e65c81ba3b11e91a51ae4b217f", "b0533bb938d19b187617da14a743f500", "a3cf547d805f836c5ce7cae9daf7a28c", "f8d8dfba5906d8352aad860e774880e1", "da60597ef568305a52b44653631f3544", "31d9e43f04d3565135ec4ec0c8f84275", "7b0431ba8d7b66ebb257c215c3fe98c3", "18001c41e15513eea0ddb5b04cd8bdf0", "423c0256e9fe15b1842ef4de67ae5254", "f6c61bf8ca1df43493824dbf0fc5e95c", "7f2e0f8c9dcbfe26cee8ddd232c48b7a", "b19a2406fbba87e5e0909b4dcc5b007a", "c0fcea9d35b61a6f953ee574ba727bcc", "6584e58186cb6c0cdf95c821bd05e0e7", "e9e9f1c0a920d03bb7b8dc57ee54e596", "900160beaf4f5eec2da8ba17220f6d74", "f4f0ad135b503a9e2d4228180b9c469a", "350ef2cc5f714b13bdecf7e722a1cfd8", "0a622d11da4616a6e482f5fd059ec68c", "b332e891f40e285350bfb7d3a49c47a1", "10731ebdc435a982041adbc2fcfcbf28", "a589e285b353cf79efccaca9d61030a3", "8dabd818c8e8034b6ce4677ba2267c10", "73e06f841a43efc9c3267a8a1fdb4a43", "370b380e2a1f07a7b2dea5bab8a71765", "773eac5430ce3b4517383e5c642e1ac4", "af101ba423170fcfed8f1169cb99ff9b", "7fe0b5ffcd3401048c3637b5b6373109", "dae1c128618352bf17a4b17d75322a9c", "86cf77dcd34174694086c61f4ebbfad2", "9af618eca04f0a4de61559769f289f2e", "ad109cf89e5922d4369ea29cba52fc70", "024b389ab18d9c3da045e3f8422fa7f6", "47b5d745d4c6cb6aa3c75857aaba3a78", "616ec3946464e8f131f421f3b90ccd83", "cd72e60802f03db53a1d70e2a135204a", "586a17acbe95dc1cc9d2a7b6fb224d34", "b5ac17715f57eed74d814ac750317f3c", "32f5d802750a0ceb28b32787471b9cd2", "d81ef610f94fc1b9a4d51147ac11ad82", "e07b3d9faa33d54e92b64dcee763d5cd", "bb93ed6afc9e01747822939dc7e9c09e", "cfa3d834d59762e442d1ffeebb0eba11", "7515781e8d76ac7eca499c07011e65b8", "4c773d5887deeac0f58c0af9ba34b01c", "2e277f1141253cab133df183efa83289", "b6bfb069b2de54d40e87b296d8e3b7a4", "660e89bc388d47b902615779f877b7b5", "73010c3e7214c7d2f7dbcbd1c6656798", "a9c4a6269ef105269d53a81f2d84c436", "70cae52d74c17aeef559591c5dbd4234", "fab63169c39b65631ebda4dca87007a5", "89f507c605bdfb1942e21d2a8c69a46f", "66a3c04a3bbb1b9fcd38a3487df031a1", "92955f7bb5813d60b40e3fb5c99e024b", "07dc8bdc32169e014dd7f2285523e04a", "1f23b0ef781295aa29d238f9b82e9d86", "a557986db78c1263952369ecc7284585", "76cf6d69a1df1faf56c4171a37090b86", "ccca431b4c1b28fd4f6f389aa23b45dc", "15981e8e38c69a8a0b0f3803fb3df272", "f62e0665c00a008fa28d55c070d0369b", "e05641adfddf6792239e207b078b1993", "4da2d346784a3a32202cd2e85d7dac80", "99de140749dd72fd52e5306faad04523", "e2e1ee05d6aea8be20f051059ec37476", "520b40da53f94ef1e472c0ca8a312b39", "b093f7cbe41d3541cf292bd749257f83", "8e30fff8b1b00f2902e0ba4e533115bd", "3c3b33c7beb3fe4c909d6b35aa0465f9", "be999bd6a7d21c500114154f6b139541", "3a2b1f888eb880a9d7f9f98feea41b31", "4e665cd4cb6cdeff5f97b899b9c8be44", "1fd3e2adadbfde192c9e35757e00da00", "e9c13f6f0bd58631b79ba4da70cf4d7a", "6dbd6f29bc9590d2551dfbdb39703545", "e6535396a16c9921480a94379847debb", "028f43a84b66055d8f425b9721f45e73", "a144c269868c4799a7e5a3ced43e9814", "11ee317bc8c62ab608ef8a43f36d05c1", "bd483373f65843f073692a0939440975", "53bbf7c6a958ce62d99e33d6961de636", "0d7fd66f257aff05ee88e9bdcc62a0f3", "e48c545f352a659c529fe35da60f23c4", "45050ca3d6fb84e072a2ec4cb7e8fb3f", "5ba417636554f575e2d8a9ceb0d73c8a", "e9586649ae74a8e7acd855169de5f310", "71b5d240cacc1ec43d97f9401f9f69c8", "626b14c7bcb716e28c9459d41529b4ba", "35640762110819b87c376c578fe9de86", "e6a9c06e1f4cf10216e892c4c09954e1", "68196bc03555e91f97b5fee0fd8adb95", "8f2dbe9f99506afbe81dfa8bcd424849", "76bb59889981eae8d440e995dd591758", "e11106a17bed66370f03950d442e3f87", "acfd45223745dd29cce0e788600045df", "4f24fecc31969c461ba3d32f6cd39663", "173aba382c880b2678a5f57234165225", "be63bbe129ab9b742f536e605f7bb9c3", "2b35d136678d771abaf6a26299074f40", "3700d6cd8e8b09aaadd819da314d4ce2", "748ebd13328bc14a104b99de6bdeb899", "7d404fc94e533d021b0b64562136ae3a", "12ed5f0db832bcbfe984d8b3a41456e9", "d25fb5a251d88956f4f3bc8d980e89a8", "bb75b47ab7ad2180e029be97fb55b45f", "0e05a5a90b18bfa1c03aa5fe5c8d0038"];
const a0i1 = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5351.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; rv:110.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.50", "Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.63", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.2 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.57", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 OPR/94.0.0.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.46", "Mozilla/5.0 (Windows NT 10.0; rv:109.0) Gecko/20100101 Firefox/109.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:109.0) Gecko/20100101 Firefox/110.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 OPR/95.0.0.0 (Edition Yx 05)", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64; rv:108.0) Gecko/20100101 Firefox/108.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.3.949 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 YaBrowser/23.1.2.987 Yowser/2.5 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.56", "Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"];
const a0i2 = {
  h: "help",
  v: "version",
  l: "video",
  t: "task",
  c: "cookies",
  u: "user-agent",
  p: "proxy",
  s: "proxies",
  b: "browser",
  j: "browser-user",
  r: "browser-remote",
  w: "no-headless",
  k: "terminal-captcha",
  o: "log",
  m: "minimal",
  d: "detach",
  x: "limit",
  z: "min-limit",
  f: "max-time",
  a: "available-tasks",
  g: "session-status",
  i: "init-accums",
  e: "verbose"
};
const a0i3 = {
  video: '',
  task: '',
  cookies: "cookies.json",
  proxy: '',
  proxies: false,
  browser: null,
  "browser-user": null,
  "browser-remote": null,
  "no-headless": false,
  "terminal-captcha": false,
  log: false,
  minimal: false,
  detach: false,
  limit: false,
  "min-limit": false,
  "max-time": false,
  "available-tasks": false,
  "session-status": false,
  "init-accums": false,
  verbose: false
};
const a0i4 = {
  string: ["video", "task", "cookies", "user-agent", "proxy", "proxies", "browser", "browser-user", "browser-remote", "no-headless", "terminal-captcha", "log", "minimal", "detach", "limit", "min-limit", "max-time", "available-tasks", "session-status", "init-accums", "verbose"],
  alias: a0i2,
  "default": a0i3
};
const a0i5 = a0d(process.argv.slice(2), a0i4);
if (a0i5.help) {
  console.log("\nUsage: node bottok.js [options]\n\nOptions:\n  -h, --help                Show help\n  -v, --version             BotTok version\n  -l, --video <link>        TikTok video URL to perform the task on\n  -t, --task <task>         Task to perform on the TikTok video (example: 'Up Views')\n  -c, --cookies <path>      File path to store session cookies (default: cookies.json)\n  -u, --user-agent <ua>     User agent to be used (default: random user-agent)\n  -p, --proxy <proxy>       The proxy to be used (example: http://localhost:8080)\n  -s, --proxies <path>      The path of the proxies file to use randomly (default: proxies.txt)\n  -b, --browser <path>      Path to a browser executable to use instead of Chromium  \n  -r, --browser-remote <ws> Set browser WS endpoint to connect to an existing instance\n  -j, --browser-user <path> Set custom user data directory of browser (profile folder)\n  -w, --no-headless         Open visible browser window  \n  -k, --terminal-captcha    Terminal captcha instead of auto solver\n  -o, --log                 Write activity log (activity.log)\n  -m, --minimal             Hide ASCII art header\n  -d, --detach              Output mode for background processes\n  -x, --limit <int>         By the time the accumulation limit is reached\n  -z, --min-limit <int>     If it does not accumulate x amount in 60 minutes it stops\n  -f, --max-time <int>      Sets a maximum time limit in hours before stops\n  -a, --available-tasks     Returns the currently available tasks\n  -g, --session-status      Returns the session status\n  -i, --init-accums         Set a initial accumulation value (default: 0)\n  -e, --verbose             Display detailed processing information in logs\n");
  process.exit(0);
}
if (a0i5.version) {
  console.log("1.0.9");
  process.exit(0);
}
const a0i8 = !!(a0i5.log === '');
const a0i9 = !!(a0i5.minimal === '');
const a0ii = !!(a0i5.detach === '');
const a0iN = !!(a0i5.verbose === '');
const a0is = !(a0i5["no-headless"] === '');
const a0iH = !!(a0i5["available-tasks"] === '');
const a0iz = !!(a0i5["session-status"] === '');
const a0it = a0v.platform() === "win32";
const a0iF = a0v.platform() === "android";
const a0iY = /Alpine/.test(a0v.release()) || /PRoot-Distro/.test(a0v.release());
const a0iw = a0i5.cookies;
const a0iq = a0i5["user-agent"];
const a0il = a0i5.proxy;
const a0ib = a0i5.proxies;
const a0iX = a0it ? ">" : "🤖";
const a0in = a0it ? "█" : "🟢";
const a0iy = a0it ? "■" : "🔴";
const a0ip = a0it ? "▄" : "🟠";
const a0iP = a0it ? "▀" : "⚫️";
const a0ig = a0it ? "»" : "🌐";
const a0if = a0it ? "»" : "🍪";
const a0io = a0it ? "»" : "✅";
const a0iR = a0it ? "x" : "⛔️";
const a0iM = a0it ? "»" : "🚦";
const a0iS = a0it ? "!" : "🚨";
const a0iQ = a0it ? "$" : "💳";
const a0iE = a0it ? "*" : "🧠";
const a0iW = a0it ? "»" : "🛡️";
var a0iG;
var a0iT;
var a0ih;
var a0ir;
var a0iL = 0;
var a0iK = 0;
var a0iv = a0i5["init-accums"] && a0i5["init-accums"] > 0 ? parseInt(a0i5["init-accums"]) : 0;
var a0iO;
var a0iu = a0iq ?? a0i1[Math.floor(Math.random() * a0i1.length)];
var a0ik;
var a0iD = [];
var a0id = a0il || '';
if (a0iH) {
  const a0NW = await a0Nn();
  console.log(a0NW.join(", "));
  process.exit(0);
}
if (a0iz) {
  await a0NR(a0is);
  process.exit(0);
}
if (!a0ii) {
  if (a0i9) {
    console.log("[36m", "                                                          \nBotTok 1.0.9 TikTok Up Bot (by @jfadev)    Exit: [CTRL+C] \n", "[0m");
  } else {
    console.log("[36m", "                                                          \n@@@@@@@    @@@@@@   @@@@@@@   @@@@@@@   @@@@@@   @@@  @@@  \n@@@@@@@@  @@@@@@@@  @@@@@@@   @@@@@@@  @@@@@@@@  @@@  @@@  \n@@!  @@@  @@!  @@@    @@!       @@!    @@!  @@@  @@!  !@@  \n!@   @!@  !@!  @!@    !@!       !@!    !@!  @!@  !@!  @!!  \n@!@!@!@   @!@  !@!    @!!       @!!    @!@  !@!  @!@@!@!   \n!!!@!!!!  !@!  !!!    !!!       !!!    !@!  !!!  !!@!!!    \n!!:  !!!  !!:  !!!    !!:       !!:    !!:  !!!  !!: :!!   \n:!:  !:!  :!:  !:!    :!:       :!:    :!:  !:!  :!:  !:!  \n:: ::::  ::::: ::     ::        ::    ::::: ::   ::  :::  \n:: : ::    : :  :      :         :      : :  :    :   :::", "\n\nBotTok 1.0.9 TikTok Up Bot (by @jfadev)    Exit: [CTRL+C] \n", "[0m");
  }
  console.log(a0iS + " Find help in Telegram (https://t.me/bottok_help)\n");
}
async function a0ij() {
  if (!a0i0.includes(await a0Nl()) && a0ii) {
    console.info("BotTok 1.0.9 TikTok Up Bot (by @jfadev)\n\n", "You are using the FREE version!\n", "The --detach or -d mode is exclusive to Premium mode\n", "and allows BotTok to be launched as background processes.\n", a0iQ + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
    process.exit(0);
  }
  try {
    let H = await a0N5();
    if (H === "License") {
      H = await a0iZ();
    }
    if (H === "License (VERIFIED)") {
      H = await a0ic();
    }
    if (H === "Tasks") {
      await a0im();
    }
    if (H === "Updates") {
      await a0iU();
    }
    if (H === "Help") {
      await a0iV();
    }
    if (H === "Exit") {
      process.exit(0);
    }
  } catch (B) {
    a0NS(B);
    await a0NM(10000);
    await a0ij();
  }
}
async function a0iZ() {
  await a0Nb();
  await a0N6();
  await a0ij();
}
async function a0ic() {
  if (!a0ii) {
    process.stdout.moveCursor(0, -1);
    process.stdout.clearScreenDown();
  }
  await a0ij();
}
async function a0im(i = true) {
  await a0Np(i, a0is);
  let s = await a0N0();
  let H = await a0N8(s);
  if (!H) {
    await a0im(false);
    return;
  }
  const z = await a0N9();
  await a0Nz(H, z, s);
}
async function a0iU() {
  if (!a0ii) {
    process.stdout.moveCursor(0, -4);
    process.stdout.clearScreenDown();
  }
  const N = a0k("https://api.github.com/repos/jfadev/bottok/releases/latest");
  const s = N.json().tag_name;
  const z = !!(s === "v1.0.9");
  console.log("\n");
  console.log("Your OS:".padEnd(14), a0v.type(), a0v.release());
  console.log("Your Version:".padEnd(14), "v1.0.9", z ? " (Latest)" : "(Outdated)");
  console.log("\n");
  console.log("Releases:");
  const t = a0k("https://api.github.com/repos/jfadev/bottok/releases");
  const F = t.json();
  F.forEach(A => {
    console.log(A.tag_name === "v1.0.9" ? "> " : '', A.tag_name, A.tag_name === s ? " (Latest)" : '');
  });
  if (!z) {
    console.log("\n");
    console.log("Type the following " + a0v.type() + " command");
    console.log("to updade to the latest version (" + s + "):\n");
    if (a0it) {
      console.log("win-update.bat");
    } else {
      if (a0iF) {
        console.log("./alpine-update.sh");
      } else if (a0iY) {
        console.log("./alpine-update.sh");
      } else {
        console.log("./ubuntu-update.sh");
      }
    }
  }
  console.log("\n");
  process.exit(0);
}
async function a0iV() {
  if (!a0ii) {
    process.stdout.moveCursor(0, -4);
    process.stdout.clearScreenDown();
    console.log("\nUsage: node bottok.js [options]\n\nOptions:\n  -h, --help                Show help\n  -v, --version             BotTok version\n  -l, --video <link>        TikTok video URL to perform the task on\n  -t, --task <task>         Task to perform on the TikTok video (example: 'Up Views')\n  -c, --cookies <path>      File path to store session cookies (default: cookies.json)\n  -u, --user-agent <ua>     User agent to be used (default: random user-agent)\n  -p, --proxy <proxy>       The proxy to be used (example: http://localhost:8080)\n  -s, --proxies <path>      The path of the proxies file to use randomly (default: proxies.txt)\n  -b, --browser <path>      Path to a browser executable to use instead of Chromium  \n  -r, --browser-remote <ws> Set browser WS endpoint to connect to an existing instance\n  -j, --browser-user <path> Set custom user data directory of browser (profile folder)\n  -w, --no-headless         Open visible browser window  \n  -k, --terminal-captcha    Terminal captcha instead of auto solver\n  -o, --log                 Write activity log (activity.log)\n  -m, --minimal             Hide ASCII art header\n  -d, --detach              Output mode for background processes\n  -x, --limit <int>         By the time the accumulation limit is reached\n  -z, --min-limit <int>     If it does not accumulate x amount in 60 minutes it stops\n  -f, --max-time <int>      Sets a maximum time limit in hours before stops\n  -a, --available-tasks     Returns the currently available tasks\n  -g, --session-status      Returns the session status\n  -i, --init-accums         Set a initial accumulation value (default: 0)\n  -e, --verbose             Display detailed processing information in logs\n");
  }
  process.exit(0);
}
async function a0N0(s = null) {
  try {
    if (!a0u.existsSync(a0iw)) {
      if (!a0ik) {
        a0ik = await a0NC(a0is);
      }
      s = (await a0ik.pages())[0];
      const t = {
        timeout: 0x0
      };
      await s.goto("https://zefoy.com", t);
      await a0NM(3000);
      if (a0i5["terminal-captcha"] === '') {
        await a0N2(s);
      } else {
        await a0N3(s);
      }
    }
    if (!s) {
      if (a0ik) {
        s = (await a0ik.pages())[0];
      } else {
        a0ik = await a0NC(a0is);
        s = (await a0ik.pages())[0];
      }
      const w = {
        timeout: 0x0
      };
      await s.goto("https://zefoy.com", w);
    }
    return await a0N1(s);
  } catch (q) {
    await a0NB();
    await a0NM(1000);
    return await a0N0();
  }
}
async function a0N1(N) {
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0ig + " Launch Zefoy in headless browser...");
  } else {
    a0NS("Launch Zefoy in headless browser...");
  }
  await a0NM(1000);
  const H = await a0Nx();
  const z = H.find(A => A.name === "PHPSESSID");
  a0iO = z.value;
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0ig + " SESSID: " + a0iO);
  } else {
    a0NS("SESSID: " + a0iO);
  }
  await a0NM(1000);
  await N.setCookie(...H);
  const t = {
    timeout: 0x0
  };
  await N.goto("https://zefoy.com", t);
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0if + " Cookies injected!");
  } else {
    a0NS("Cookies injected!");
  }
  a0NS("Load session (SESSID: " + a0iO + ")...");
  await a0NM(3000);
  const F = await N.content();
  if (/_cf_chl_opt/.test(F)) {
    await a0NB();
    await a0NM(1000);
    await a0Np();
    return await a0N1(N);
  }
  if (/submit-captcha/.test(F)) {
    if (a0i5["terminal-captcha"] === '') {
      await a0N2(N);
    } else {
      await a0N3(N);
    }
  }
  return N;
}
async function a0N2(s) {
  if (!a0ii) {
    process.stdout.cursorTo(0);
    process.stdout.write(a0iM + " Solve the captcha manually...");
  } else {
    a0NS("Solve the captcha manually...");
  }
  await s.screenshot({
    "path": "captcha.png",
    "clip": {
      "x": 0xff,
      "y": 0x156,
      "width": 214,
      "height": 0x7e
    }
  });
  if (!a0ii) {
    console.log("\n");
    const w = {
      width: 0x40
    };
    console.log(await a0j.file("captcha.png", w));
  }
  const z = {
    type: "input",
    name: "captcha",
    message: "Write a Captcha:"
  };
  const t = await a0O.prompt([z]);
  const F = t.captcha;
  await s.waitForSelector("input[type=text]");
  await s.$eval("input[type=text]", (x, J) => x.value = J, F);
  await s.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  if (!a0ii) {
    process.stdout.moveCursor(0, a0iF || a0iY ? -22 : -23);
    process.stdout.clearScreenDown();
  }
  await s.waitForNavigation();
  const Y = parseInt(await s.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (Y) {
    if (!a0ii) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0io + " Captcha resolved! (" + F + ")");
    } else {
      a0NS("Captcha resolved! (" + F + ")");
    }
    const J = await s.cookies();
    await a0NA(J);
    await a0NM(2000);
  } else {
    if (!a0ii) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0iR + " Wrong captcha! (" + F + ")");
    } else {
      a0NS("Wrong captcha! (" + F + ")");
    }
    await a0NM(2000);
    await a0N2(s);
  }
}
async function a0N3(i) {
  const s = Math.random().toString(36).substring(2, 10) + "-";
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0iE + " Solve captcha automatically...");
  } else {
    a0NS("Solve captcha automatically...");
  }
  await i.screenshot({
    "path": s + "captcha.png",
    "clip": {
      "x": 0xff,
      "y": 0x156,
      "width": 214,
      "height": 0x7e
    }
  });
  await a0NM(200);
  const H = (await a0N4(s + "captcha.png")).replace(/(\r\n|\n|\r)/gm, '');
  await a0u.promises.unlink(s + "captcha.png");
  await i.waitForSelector("input[type=text]");
  await i.$eval("input[type=text]", (Y, A) => Y.value = A, H);
  await i.evaluate("(() => {\n      document\n        .querySelector(\"button.btn.btn-primary.btn-lg.btn-block\")\n        .click();\n    })();");
  await i.waitForNavigation();
  const z = parseInt(await i.evaluate("(() => {\n      return document.querySelector('#errorcapthcaclose') === null ? 1 : 0;\n    })();"));
  if (z) {
    if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0io + " Captcha resolved! (" + H + ")");
    } else {
      a0NS("Captcha resolved! (" + H + ")");
    }
    const A = await i.cookies();
    await a0NA(A);
    await a0NM(2000);
  } else {
    if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0iR + " Wrong captcha! (" + H + ")");
    } else {
      a0NS("Wrong captcha! (" + H + ")");
    }
    await a0NM(2000);
    await a0N3(i);
  }
}
async function a0N4(i) {
  return new Promise((s, H) => {
    a0Z.recognize(i, "eng").then(({
      data: {
        text: t
      }
    }) => {
      s(t);
    });
  });
}
async function a0N5() {
  if (a0i5.task) {
    return "Tasks";
  } else {
    const t = a0i0.includes(await a0Nl());
    const F = {
      type: "list",
      name: "menu",
      message: "Choose an option",
      choices: [{
        "name": "Tasks"
      }, {
        "name": t ? "License (VERIFIED)" : "License"
      }, {
        "name": "Updates"
      }, {
        "name": "Help"
      }, {
        "name": "Exit"
      }]
    };
    const Y = await a0O.prompt([F]);
    return Y.menu;
  }
}
async function a0N6() {
  const N = {
    "fxSMn": function (s, H) {
      return s(H);
    },
    "iXWCi": function (s, H) {
      return s - H;
    },
    "vQzeK": function (s) {
      return s();
    },
    "xwAFx": function (s, H) {
      return s !== H;
    },
    "NtduE": "pISji",
    "amxaI": function (s, H) {
      return s === H;
    },
    "YWGyZ": "KaYdC",
    "QqXJy": "VBbCI",
    "RYExx": function (s, H) {
      return s + H;
    },
    "TRHAL": " LICENSE IS VERIFIED!",
    "kKkll": function (s, H) {
      return s === H;
    },
    "uRMGn": "wIBct",
    "hJsqg": "AuYrj",
    "FRyMM": "You are using the FREE version limited to ~999999999999\n",
    "yZqfp": "accumulations. The advantage of acquiring the\n",
    "AsqlT": "license is that the bot continues to work\n",
    "rCtGa": "indefinitely and accumulates large amounts.\n",
    "erJpt": "list",
    "fCWTH": "choice",
    "GDCEd": "Do you want unlock this limitation?",
    "BAdkA": "Add License Key",
    "UsoGf": "Back",
    "TfOgy": function (s, H) {
      return s === H;
    },
    "chjks": function (s, H) {
      return s === H;
    },
    "BNVON": "zGpnQ",
    "JyaUN": function (s, H) {
      return s !== H;
    },
    "rGULZ": "huVYS",
    "LSfAX": function (s) {
      return s();
    },
    "RsaVs": function (s, H) {
      return s !== H;
    },
    "TjIFU": "tyetg",
    "POzxA": function (s, H) {
      return s !== H;
    },
    "QuUMA": "SLdqb"
  };
  if (a0i0.includes(await N.vQzeK(a0Nl))) {
    if (N.xwAFx(N.NtduE, "pISji")) {
      N.fxSMn(t, "[" + F + "] " + Y + " (+" + A + ") " + w);
    } else if (!a0ii) {
      if (N.amxaI(N.YWGyZ, N.QqXJy)) {
        N = '';
      } else {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(N.RYExx(a0io, N.TRHAL));
      }
    }
  } else {
    if (N.kKkll(N.uRMGn, N.hJsqg)) {
      N.fxSMn(s, "Check Proxy: " + H);
    } else {
      console.info("\n", N.FRyMM, N.yZqfp, N.AsqlT, N.rCtGa, a0iQ + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
      const t = {
        type: N.erJpt,
        name: N.fCWTH,
        message: N.GDCEd,
        choices: [{
          "name": N.BAdkA
        }, {
          "name": N.UsoGf
        }]
      };
      const F = await a0O.prompt([t]);
      if (N.TfOgy(F.choice, N.BAdkA)) {
        if (N.chjks(N.BNVON, N.BNVON)) {
          if (!a0ii) {
            if (N.JyaUN(N.rGULZ, N.rGULZ)) {
              if (!F) {
                J.stdout.moveCursor(0, -4);
                I.stdout.clearScreenDown();
                q.log(b);
              }
              x.exit(0);
            } else {
              process.stdout.moveCursor(0, -1);
              process.stdout.clearScreenDown();
            }
          }
          return await N.LSfAX(a0N7);
        } else {
          H.stdout.cursorTo(0);
          z.stdout.write(t + " Solve the captcha manually...");
        }
      }
      if ((await F.choice) === "Back") {
        if (N.RsaVs(N.TjIFU, N.TjIFU)) {
          H = N.iXWCi(z, t);
        } else {
          if (!a0ii) {
            if (N.POzxA(N.QuUMA, N.QuUMA)) {
              s("UA: " + H);
            } else {
              process.stdout.moveCursor(0, -9);
              process.stdout.clearScreenDown();
            }
          }
          await a0ij();
        }
      }
    }
  }
}
async function a0N7() {
  const s = {
    type: "input",
    name: "license",
    message: "Paste your License Key here:"
  };
  const H = await a0O.prompt([s]);
  const z = H.license;
  await a0Nq(z);
  if (!a0ii) {
    process.stdout.moveCursor(0, -9);
    process.stdout.clearScreenDown();
  }
  await a0ij();
}
async function a0N8(s) {
  let z = await s.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (z[0].name === "Up ") {
    return false;
  }
  const t = {
    name: "Back"
  };
  z.push(t);
  if (!a0ii) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  if (a0i5.task) {
    return a0i5.task;
  } else {
    const w = {
      type: "list",
      name: "mode",
      message: "What task do you want me to do?",
      choices: z
    };
    const B = await a0O.prompt([w]);
    if ((await B.mode) === "Back") {
      if (!a0ii) {
        process.stdout.moveCursor(0, -2);
        process.stdout.clearScreenDown();
      }
      await a0ij();
    }
    return B.mode;
  }
}
async function a0N9() {
  if (a0i5.video) {
    let t = await a0NI();
    if (!t.some(F => F.url === a0i5.video)) {
      t.push({
        "url": a0i5.video,
        "timestamp": new Date().getTime()
      });
      await a0NJ(t);
    }
    if (!a0ii) {
      console.log("Video:[36m " + a0i5.video + " [0m");
    }
    return a0i5.video;
  } else {
    const w = {
      name: "Recent Videos"
    };
    const B = {
      name: "New Video"
    };
    const x = {
      name: "Back"
    };
    const J = [w, B, x];
    const I = {
      type: "list",
      name: "choice",
      message: "Would you like to select a recent video?",
      choices: J
    };
    const q = await a0O.prompt([I]);
    if (q.choice === "Recent Videos") {
      return await a0Ni();
    }
    if ((await q.choice) === "Back") {
      if (!a0ii) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
      }
      await a0ij();
    }
    return await a0NN();
  }
}
async function a0Ni() {
  const s = {
    "bRrYW": function (Y, A) {
      return Y === A;
    },
    "tCtLT": "HaTXd",
    "Vhmub": "EiUSy",
    "ShOIn": "while (true) {}",
    "cyOqG": "counter",
    "ddfNl": function (Y) {
      return Y();
    },
    "FWEoL": "Back",
    "RIuzx": "list",
    "UjIYE": "url",
    "LHAnv": "Select a video from the history",
    "sEnGq": "Gjixf",
    "RAFBw": "eNMYV",
    "JfGcl": function (Y, A) {
      return Y !== A;
    },
    "JENnU": "TPWrk",
    "VURZp": function (Y) {
      return Y();
    }
  };
  let H = await s.ddfNl(a0NI);
  H = H.map(Y => {
    if (s.bRrYW(s.tCtLT, s.Vhmub)) {
      s = "[32m+" + H + "[0m";
    } else {
      const w = {
        name: Y.url
      };
      return w;
    }
  });
  const z = {
    name: s.FWEoL
  };
  H.push(z);
  const t = {
    type: s.RIuzx,
    name: s.UjIYE,
    message: s.LHAnv,
    choices: H
  };
  const F = await a0O.prompt([t]);
  if (s.bRrYW(await F.url, s.FWEoL)) {
    return s.sEnGq === s.RAFBw ? function (A) {}.constructor(flMfQS.ShOIn).apply(flMfQS.cyOqG) : (!a0ii && (s.JfGcl("EcSrw", s.JENnU) ? (process.stdout.moveCursor(0, -2), process.stdout.clearScreenDown()) : s = H), await s.VURZp(a0N9));
  }
  return F.url;
}
async function a0NN() {
  const s = {
    type: "input",
    name: "url",
    message: "What is the URL of your Tiktok video?"
  };
  const H = await a0O.prompt([s]);
  const z = H.url;
  let t = await a0NI();
  if (!t.some(F => F.url === z)) {
    t.push({
      "url": z,
      "timestamp": new Date().getTime()
    });
    await a0NJ(t);
  }
  return z;
}
function a0Ns(i) {
  const H = [...i.matchAll(/@(\w+)\n(.+)\n(\d+\s\w+\sago)\n([\d|\,]+)/g)];
  return H.map(z => {
    return {
      "username": z[1],
      "comment": z[2],
      "timestamp": z[3],
      "likes": parseInt(z[4].replace(/[,\.]/g, '')),
      "concat": "@" + z[1] + " \"" + z[2].substring(0, 10) + "...\" " + z[3] + " (" + z[4] + ")"
    };
  });
}
async function a0NH(s) {
  let z = s.map(A => {
    const x = {
      name: A.concat
    };
    return x;
  });
  const t = {
    name: "Back"
  };
  z.push(t);
  const F = {
    type: "list",
    name: "concat",
    message: "Select a comment",
    choices: z
  };
  const Y = await a0O.prompt([F]);
  if ((await Y.concat) === "Back") {
    if (!a0ii) {
      process.stdout.moveCursor(0, -6);
      process.stdout.clearScreenDown();
    }
    await a0ij();
  }
  return z.findIndex(B => B.name === Y.concat);
}
async function a0Nz(N, s, H, z = false) {
  try {
    a0iG = a0iG || process.hrtime();
    const Y = new Map([["Up Followers", [".t-followers-button", ".t-followers-menu"]], ["Up Hearts", [".t-hearts-button", ".t-hearts-menu"]], ["Up Comments Hearts", [".t-chearts-button", ".t-chearts-menu"]], ["Up Views", [".t-views-button", ".t-views-menu"]], ["Up Shares", [".t-shares-button", ".t-shares-menu"]], ["Up Favorites", [".t-favorites-button", ".t-favorites-menu"]], ["Up Livestream [VS+LIKES]", [".t-livestream-button", ".t-livestream-menu"]]]);
    let A = ".t-views-button";
    let w = ".t-views-menu";
    if (Y.has(N)) {
      [A, w] = Y.get(N);
    }
    await H.evaluate("(() => {\n        document.querySelector(\"" + A + "\").click();\n      })();");
    await H.waitForSelector(w);
    await H.$eval(w + " > div > form > div > input", (x, J) => x.value = J, s);
    await H.evaluate("(() => {\n        document\n          .querySelector(\"" + w + " > div > form > div > div > button\")\n          .click();\n      })();");
    if (!z && !a0ii) {
      console.log("\n\n");
    }
    a0NS(N + " task running...");
    a0iT = await a0NF(H, w, N, s);
    a0ih = await a0NY(H, w);
    a0ir = await a0Nt(H, w, N, s);
  } catch (J) {
    a0NS(J);
    await a0NB();
    await a0NM(2000);
    H = await a0N0(H);
    const b = {
      timeout: 0x0
    };
    await H.goto("https://zefoy.com", b);
    a0Nz(N, s, H, true);
    return;
  }
}
async function a0Nt(i, N, s, H) {
  return setInterval(async () => {
    let Y = await i.evaluate("(() => {\n        return document.querySelector(\"" + N + " > div > div\").innerText;\n      })();");
    Y = Y.replace(/(\r\n|\n|\r)/gm, " ");
    if (/limit/.test(Y) || /error/.test(Y) || /not working/.test(Y) || /valid video/.test(Y) || /again later/.test(Y) || /error/.test(Y) || /expired/.test(Y) || /many requests/.test(Y) || /found/.test(Y)) {
      clearInterval(a0iT);
      clearInterval(a0ih);
      clearInterval(a0ir);
      if (!a0ii) {
        process.stdout.moveCursor(0, -3);
        process.stdout.clearScreenDown();
        process.stdout.write("\n" + a0iX + "[33m " + s + " Mode[0m\n\n");
        process.stdout.write(a0in + " Running: Trying again...");
      }
      a0NS("Trying again (ERROR: " + Y.substring(0, 58) + ")...");
      if (/expired/.test(Y)) {
        await a0NB();
        await a0NM(2000);
      }
      i = await a0N0(i);
      const A = {
        timeout: 0x0
      };
      await i.goto("https://zefoy.com", A);
      a0Nz(s, H, i, true);
      return;
    }
  }, 20000);
}
async function a0NF(i, N, s, H, z = null) {
  const t = {
    "hSCFA": "./alpine-update.sh",
    "NcPwM": function (B, J) {
      return B - J;
    },
    "bnHoS": function (B, x) {
      return B(x);
    },
    "QpUrs": "[36m",
    "KXhzs": "[0m",
    "Qwftl": "You are using the FREE version limited to ~999999999999\n",
    "DpaLx": "accumulations. The advantage of acquiring the\n",
    "bcdbl": "license is that the bot continues to work\n",
    "kcvZB": "indefinitely and accumulates large amounts.\n",
    "oEUDD": " Cookies invalid/expired!",
    "BpuIj": function (B, x) {
      return B(x);
    },
    "QVSWX": function (B, J) {
      return B === J;
    },
    "FurrV": "ZBZMb",
    "JzDoq": function (B, x) {
      return B(x);
    },
    "UFsPv": "OYmkB",
    "pqvtK": "lClOk",
    "sczUr": function (B, J) {
      return B === J;
    },
    "JbCbV": function (B, J) {
      return B !== J;
    },
    "IfDXm": "TxyhL",
    "UoRNS": "vSVDA",
    "FTXme": function (B, J) {
      return B !== J;
    },
    "QrXEx": "LjYvS",
    "SpeKF": function (B, x) {
      return B(x);
    },
    "acvyP": function (B, x) {
      return B(x);
    },
    "kJczf": function (B, x) {
      return B(x);
    },
    "KFYKA": function (B, x, J, I) {
      return B(x, J, I);
    },
    "vERGq": function (B, J) {
      return B !== J;
    },
    "yQnmm": "lqinp",
    "PfuKj": function (B, J) {
      return B === J;
    },
    "UfQEM": "NzxzH",
    "aduDk": "PpArB",
    "sopXY": "ETPYG",
    "dXbiH": "jeksl",
    "ikfkg": "EMajO",
    "aChxY": function (B, x) {
      return B(x);
    },
    "PuyaI": "cZSnZ",
    "XGCPg": function (B, J) {
      return B !== J;
    },
    "BypTw": "Up Comments Hearts",
    "ISncm": "mXryE",
    "haBpv": "NNVwX",
    "ZYGLB": function (B, x) {
      return B(x);
    },
    "pxdmL": function (B, J) {
      return B !== J;
    },
    "OyJZC": "srkrw",
    "dGpoE": "WACoj",
    "ygHek": "TvorF",
    "dUdjq": function (B, J) {
      return B !== J;
    },
    "ZHfKI": "erznW",
    "Brsvs": function (B, J) {
      return B - J;
    },
    "kTgXE": function (B, J) {
      return B !== J;
    },
    "uVVgx": function (B, J) {
      return B > J;
    },
    "Eicpy": "diFYu",
    "zyjrc": function (B, J) {
      return B !== J;
    },
    "WHPiu": "SUxZo",
    "xFiqb": "DnkhO",
    "lDtAX": function (B) {
      return B();
    },
    "quFiD": function (B, J) {
      return B > J;
    },
    "yKAPV": function (B, J) {
      return B !== J;
    },
    "RsBuT": "SbYWW",
    "hVDZp": "QGBDE",
    "VgbOZ": function (B, x) {
      return B(x);
    },
    "RPAyy": function (B) {
      return B();
    },
    "EfscP": function (B, x, J) {
      return B(x, J);
    },
    "PtVJl": "WsHSU",
    "sAhGE": function (B, x) {
      return B(x);
    },
    "WIUlP": "lwaux",
    "BGETp": "min-limit",
    "uzrdT": function (B, J) {
      return B > J;
    },
    "CRXGw": function (B, J) {
      return B < J;
    },
    "VvvVr": "NUKqE",
    "EEpQH": function (B) {
      return B();
    },
    "ISCwT": "uBcNa",
    "zuMil": "HvOSJ",
    "tYuKe": "max-time",
    "xaDVn": function (B, J) {
      return B > J;
    },
    "qgKoS": function (B) {
      return B();
    },
    "feNmn": function (B, J) {
      return B * J;
    },
    "wlhTP": "HlBUA",
    "vvWUE": function (B, x) {
      return B(x);
    },
    "opGlJ": function (B, J) {
      return B === J;
    },
    "bOmuP": "LifnF",
    "jtFwi": function (B, J) {
      return B !== J;
    },
    "MGHAi": "iZsaw",
    "cEvcD": function (B, J) {
      return B / J;
    },
    "NemrL": function (B, J) {
      return B || J;
    }
  };
  let F = 0;
  let Y = '';
  let A = false;
  let w = 0;
  return t.EfscP(setInterval, async () => {
    const B = {
      "FzHQJ": function (x, J) {
        return x(J);
      },
      "GwJFy": t.Qwftl,
      "LKGIa": t.DpaLx,
      "cnrRF": t.bcdbl,
      "DGNar": t.kcvZB,
      "oiCzV": t.oEUDD,
      "GFFrL": function (x, J) {
        return t.BpuIj(x, J);
      },
      "sesOe": function (J, I) {
        return t.QVSWX(J, I);
      },
      "pGmNZ": t.FurrV,
      "OWYAF": function (x, J) {
        return t.JzDoq(x, J);
      },
      "bJUsi": function (x, J) {
        return t.BpuIj(x, J);
      },
      "mzNuq": "./alpine-update.sh"
    };
    if (t.QVSWX(t.UFsPv, t.pqvtK)) {
      itOJYt.FzHQJ(N, "0");
    } else {
      let J = await i.evaluate("(() => {\n        return document.querySelector(\"" + N + " > div > div\").innerText;\n      })();");
      let I = t.JzDoq(a0Ns, J);
      if (/@/.test(J) && t.sczUr(z, null)) {
        if (t.JbCbV(t.IfDXm, t.UoRNS)) {
          if (!a0ii) {
            if (t.FTXme(t.QrXEx, t.QrXEx)) {
              return false;
            } else {
              process.stdout.moveCursor(0, -3);
              process.stdout.cursorTo(0);
              process.stdout.clearScreenDown();
            }
          }
          t.SpeKF(clearInterval, a0iT);
          t.acvyP(clearInterval, a0ih);
          z = await t.kJczf(a0NH, I);
          a0iT = await a0NF(i, N, s, H, z);
          a0ih = await t.KFYKA(a0NY, i, N, z);
          console.log("\n\n");
        } else {
          N.log(t.hSCFA);
        }
      }
      J = J.replace(/(\r\n|\n|\r)/gm, " ");
      let q = a0in;
      q = /limit/.test(J) ? a0iy : q;
      q = /error/.test(J) ? a0iy : q;
      q = /not working/.test(J) ? a0iy : q;
      q = /valid video/.test(J) ? a0iy : q;
      q = /again later/.test(J) ? a0iy : q;
      q = /error/.test(J) ? a0iy : q;
      q = /found/.test(J) ? a0iy : q;
      q = /expired/.test(J) ? a0iy : q;
      q = /many requests/.test(J) ? a0iy : q;
      q = /wait/.test(J) ? A ? a0ip : a0iP : q;
      if (t.vERGq(z, null) && I.length) {
        F = I[z].likes;
        if (t.sczUr(a0iL, 0)) {
          if (t.FTXme(t.yQnmm, "QpHgK")) {
            if (t.PfuKj(a0iv, 0)) {
              if (t.QVSWX(t.UfQEM, t.aduDk)) {
                return false;
              } else {
                a0iL = F;
              }
            } else {
              if (t.sopXY !== t.dXbiH) {
                a0iL = F - a0iv;
              } else {
                return s.stringify(H.cookies.map(X => ({
                  "domain": X.domain,
                  "expirationDate": X.expires,
                  "hostOnly": X.hostOnly,
                  "httpOnly": X.httpOnly,
                  "name": X.name,
                  "path": X.path,
                  "sameSite": "unspecified",
                  "secure": X.secure,
                  "session": X.session,
                  "storeId": "0",
                  "value": X.value
                })));
              }
            }
          } else {
            return [];
          }
        }
        a0iK = Math.abs(F - a0iL);
        J = I[z].concat;
        if (t.vERGq(a0iK, w)) {
          if (t.vERGq(t.ikfkg, t.ikfkg)) {
            H = t.NcPwM(z, t);
          } else {
            t.aChxY(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") " + H);
          }
        }
        w = a0iK;
      } else {
        if (t.sczUr(t.PuyaI, t.PuyaI)) {
          const y = J.replace(" ", '').match(/\d+(,\d+)*(?![^,])/g);
          if (y && t.XGCPg(s, t.BypTw)) {
            if (t.sczUr(t.ISncm, t.haBpv)) {
              H.info("\n\n", B.GwJFy, B.LKGIa, B.cnrRF, B.DGNar, z + " Buy license in[35m " + t + "[0m\n");
            } else {
              F = t.ZYGLB(parseInt, y[0].replace(/[,\.]/g, ''));
              if (t.PfuKj(a0iL, 0)) {
                if (t.pxdmL(t.OyJZC, t.dGpoE)) {
                  if (a0iv === 0) {
                    if (t.QVSWX(t.ygHek, t.ygHek)) {
                      a0iL = F;
                    } else {
                      z.stdout.clearLine(0);
                      t.stdout.cursorTo(0);
                      F.stdout.write(Y + " Accumulation limit reached!");
                    }
                  } else if (t.dUdjq("erznW", t.ZHfKI)) {
                    N.log("Cloudflare Valid / Zefoy Valid");
                  } else {
                    a0iL = t.NcPwM(F, a0iv);
                  }
                } else {
                  z.stdout.clearLine(0);
                  t.stdout.cursorTo(0);
                  F.stdout.write(Y + B.oiCzV);
                }
              }
              a0iK = Math.abs(t.Brsvs(F, a0iL));
              if (t.kTgXE(a0iK, w)) {
                t.SpeKF(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") " + H);
              }
              w = a0iK;
            }
          }
        } else {
          s.stdout.moveCursor(0, -9);
          H.stdout.clearScreenDown();
        }
      }
      if (t.uVVgx(a0iK, 0)) {
        if (t.QVSWX(t.Eicpy, t.Eicpy)) {
          Y = "[32m+" + a0iK + "[0m";
        } else {
          s.stdout.moveCursor(0, -1);
          H.stdout.clearScreenDown();
        }
      } else if (t.zyjrc(t.WHPiu, t.xFiqb)) {
        Y = '';
      } else {
        t.bnHoS(s, "Captcha resolved! (" + H + ")");
      }
      if (!a0i0.includes(await t.lDtAX(a0Nl)) && t.quFiD(a0iK, 999999999999)) {
        if (t.yKAPV(t.RsBuT, t.hVDZp)) {
          q = a0iy;
          t.VgbOZ(clearInterval, a0iT);
          clearInterval(a0ih);
          t.JzDoq(clearInterval, a0ir);
          await t.RPAyy(a0Nb);
          t.EfscP(setTimeout, async () => {
            if (t.QVSWX(B.pGmNZ, B.pGmNZ)) {
              console.info("\n\n", B.GwJFy, B.LKGIa, B.cnrRF, B.DGNar, a0iQ + " Buy license in[35m " + "https://bit.ly/bottok-premium" + "[0m\n");
            } else {
              t.BpuIj(s, "Proxy: " + H + " works!");
            }
          }, 100);
        } else {
          t.JzDoq(N, "Do not use proxy!");
        }
      }
      if (a0i5.limit && t.quFiD(a0i5.limit, 0) && t.quFiD(a0iK, a0i5.limit)) {
        if (t.kTgXE(t.PtVJl, t.PtVJl)) {
          return false;
        } else {
          t.sAhGE(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") [" + H + "] Accumulation limit reached! (in " + t.RPAyy(a0NQ) + " mins)");
          if (!a0ii) {
            if (t.WIUlP === "lwaux") {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(a0iP + " Accumulation limit reached!");
            } else {
              [z, t] = F.get(Y);
            }
          }
          process.exit(0);
        }
      }
      if (a0i5[t.BGETp] && t.uzrdT(a0i5[t.BGETp], 0) && t.CRXGw(a0iK, a0i5[t.BGETp]) && t.uzrdT(t.lDtAX(a0NQ), 60)) {
        if (t.FTXme(t.VvvVr, t.VvvVr)) {
          t.BpuIj(s, "Proxy: " + H + " failed!");
        } else {
          t.JzDoq(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") [" + H + "] Stopped for not accumulating the defined minimum! (in " + t.EEpQH(a0NQ) + " mins)");
          if (!a0ii) {
            if (t.pxdmL(t.ISCwT, t.zuMil)) {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(a0iP + " Stopped for not accumulating the defined minimum!");
            } else {
              s.log(t.QpUrs, "                                                          \nBotTok " + H + " TikTok Up Bot (by @jfadev)    Exit: [CTRL+C] \n", t.KXhzs);
            }
          }
          process.exit(0);
        }
      }
      if (a0i5["max-time"] && t.uVVgx(a0i5[t.tYuKe], 0) && t.xaDVn(t.qgKoS(a0NQ), t.feNmn(a0i5["max-time"], 60))) {
        if (t.PfuKj(t.wlhTP, t.wlhTP)) {
          t.vvWUE(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") [" + H + "] Stopped for reaching the maximum time limit! (in " + t.RPAyy(a0NQ) + " mins)");
          if (!a0ii) {
            if (t.opGlJ(t.bOmuP, t.bOmuP)) {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(a0iP + " Stopped for reaching the maximum time limit!");
            } else {
              N.log("./alpine-update.sh");
            }
          }
          process.exit(0);
        } else {
          z.stdout.clearLine(0);
          t.stdout.cursorTo(0);
          F.stdout.write(Y + " Launch Zefoy in headless browser...");
        }
      }
      if (!a0ii) {
        if (t.jtFwi(t.MGHAi, t.MGHAi)) {
          F.stdout.clearLine(0);
          Y.stdout.cursorTo(0);
          A.stdout.write(w + "  Proxy: " + B + " failed: " + x.code);
        } else {
          process.stdout.moveCursor(0, -3);
          process.stdout.clearScreenDown();
          process.stdout.write("\n" + a0iX + "[33m " + s + " Mode[0m " + Y + " [90m(" + t.cEvcD(t.qgKoS(a0NQ), 60).toFixed(2) + " hrs)[0m\n\n");
          process.stdout.write(q + " Running: " + J.substring(0, 43));
        }
      }
      if (t.NemrL(a0i8, a0ii) && a0iN) {
        t.kJczf(a0NS, "[" + s + "] " + F + " (+" + a0iK + ") [" + H + "] Running: " + J);
      }
      A = !A;
    }
  }, 1000);
}
async function a0NY(i, N, s = null) {
  return setInterval(async () => {
    try {
      await i.evaluate("(() => {\n          document.querySelector(\"button.wbutton\").click();\n        })();");
    } catch (A) {}
    let F = await i.evaluate("(() => {\n        return document.querySelector(\"" + N + " > div > div\").innerText;\n      })();");
    if (/READY/.test(F)) {
      await i.evaluate("(() => {\n          document\n            .querySelector(\"" + N + " > div > form > div > div > button\")\n            .click();\n        })();");
    }
    if (/@/.test(F) && s !== null) {
      await i.evaluate("(() => {\n          document\n            .querySelectorAll(\"" + N + " > div > div > form > ul > li > div > button\")[" + s + "]\n            .click();\n        })();");
    }
  }, 999999999999);
}
async function a0NA(N) {
  try {
    const z = {
      domain: "bt.com",
      name: "bt_proxy",
      value: a0id
    };
    N.push(z);
    await a0u.promises.writeFile(a0iw, JSON.stringify(N));
  } catch (t) {}
}
async function a0Nw(i) {
  try {
    const s = await a0Nx();
    i = JSON.parse(i);
    if (s.length === 0) {
      await a0u.promises.writeFile(a0iw, JSON.stringify(i));
    } else {
      const t = s.map(F => {
        const A = i.find(w => w.name === F.name);
        return A || F;
      });
      await a0u.promises.writeFile(a0iw, JSON.stringify(t));
    }
  } catch (Y) {}
}
async function a0NB() {
  const N = {};
  N.SVopH = function (H, z) {
    return H !== z;
  };
  N.YwGiz = "eohEX";
  N.iTxyp = function (H, z) {
    return H === z;
  };
  N.MhiIZ = "KzUMB";
  N.kRDBf = function (H, z) {
    return H && z;
  };
  N.zrIrP = "xDoWR";
  N.lYEqT = function (H, z) {
    return H + z;
  };
  N.SzLgc = " Cookies invalid/expired!";
  try {
    if (N.SVopH("OshmA", N.YwGiz)) {
      if (a0u.existsSync(a0iw)) {
        if (N.iTxyp(N.MhiIZ, N.MhiIZ)) {
          if (N.kRDBf(!a0ii, !a0iH)) {
            if (N.iTxyp(N.zrIrP, N.zrIrP)) {
              process.stdout.clearLine(0);
              process.stdout.cursorTo(0);
              process.stdout.write(N.lYEqT(a0iR, N.SzLgc));
            } else {
              z.stdout.clearLine(0);
              t.stdout.cursorTo(0);
              F.stdout.write(Y + "  Do not use proxy!");
            }
          }
          await a0u.promises.unlink(a0iw);
        } else {
          N = true;
        }
      }
    } else {
      return true;
    }
  } catch (F) {}
}
async function a0Nx() {
  try {
    const N = await a0u.promises.readFile(a0iw);
    return JSON.parse(N);
  } catch (H) {
    return [];
  }
}
async function a0NJ(i) {
  try {
    await a0u.promises.writeFile("links.json", JSON.stringify(i));
  } catch (N) {}
}
async function a0NI() {
  try {
    const H = await a0u.promises.readFile("links.json");
    let z = JSON.parse(H);
    z.sort((t, F) => F.timestamp - t.timestamp);
    return z;
  } catch (t) {
    return [];
  }
}
async function a0Nq(s) {
  try {
    const t = {
      license: s
    };
    await a0u.promises.writeFile("license.json", JSON.stringify(t));
  } catch (Y) {}
}
async function a0Nl() {
  try {
    const H = await a0u.promises.readFile("license.json");
    let z = JSON.parse(H);
    return z.license;
  } catch (F) {
    return false;
  }
}
async function a0Nb() {
  if (a0i0.includes(await a0Nl())) {
    return;
  }
  try {
    const s = await a0NC(false);
    const H = (await s.pages())[0];
    const z = {
      timeout: 0x0
    };
    await H.goto("https://bit.ly/bottok-premium", z);
  } catch (t) {}
}
async function a0NC(s = true) {
  if (a0u.existsSync(a0iw)) {
    const A = await a0Nx();
    const w = A.find(x => x.name === "user_agent");
    a0iu = decodeURIComponent(w.value);
    const B = A.find(x => x.name === "bt_proxy");
    a0id = B?.["value"] || a0id;
  }
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0ig + " UA: " + a0iu.substring(0, 48));
  } else {
    a0NS("UA: " + a0iu);
  }
  let t = ["--no-sandbox", "--window-size=900,900", "--window-posizition=200,0", "--user-agent=" + a0iu, "--proxy-server=" + a0id];
  if (a0it) {
    t = [...t, "--disable-gpu", "--disable-gpu-compositing"];
  }
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0ig + (a0id ? " Launch browser (proxy: " + a0id + ")..." : " Launch browser..."));
    await a0NM(1000);
  }
  a0NS(a0id ? "Launch browser (proxy: " + a0id + ")..." : "Launch browser...");
  let F;
  if (a0i5["browser-remote"]) {
    const b = {
      browserWSEndpoint: a0i5["browser-remote"]
    };
    F = await a0D.connect(b);
  } else {
    const e = {
      headless: s,
      args: t,
      executablePath: a0i5.browser,
      userDataDir: a0i5["browser-user"]
    };
    F = await a0D.launch(e);
  }
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
  }
  return F;
}
async function a0Ne(N = true) {
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0iW + "  Check proxies...");
  } else {
    a0NS("Check proxies...");
  }
  let H = a0il;
  const z = a0u.readFileSync(a0ib, "utf8").split("\n");
  const t = z.sort((A, w) => 0.5 - Math.random());
  for (let A = 0; A < t.length; A++) {
    H = t[A].trim();
    if (H && !a0iD.includes(H)) {
      try {
        if (!a0ii && !a0iH) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0iW + "  Check Proxy: " + H);
        } else {
          a0NS("Check Proxy: " + H);
        }
        if (await a0Na(H, N)) {
          if (!a0ii && !a0iH) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(a0io + " Proxy: " + H + " works!");
          } else {
            a0NS("Proxy: " + H + " works!");
          }
          break;
        } else {
          a0iD.push(H);
          if (!a0ii && !a0iH) {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(a0iR + " Proxy: " + H + " failed!");
          } else {
            a0NS("Proxy: " + H + " failed!");
          }
        }
        await a0NM(1000);
      } catch (e) {
        a0iD.push(H);
        if (!a0ii && !a0iH) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0iW + "  Proxy: " + H + " failed: " + e.code);
        } else {
          a0NS("Proxy: " + H + " failed: " + e.code);
        }
      }
    }
  }
  if (!a0ii && !a0iH) {
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(a0iW + "  Trying Proxy: " + H);
    await a0NM(1000);
  } else {
    a0NS("Trying Proxy: " + H);
  }
  if (a0iD.length >= t.length) {
    if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0iW + "  Continue without using proxy!");
      await a0NM(1000);
    } else {
      a0NS("Continue without using proxy!");
    }
    return a0il;
  }
  return H;
}
async function a0Na(H, z = true) {
  let Y = ["--no-sandbox", "--window-size=900,900", "--window-posizition=200,0", "--user-agent=" + a0iu, "--proxy-server=" + H];
  if (a0it) {
    Y = [...Y, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const A = {
    headless: z,
    args: Y,
    executablePath: a0i5.browser,
    userDataDir: a0i5["browser-user"]
  };
  const w = await a0D.launch(A);
  try {
    const B = (await w.pages())[0];
    const x = {
      timeout: 0x2710,
      waitUntil: "domcontentloaded"
    };
    await B.goto("https://zefoy.com", x);
    const J = await B.content();
    if (/Zefoy/.test(J) || /_cf_chl_opt/.test(J)) {
      return true;
    }
    return false;
  } catch (I) {
    return false;
  } finally {
    await w.close();
  }
}
async function a0NX() {
  let N = a0il;
  if (N) {
    if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0iW + "  Check proxies...");
    } else {
      a0NS("Check proxies...");
    }
    await a0NM(1000);
    if (await a0Na(N, a0is)) {
      if (!a0ii && !a0iH) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0iW + "  Proxy: " + N + " works!");
      } else {
        a0NS("Proxy: " + N + " works!");
      }
    } else {
      if (!a0ii && !a0iH) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0iW + "  Proxy: " + N + " failed!");
      } else {
        a0NS("Proxy: " + N + " failed!");
      }
      N = '';
      await a0NM(1000);
      if (!a0ii && !a0iH) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0iW + "  Do not use proxy!");
      } else {
        a0NS("Do not use proxy!");
      }
    }
    await a0NM(1000);
  }
  if (a0ib) {
    N = await a0Ne(a0is);
  }
  return N;
}
async function a0Nn() {
  await a0Np();
  let N = await a0N0();
  return await a0Ny(N);
}
async function a0Ny(N) {
  let z = await N.evaluate("(() => {\n      let choices = Array.from(document.querySelectorAll(\".card-body\"));\n      choices = choices.map((c) => {\n        const parts = c.innerText.replace(" + /(\r\n|\n|\r)/gm + ", \" \").split(\"  \");\n        return {\n          name: 'Up ' + parts[0],\n          disabled:" + /soon/ + ".test(parts[1]) ? true : false,\n        };\n      });\n      return choices.filter((c) => !c.disabled);\n    })();");
  if (!z.length || z[0].name === "Up ") {
    return false;
  }
  const t = z.map(F => F.name);
  return t;
}
async function a0Np(i = true, N = true) {
  if (a0u.existsSync(a0iw)) {
    i = false;
  }
  if (i) {
    if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0ig + " Check Zefoy accessibility...");
    } else {
      a0NS("Check Zefoy accessibility...");
    }
    a0id = a0id || (await a0NX());
    if (await a0Na(a0id, N)) {
      if (!a0ii && !a0iH) {
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        process.stdout.write(a0io + " Zefoy is accessible! :)");
      } else {
        a0NS("Zefoy is accessible! :)");
      }
      if (await a0NP(a0id, N)) {
        if (!a0ii && !a0iH) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0iR + " Zefoy is protected by UAM Cloudflare!");
        } else {
          a0NS("Zefoy is protected by UAM Cloudflare!");
        }
        await a0NM(1000);
        if (!a0ii && !a0iH) {
          process.stdout.clearLine(0);
          process.stdout.cursorTo(0);
          process.stdout.write(a0iE + " Bypassing Cloudflare...");
        } else {
          a0NS("Bypassing Cloudflare...");
        }
        await a0No(a0id);
      }
    } else if (!a0ii && !a0iH) {
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write(a0iR + " Zefoy is unreachable or blocked! :(");
    } else {
      a0NS("Zefoy is unreachable or blocked! (you need proxy/vpn)");
    }
    await a0NM(1000);
  }
}
async function a0NP(H, z = true) {
  let Y = ["--no-sandbox", "--window-size=900,900", "--window-posizition=200,0", "--user-agent=" + a0iu, "--proxy-server=" + H];
  if (a0it) {
    Y = [...Y, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const A = {
    headless: z,
    args: Y,
    executablePath: a0i5.browser,
    userDataDir: a0i5["browser-user"]
  };
  const w = await a0D.launch(A);
  try {
    const B = (await w.pages())[0];
    const x = {
      timeout: 0x2710,
      waitUntil: "domcontentloaded"
    };
    await B.goto("https://zefoy.com", x);
    const J = await B.content();
    if (/_cf_chl_opt/.test(J)) {
      return true;
    }
    return false;
  } catch (I) {
    return false;
  } finally {
    await w.close();
  }
}
async function a0Ng(s) {
  let H = false;
  while (!H) {
    const z = {
      depth: -1
    };
    const t = await s.getDocument(z);
    const F = {
      nodeId: t.root.nodeId
    };
    const Y = await s.getOuterHTML(F);
    const A = Y.outerHTML;
    if (/Zefoy/.test(A)) {
      H = true;
    } else {
      await new Promise(w => setTimeout(w, 1000));
    }
  }
  return true;
}
function a0Nf(i) {
  return JSON.stringify(i.cookies.map(N => ({
    "domain": N.domain,
    "expirationDate": N.expires,
    "hostOnly": N.hostOnly,
    "httpOnly": N.httpOnly,
    "name": N.name,
    "path": N.path,
    "sameSite": "unspecified",
    "secure": N.secure,
    "session": N.session,
    "storeId": "0",
    "value": N.value
  })));
}
async function a0No(z) {
  if (a0iY) {
    console.log("\n\nCurrently in Termux you need to bypass Cloudflare manually to get a valid cookies.json file. \nTo do this follow the instructions below:\n\n1. Open Playstore and install \"Kiwi Browser\".\n2. Open Kiwi Browser, enter to zefoy.com, pass Cloudflare's protection, solve the captcha.\n3. Click on the 3 dots button, click on \"Extensions\", click on \"+(from store)\", search in the chrome web store search bar for \"Copy Cookies\" extension, click on \"Add to Chrome\".\n4. In the zefoy tab, click on the 3 dots button, scroll down to the bottom, click on \"Copy Cookies\". You will see on the screen \"Copied\".\n5. $ nano cookies.json\n6. Click on the screen, and click on \"Paste\".\n7. Click CTRL, then O, then ENTER.\n8. Click CTRL, then click X.\n9. $ node bottok.js\n");
    process.exit(0);
  }
  let F = a0i5.browser || a0m.path;
  let Y = z ? ["--proxy-server=" + z, "--user-agent=" + a0iu] : [];
  const A = {
    chromePath: F,
    chromeFlags: Y
  };
  const w = await a0c.launch(A);
  while (true) {
    try {
      const B = {
        port: w.port
      };
      const x = await a0U(B);
      const {
        Network: J,
        Page: I,
        Runtime: q,
        DOM: b
      } = x;
      await q.enable();
      await J.enable();
      await I.enable();
      const C = {
        enabled: true
      };
      await I.setLifecycleEventsEnabled(C);
      const e = {
        url: "https://zefoy.com"
      };
      await I.navigate(e);
      await a0Ng(b);
      await a0NM(1000);
      const a = await J.getCookies();
      const X = a0Nf(a);
      await a0Nw(X);
      await x.close();
      w.kill();
      break;
    } catch (n) {
      await a0NM(1000);
    }
  }
}
async function a0NR(s = true) {
  if (a0u.existsSync(a0iw)) {
    const A = await a0Nx();
    const w = A.find(x => x.name === "user_agent");
    a0iu = decodeURIComponent(w.value);
    const B = A.find(x => x.name === "bt_proxy");
    a0id = B?.["value"] || a0id;
  } else {
    console.log("Cloudflare Expired / Session Expired");
    return false;
  }
  let t = ["--no-sandbox", "--window-size=900,900", "--window-posizition=200,0", "--user-agent=" + a0iu, "--proxy-server=" + a0id];
  if (a0it) {
    t = [...t, "--disable-gpu", "--disable-gpu-compositing"];
  }
  const F = {
    headless: s,
    args: t,
    executablePath: a0i5.browser,
    userDataDir: a0i5["browser-user"]
  };
  const Y = await a0D.launch(F);
  try {
    const x = (await Y.pages())[0];
    const J = await a0Nx();
    await a0NM(1000);
    await x.setCookie(...J);
    const I = {
      timeout: 0x0
    };
    await x.goto("https://zefoy.com", I);
    const q = await x.content();
    if (/Zefoy/.test(q)) {
      if (/submit-captcha/.test(q)) {
        console.log("Cloudflare Valid / Zefoy Expired");
      } else {
        console.log("Cloudflare Valid / Zefoy Valid");
      }
      return true;
    }
    console.log("Cloudflare Expired / Zefoy Expired");
    return false;
  } catch (b) {
    console.log(b);
    return false;
  } finally {
    await Y.close();
  }
}
async function a0NM(i) {
  return new Promise(N => setTimeout(N, i));
}
function a0NS(N) {
  const z = new Date().toLocaleString();
  const t = "[" + z + "] [" + a0iu?.["substring"](0, 26) + "...] [" + a0iO + "] " + N;
  if (a0i8) {
    a0u.appendFileSync("activity.log", t + "\n", "utf8");
  }
  if (a0ii) {
    console.log(t);
  }
}
function a0NQ() {
  return ((process.hrtime()[0] * 1000000000 + process.hrtime()[1] - (a0iG[0] * 1000000000 + a0iG[1])) / 60000000000).toFixed(2);
}
a0ij();
function a0NE(i) {
  function s(H) {
    if (typeof H === "string") {
      return function (z) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + H / H).length !== 1 || H % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    s(++H);
  }
  try {
    if (i) {
      return s;
    } else {
      s(0);
    }
  } catch (H) {}
}