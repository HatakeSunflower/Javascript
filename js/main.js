var strings = ["BD", "55", "7A", "1C"];
var randomIndex = Math.floor(Math.random() * strings.length);
var randomString1 = strings[randomIndex];

Array.from({ length: 36 }, () => Math.floor(Math.random() * strings.length));

document.getElementById("f1c1").innerHTML = randomString1;
