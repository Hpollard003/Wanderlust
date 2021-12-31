User.create(username: 'Hpollard003', password: 'password', password_confirmation: 'password')
puts "Created 😀"

Journel.create(title: "EuroTrip", user_id: 1)
Journel.create(title: "Japan", user_id: 1)
Journel.create(title: "London", user_id: 1)
puts "Created 📘"

Page.create(title: "Eurail Pass", body: "It was expensive but it really paid off", journel_id: 1)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", journel_id: 2)
Page.create(title: "Geneator Hostel", body: "It wasn't expensive but it really paid off", journel_id: 3)
puts "Created 📄"

