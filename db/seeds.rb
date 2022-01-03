User.create(username: 'Hpollard003', password: 'password', password_confirmation: 'password')
User.create(username: 'Felix003', password: 'password', password_confirmation: 'password')
User.create(username: 'Hpollard', password: 'password', password_confirmation: 'password')
puts "Created 😀"


Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 1)
Journal.create(title: "London", user_id: 1)
Journal.create(title: "London", user_id: 2)
Journal.create(title: "London", user_id: 3)
puts "Created 📘"


Page.create(title: "Eurail Pass", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Eurail Pass pt2", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Eurail Pass pt3", body: "It was expensive but it really paid off", journal_id: 1)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Japan Railpass pt2", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Japan Railpass pt3", body: "It was expensive but it really paid off", journal_id: 2)
Page.create(title: "Geneator Hostel", body: "It wasn't expensive but it really paid off", journal_id: 3)
puts "Created 📄"

