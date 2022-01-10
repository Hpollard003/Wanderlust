User.create(username: 'Hunter_P', password: 'password', password_confirmation: 'password')
User.create(username: 'NoraCarter_', password: 'password', password_confirmation: 'password')
User.create(username: 'ArcherFelix_', password: 'password', password_confirmation: 'password')
User.create(username: 'Felix_Archer', password: 'password', password_confirmation: 'password')
User.create(username: 'Nora_Archer', password: 'password', password_confirmation: 'password')
User.create(username: 'Danielle_Archer', password: 'password', password_confirmation: 'password')
User.create(username: 'Felix_Felix', password: 'password', password_confirmation: 'password')
User.create(username: 'Hunter_Archer', password: 'password', password_confirmation: 'password')
User.create(username: 'JeanLevi', password: 'password', password_confirmation: 'password')
User.create(username: 'Archer', password: 'password', password_confirmation: 'password')
User.create(username: 'RaplhyMays', password: 'password', password_confirmation: 'password')
puts "Created 😀"


Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 1)
Journal.create(title: "London", user_id: 1)
Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 2)
Journal.create(title: "London", user_id: 2)
Journal.create(title: "EuroTrip", user_id: 2)
Journal.create(title: "Japan", user_id: 3)
Journal.create(title: "Greece", user_id: 3)
Journal.create(title: "Austrailia", user_id: 3)
Journal.create(title: "London", user_id: 3)
puts "Created 📘"


Page.create(title: "Eurail Pass", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Eurail Pass pt2", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Eurail Pass pt3", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Japan Railpass pt2", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Japan Railpass pt3", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Geneator Hostel", body: "It wasn't expensive but it really paid off", journal_id: 10)
Page.create(title: "Eurail Pass pt2", body: "It was expensive but it really paid off", journal_id: 11)
Page.create(title: "Eurail Pass pt3", body: "It was expensive but it really paid off", journal_id: 10)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", journal_id: 10)
Page.create(title: "Japan Railpass pt2", body: "It was expensive but it really paid off", journal_id: 11)
Page.create(title: "Japan Railpass pt3", body: "It was expensive but it really paid off", journal_id: 11)

puts "Created 📄"

