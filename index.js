require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const githubData ={
"login": "ishansaxena012",
"id": 153154292,
"node_id": "U_kgDOCSDy9A",
"avatar_url": "https://avatars.githubusercontent.com/u/153154292?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/ishansaxena012",
"html_url": "https://github.com/ishansaxena012",
"followers_url": "https://api.github.com/users/ishansaxena012/followers",
"following_url": "https://api.github.com/users/ishansaxena012/following{/other_user}",
"gists_url": "https://api.github.com/users/ishansaxena012/gists{/gist_id}",
"starred_url": "https://api.github.com/users/ishansaxena012/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/ishansaxena012/subscriptions",
"organizations_url": "https://api.github.com/users/ishansaxena012/orgs",
"repos_url": "https://api.github.com/users/ishansaxena012/repos",
"events_url": "https://api.github.com/users/ishansaxena012/events{/privacy}",
"received_events_url": "https://api.github.com/users/ishansaxena012/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "Ishan Saxena",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": null,
"twitter_username": null,
"public_repos": 14,
"public_gists": 0,
"followers": 3,
"following": 3,
"created_at": "2023-12-07T03:43:52Z",
"updated_at": "2025-07-14T06:11:02Z"
} 

app.get('/', (req, res) => {
  res.send('index.js this side')
})

app.get('/instagram',(req,res) =>{
    res.send('ishan.saxena27')
})

app.get('/login',(req,res) =>{
    res.send('<h1>LOGIN<h1>')
})
app.get('/github',(req,res) =>{
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
