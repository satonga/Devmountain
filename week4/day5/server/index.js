const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A lifetime of happiness lies ahead of you.",
    "A smooth long journey! Great expectations.",
    "All your hard work will soon pay off.",
    "Because you demand more from yourself, others respect you deeply.",
    "Dedicate yourself with a calm mind to the task at hand."]
    
    let randomIndex2 = Math.floor(Math.random() * fortune.length)
    let randomFortune = fortune[randomIndex2]
    
    res.status(200).send(randomFortune)
  })


app.get("/api/encouraged/:id", (req, res) => {
  if (req.params.id === "yes") {
    const encourgements = [
      "You're great."
    ]
  
    let randIndex = Math.floor(Math.random() * encourgements.length)
    let randEncourge = encourgements[randIndex]
  
    res.status(200).send(randEncourge)  
  } else{
    const encourgements = [
      "You suck.", 
      "Try again."
    ]
    let randIndex = Math.floor(Math.random() * encourgements.length)
    let randEncourge = encourgements[randIndex]

    res.status(200).send(randEncourge)
  }
 
})

app.post("/api/aggressive", (req, res) => {

  const text = req.body.text

  res.status(200).send(text.toUpperCase())
})
    
app.listen(4000, () => console.log("Server running on 4000"));
