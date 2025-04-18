const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo (Congo-Brazzaville)",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia (Czech Republic)",
  "Democratic Republic of the Congo",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea (North)",
  "Korea (South)",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar (Burma)",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
function show() {
  let newarray = countries.filter((country) => {
    country = country.slice(0, input1.value.length);
    return country.toLowerCase().includes(input1.value.toLowerCase());
  });
  // console.log(newarray)
  paragraph.innerHTML = "";
  if (input1.value) {
    newarray.forEach((newarray) => {
      let p1 = document.createElement("p");
      p1.innerHTML = newarray;
      paragraph.append(p1);
      p1.onclick = () => {
        input1.value = newarray;
        paragraph.innerHTML = "";
      };
    });
  }
}

function newfunction() {
  fetch("https://restcountries.com/v3.1/all")
    .then((k) => {
      return k.json();
    })
    .then((data) => {
      console.log(data);

      data.filter((items) => {
        let div = document.createElement("div");
        div.className = "cards";

        let img = document.createElement("img");
        img.className = "img2";
        img.src = items.flags.png;

        let h2 = document.createElement("h2");
        h2.innerHTML = items.name.common;

        let p = document.createElement("p");
        // p.className = "p1"
        p.innerHTML = `<span style = "font-weight : 900;"> Capital City </span>:  ${items.capital[0]} `;

        div.append(img, h2, p);
        rest.append(div);
      });
    });
}
newfunction();

function Search() {
  fetch(`https://restcountries.com/v3.1/name/${input1.value}`)
    .then((a) => {
      return a.json();
    })
    .then((t) => {
      console.log(t);

      let items = t[0];

      rest.innerHTML = "";

      let div = document.createElement("div");
      div.className = "cards";

      let img = document.createElement("img");
      img.className = "img2";
      img.src = items.flags.png;

      let h2 = document.createElement("h2");
      h2.innerHTML = items.name.common;

      let p = document.createElement("p");
      p.className = "p1";
      p.innerHTML = `<span style = "font-weight : 900;"> Capital City </span>:  ${items.capital} `;

      div.append(img, h2, p);
      rest.append(div);

      paragraph.innerHTML = "";
    });
}

function Enterrr(event) {
  console.log("key press", event);

  if (event.key == "Enter") Search();
}
