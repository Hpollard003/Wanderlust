User.create(username: 'Hpollard003', password: 'password', password_confirmation: 'password')
User.create(username: 'Felix003', password: 'password', password_confirmation: 'password')
User.create(username: 'Hpollard', password: 'password', password_confirmation: 'password')
puts "Created 😀"

names.each do |name|
    user = User.create(name: name)
    Invitation.create(user_id: 1, friend_id: user.id)
end


Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 1)
Journal.create(title: "London", user_id: 1)
Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 1)
Journal.create(title: "London", user_id: 1)
Journal.create(title: "EuroTrip", user_id: 1)
Journal.create(title: "Japan", user_id: 1)
Journal.create(title: "London", user_id: 1)
Journal.create(title: "London", user_id: 2)
Journal.create(title: "London", user_id: 3)
puts "Created 📘"


Page.create(title: "Eurail Pass", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Eurail Pass pt2", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Eurail Pass pt3", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", image: "", journal_id: 2)
Page.create(title: "Japan Railpass pt2", body: "It was expensive but it really paid off", image: "", journal_id: 2)
Page.create(title: "Japan Railpass pt3", body: "It was expensive but it really paid off", image: "", journal_id: 2)
Page.create(title: "Geneator Hostel", body: "It wasn't expensive but it really paid off", image: "", journal_id: 3)
Page.create(title: "Eurail Pass pt2", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Eurail Pass pt3", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Japan Railpass", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Japan Railpass pt2", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Japan Railpass pt3", body: "It was expensive but it really paid off", image: "", journal_id: 1)
Page.create(title: "Geneator Hostel", body: "It wasn't expensive but it really paid off", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.A0wZPZF0oaduL6MvzIIa9wAAAA%26pid%3DApi&f=1", journal_id: 1)
puts "Created 📄"

