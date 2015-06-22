let username = Meteor.settings.neo4j.username
let password = Meteor.settings.neo4j.password

Neo4j = new Neo4jDB('http://' + username + ':' + password + '@recengine.sb05.stations.graphenedb.com:24789')
