var dataBase = [{
    url:"https://www.youtube.com/watch?v=-G5XI61Y9ms&ab_channel=WaltDisneyStudiosCanada",
    name: "aladin 2019",
    img: './images/aladin 2019.jpeg',
    category: "Comedy",
    imdbRating: 6.9,
    releaseDate: 2014,
    director: 'Guy Ritchie',
    Cast: ['Will Smith', 'Mena Massoud', 'Naomi Scott', 'Marwan Kenzari', 'Navid Negahban'],
    producer: 'Jonathan Eirich'
}, {
    url:"https://www.youtube.com/watch?v=5WfTEZJnv_8&t=1s&ab_channel=MarvelEntertainment",
    name: "Ant-Man and the Wasp: Quantumania",
    img: './images/Peyton Reed.jpeg',
    category: 'Action',
    imdbRating: 8.95,
    releaseDate: 2020,
    director: 'Peter Sohn',
    Cast: ['Leah Lewis', 'Mamoudou Athie'],
    producer: 'Denise Ream'
}, {
    url:"https://www.youtube.com/watch?v=o5F8MOz_IDw&ab_channel=Avatar",
    name: "Avatar: The Way of Water",
    img: './images/a.jpeg',
    category: 'Action',
    imdbRating: 8.9,
    releaseDate: 2022,
    director: 'James Cameron',
    Cast: ['Zoe Saldaña', 'Sam Worthington', 'Sigourney Weaver', 'Stephen Lang', 'Cliff Curtis', 'Joel David Moore', 'CCH Pounder', 'Edie Falco', 'Jemaine Clement', 'Kate Winslet'],
    producer: 'Jonathan Eirich'
}, {
    url:"https://www.youtube.com/watch?v=Go8nTmfrQd8&ab_channel=MarvelEntertainment",
    name: "Thor: Love and Thunder",
    img: './images/Thor: Love and Thunder.jpeg',
    category: 'Fantasy',
    imdbRating: 6.3,
    releaseDate: 2016,
    director: 'Guy Ritchie',
    Cast: ['Will Smith', 'Mena Massoud', 'Naomi Scott', 'Marwan Kenzari', 'Navid Negahban'],
    producer: 'Jonathan Eirich'
}, {
    url:"https://www.youtube.com/watch?v=f_HvoipFcA8&ab_channel=WaltDisneyStudios",
    name: "Jungle Cruise",
    img: './images/Jungle Cruise.jpeg',
    category: 'Adventure',
    imdbRating: 6.6,
    releaseDate: 2028,
    director: 'Jaume Collet-Serra',
    Cast: ['John Davis', 'John Fox', 'Beau Flynn', 'Dwayne Johnson', 'Hiram Garcia'],
    producer: 'John Davis'
}, {
    url:"https://www.youtube.com/watch?v=nrZxwPwmgrw&ab_channel=DisneyMusicVEVO",
    name: "Frozen 2",
    img: './images/Frozen 2.jpeg',
    category: 'Adventure',
    imdbRating: 3.8,
    releaseDate: 2012,
    director: 'Chris Buck',
    Cast: ['Kristen Bell', 'Idina Menzel', 'Josh Gad', 'Jonathan Groff', 'Sterling K. Brown', 'Evan Rachel Wood', 'Alfred Molina', 'Martha Plimpton', 'Jason Ritter', 'Rachel Matthews', 'Jeremy Sisto', 'Ciaran Hinds', 'Alan Tudyk', 'Hadley Gannaway', 'Mattea Conforti', 'AURORA', 'Alan Tudyk', 'Libby Stubenrauch', 'Santino Fontana', 'Eva Bella'],
    producer: 'Peter Del Vecho'
}, {
    url:"https://www.youtube.com/watch?v=8Qn_spdM5Zg&ab_channel=StarWars",
    name: "Star Wars: The Rise of Skywalker (Episode IX)",
    img: './images/b.jpeg',
    category: 'Fantasy',
    imdbRating: 4.8,
    releaseDate: 2016,
    director: 'J.J. Abrams',
    Cast: ["Carrie Fisher", "Mark Hamill", "Adam Driver", "Daisy Ridley", "John Boyega", "Oscar Isaac", "Anthony Daniels", "Naomi Ackie", "Domhnall Gleeson", "Richard E. Grant", "Lupita Nyong'o", 'Keri Russell', 'Joonas Suotamo', 'Kelly Marie Tran', 'Ian McDiarmid', 'Billy Dee Williams', 'Greg Grunberg', 'Shirley Henderson', 'Billie Lourd', 'Dominic Monaghan'],
    producer: 'Kathleen Kennedy'
}
]


if(localStorage.length){
    $('main').prepend(`<h1 id="user">Welcome ${localStorage.username} !<h1/>`)
}

setTimeout(e=>$("audio")[0].play(),2000);

//finds best rated movie
var best = findBest()
function findBest() {
    var best = dataBase[0];
    dataBase.forEach((e, i) => {
        if (e.imdbRating > best.imdbRating) {
            best = e
        }


    })
    return best;
}




//renders the display div 
function display(arr) {
    arr.forEach((e,i) => {
        if(e.name===best.name){
            $("#display").append(`<div class="item"><img src="${e.img}" alt="" style="border:2px solid gold;position: relative;z-index: -1;">
            <img src="highR.jpg" style="border-radius: 2200px; position: absolute;width: 150px; z-index:1;margin-left:-350px;margin-top:20px"><button id="${i}" class="btn btn-secondary">Play This Movie</button>
          </div>`)
        }
        else
        $("#display").append(`<div class="item"><img style="border:2px solid transparent; outline: none; "src="${e.img}" alt=""><button id="${i}" class="btn btn-secondary">Play This Movie</button></div> `)
    })
    addVideos();
}

display(dataBase);


//allow us to filter movies by categories
$('#select').on('change', function () {
    var value = ($('#select').val());
   

    $("#display").children().remove();
    var newarr = dataBase.filter(e => { return e.category === value || value === "All" })
    
    display(newarr)

})



//allows us to search for a movie name
$("#btn").on("click", function () {
    var input = $('#SeachInput').val()

    var newacc = dataBase.filter(e => {
        return e.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })
    $("#display").children().remove();

    display(newacc);




})


//allows us to search for a movie name when a keyboard input made
$("#SeachInput").on("input", function () {

    var input = $('#SeachInput').val()
    var newacc = dataBase.filter(e => {
        return e.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    })
    $("#display").children().remove();

    display(newacc);


})


//play a youtube video
function addVideos(){
$(".btn").click(function(event){
    $('audio')[0].pause();
    window.open(dataBase[event.target.id].url)
})

}