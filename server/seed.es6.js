let username = Meteor.settings.neo4j.username
let password = Meteor.settings.neo4j.password

Neo4j = new Neo4jDB('http://' + username + ':' + password + '@recengine.sb05.stations.graphenedb.com:24789')

let seedDB = function() {
  let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];
  let people = createPeople();

  function createPeople() {
    let addName = function() {
      let name = faker.name.findName();
      newName = name.replace(/'/g, "\\'")
      Neo4j.query("MERGE (a:Person {name: '"+newName+"'})" )
    }


    R.forEach(addName, R.range(1, 501))

}
  // First function should create people
  // Second function should create locations
  // Third function should match people with locations

}

if (R.length(R.flatten(Neo4j.query("MATCH (n) OPTIONAL MATCH (n)-[r]-() RETURN n,r"))) === 0) {
  seedDB();
}

Meteor.startup(function() {
  // Neo4j.reset()
})

// if (Addresses.find().count() === 0) {
//   _.each(_.range(100), function(el, i) {
//     console.log("Adding address #" + i);
//     let address = faker.address.country();
//     let test1 = new RegExp('\\.', 'ig');
//     let test2 = new RegExp('\\?', 'ig');
//
//     // TODO we can get rid of this test once we get IDs working...
//     if (!test1.test(address) && !test2.test(address)) { // Needs to check to make sure there are no "." or "$" in the word
//       Addresses.insert({ address })
//     } else { console.error("Word contained illegal character.");}
//   })
// }
//
// // Create 1000 users
// if (Meteor.users.find().count() < 10) {
//   _.each(_.range(10), function(el, i) {
//     console.log("Creating user #" + i);
//     let name = faker.name.findName();
//     let username = faker.internet.userName();
//     Accounts.createUser({
//       username,
//       profile: {
//         name
//       },
//       password: 'password'
//     })
//   })
// }
//
// if (RecEngine.find().fetch().length === 0) {
//   let addresses = Addresses.find().fetch();
//   let users = Meteor.users.find().fetch();
//
//   _.each(addresses, function(el, i) {
//     user = _.sample(users)
//     // console.log("Running #" + i + " -- Linking " + user.username + " to " + el.address);
//     recEngine.link(user.username, el.address);
//     // recEngine.link(user._id, el._id); // For whatever reason, this does not work with IDs, but it works perfectly with strings... Huh...
//   })
// }
