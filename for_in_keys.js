data = [
    {
        name: "Kevin",
        favorites: 
            {
                "movie": "Being There",
                "game": "Go",
                "book": "Stranger",
                "album": "I could live in hope."
            }
        
    },
    {
        name: "Nina",
        favorites: 
            {
                "color": "blue",
                "movie": "assasins",
                "game": "pigs",
                "book": "earthsea",
            }
        
    }
]

data.forEach(person=>{

   console.log(person.name);

   for(key in person.favorites){
        value = person.favorites[key]
        console.log(`\t${key}:\t${value}`)
   }

});
