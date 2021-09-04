<script>
let header = "Notes";
let naturals = ["A","B","C","D","E","F","G"];
let sharps = ["A&#x266F;","C&#x266F;","D&#x266F;","F&#x266F;","G&#x266F;"]
let flats = ["D&#x266D;","E&#x266D;","G&#x266D;","A&#x266D;","B&#x266D;"]

let allnotes = naturals.concat(sharps, flats)
allnotes.sort(function(a, b){return 0.5 - Math.random()});

let html = `<h2>${header}</h2><ul>`;

for (const x of allnotes) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
</script>