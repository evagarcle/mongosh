mongosh

use evaDB

db.createCollection("users")
db.createCollection("posts")

// INSERTS EN POSTS:
db.posts.insertMany([{title:"Las proteínas", body:"Las proteínas...", username: "Eva", comments: [{username: "Pepa", body:"Muy explicativo"}, {username:"Pepe", body:"Interesante"}]},
{title:"Las grasas", body:"Las grasas...", username: "Iván", comments: [{username: "Pepe", body:"Súper útil"}, {username:"Pepito", body:"Extremadamente interesante"}]},
{title:"Los carbohidratos", body:"Los carbohidratos...", username: "Óscar", comments: [{username: "Pepita", body:"Muy interesante"}, {username:"Pepe", body:"Muy poco interesante"}]},
{title:"Las calorías", body:"Las calorías...", username: "Álvaro", comments: [{username: "Pepa", body:"Muy repetitivo"}, {username:"Pepita", body:"Poco o nada interesante"}]}])

db.posts.insertMany([{title:"La sal", body:"La sal...", username: "Jose Luis", comments: [{username: "Pepa", body:"No me gusta"}, {username:"Pepe", body:"Me gusta"}]},
{title:"El azúcar", body:"El azúcar...", username: "Juan Carlos", comments: [{username: "Pepe", body:"Me encanta"}, {username:"Pepito", body:"Poco extenso"}]},
{title:"El colesterol", body:"El colesterol...", username: "Javier", comments: [{username: "Pepita", body:"Me gusta"}, {username:"Pepe", body:"Poco interesante"}]},
{title:"Las hormonas", body:"Las hormonas...", username: "Mariana", comments: [{username: "Pepa", body:"No me gusta"}, {username:"Pepita", body:"Poco importante"}]}])

db.posts.insertMany([{title:"Las legumbres", body:"Las legumbres...", username: "Juliana", comments: [{username: "Pepa", body:"Muy interesante"}, {username:"Pepe", body:"Poco interesante"}]},
{title:"Las frutas", body:"Las frutas...", username: "Sofía", comments: [{username: "Pepe", body:"Muy interesante"}, {username:"Pepito", body:"Poco interesante"}]},
{title:"Las verduras", body:"Las verduras...", username: "Yolanda", comments: [{username: "Pepita", body:"Me flipa"}, {username:"Pepe", body:"Poco relevante"}]},
{title:"El pescado", body:"El pescado...", username: "Sandra", comments: [{username: "Pepa", body:"Me disgusta"}, {username:"Pepita", body:"Poco interesante"}]}])

db.posts.insertMany([{title:"Las vitaminas", body:"Las proteínas...", username: "Beatriz", comments: [{username: "Pepa", body:"Muy interesante"}, {username:"Pepe", body:"Poco explicativo"}]},
{title:"Los minerales", body:"Las grasas...", username: "Mirella", comments: [{username: "Pepe", body:"Muy chulo"}, {username:"Pepito", body:"Poco interesante"}]},
{title:"Perder grasa", body:"Perder grasa...", username: "Santiago", comments: [{username: "Pepita", body:"Muy guay"}, {username:"Pepito", body:"Poco útil"}]},
{title:"El entrenamiento", body:"El entrenamiento...", username: "Milagros", comments: [{username: "Pepa", body:"Muy top"}, {username:"Pepita", body:"Poco interesante"}]}])


// INSERTS EN USERS:
db.users.insertMany([{username:"Luffy", email:"luffy@gmail.com", age:18},{username:"Zoro", email:"zoro@gmail.com", age:20},{username:"Nami", email:"nami@gmail.com", age:19},{username:"Chopper", email:"chopper@gmail.com", age:15}])

db.users.insertMany([{username:"Usopp", email:"usopp@gmail.com", age:17},{username:"Robin", email:"robin@gmail.com", age:24},{username:"Sanji", email:"sanji@gmail.com", age:20},{username:"Pudding", email:"pudding@gmail.com", age:20}])

db.users.insertMany([{username:"Franky", email:"franky@gmail.com", age:19},{username:"Brook", email:"brook@gmail.com", age:100},{username:"Ace", email:"ace@gmail.com", age:25},{username:"Law", email:"law@gmail.com", age:19}])


// UPDATES POSTS
db.posts.updateOne({title:"Las verduras"}, {$set:{title:"Las deliciosas verduras", body:"Las deliciosas verduras...", username: "Nuria", comments: [{username: "Pepote", body:"Me encanta"}, {username:"Pepito", body:"Súper interesante y explicativo"}]}})

db.posts.updateOne({title:"El pescado"}, {$set:{body:"¿Prefieres pescado azul o pescado blanco?"}})

db.posts.updateOne({ title: "Las verduras", "comments.username": "Pepito" },{ $set: { "comments.$.body": "No me gustan las verduras pero hay que comerlas porque son saludables" }})

// UPDATES USERS
db.users.updateOne({username:"Usopp"}, {$set:{username:"Usopp el Fuerte", email:"usoppelfuerte@gmail.com", age:18}})

db.users.updateOne({username:"Nami"}, {$set:{email:"namilanavegante@gmail.com"}})
db.users.updateOne({username:"Sanji"}, {$set:{email:"sanjielcocinero@gmail.com"}})

db.users.updateOne({username:"Brook"},{$inc:{age:5}})


// OBTENER DATOS

db.posts.find()

db.posts.find({username:"Beatriz"})

db.users.find({age:{$gt:20}})

db.users.find({age:{$lt:23}})

db.users.find({$and:[{age:{$gt:"25"}},{age:{$lt:"30"}}]})

db.users.find().sort({price:-1})

db.users.find().sort({price:1})

db.users.find().count()

db.posts.find().forEach((doc)=> {
  print("title one: " + doc.title)
})

db.users.find().limit(2)

db.posts.find({title:"Las proteínas"}).limit(2)

db.users.deleteMany({age:{$gt:30}})


// EXTRAS

// Seleccionar el número total de publicaciones que tienen más de un comentario:
db.posts.find({ comments: { $exists: true, $not: { $size: 0 } } }).count()

// Seleccionar la última publicación creada:
db.posts.find().sort({ createdAt: -1 }).limit(1)

// Seleccionar 5 publicaciones que sean las últimas creadas:
db.posts.find().sort({ createdAt: -1 }).limit(5)

// Eliminar todas las publicaciones que tienen más de un comentario:
db.posts.deleteMany({ comments: { $exists: true, $not: { $size: 1 } } })

  





