let username = Meteor.settings.neo4j.username
let password = Meteor.settings.neo4j.password

Neo4j = new Neo4jDB('http://' + username + ':' + password + '@recengine.sb05.stations.graphenedb.com:24789')

console.log(R.length(R.flatten(Neo4j.query("MATCH (a), ()-[r]-() RETURN a,r"))));


// if (Neo4j.query("MATCH (a), ()-[r]-() RETURN a,r"))

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
