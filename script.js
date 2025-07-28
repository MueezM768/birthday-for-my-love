const nicknames = [
  "mii jaanah",
  "mii begumm",
  "begum jiii",
  "shahzadii",
  "mii princess",
  "queen of my heart",
  "mii babay",
  "mera putrr",
  "mera betaa",
  "mera bachaa"
];

let index = 0;

function changeNickname() {
  index = (index + 1) % nicknames.length;
  document.getElementById("nickname").innerText = nicknames[index];
}
