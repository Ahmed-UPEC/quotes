$(function() {


    $('#gen_button').click(function() {
        generation()
        $('#button_div').fadeOut('slow')
        $('#quote_div').delay(1500).fadeIn('slow')
    })
    $('#gen_button1').click(function() {
        $('#gen_button1').prop("disabled",'true')
        $('#quote_div').fadeOut(1000)
        setTimeout(generation,1000)
        $('#quote_div').fadeIn(2000, function() {
            $('#gen_button1').removeAttr("disabled")
        })
    })


})

function generation() {
    var x = Math.floor(Math.random() * (citations.length));
    var y_img = citations[x].image;
    var y_name = citations[x].name;
    var y_date = citations[x].date;
    var y_quote = citations[x].quote;

    $('.img').attr('src', y_img)
    $('#qname').text(y_name)
    $('#qh3').text(y_date)
    $('#qquote').text(y_quote)
} 



var citations = [
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Albert_Einstein_1947.jpg/220px-Albert_Einstein_1947.jpg",
        name: "Albert Einstein ( Physicien théoricien )",
        date: "1879-1995",
        quote: "“Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.”"
    },
    {
        image: "https://download.vikidia.org/vikidia/fr/images/thumb/d/d5/Isaac_Newton_-_portrait_en_1689.jpg/200px-Isaac_Newton_-_portrait_en_1689.jpg",
        name: "Isaac Newton ( physicien )",
        date: "1643-1727",
        quote: "“Les hommes construisent trop de murs et pas assez de ponts.”"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/260px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        name: "René Descartes ( mathématicien )",
        date: "1596 - 1650",
        quote: "“Je pense, donc je suis.”",
    },
    {
        image: "https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/3/5/0/3501dc2be9_50083049_204-fa4eeca05d.jpg",
        name: "Pythagore ( mathématicien philosophe )",
        date: "580 av. J.-C - 495 av. J.-C",
        quote: "“Que l'équité préside à toutes tes actions, qu'elle accompagne toutes tes paroles.”",
    },
    {
        image: "https://idata.over-blog.com/4/04/12/60/photos.Alizee/220px-Mariecurie.jpg",
        name: "Marie Curie ( physicienne )",
        date: "1867 - 1934",
        quote: "“Vous ne pouvez pas espérer construire un monde meilleur sans améliorer les individus.”",
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/220px-Stephen_Hawking.StarChild.jpg",
        name: "Stephen Hawking ( Physicien théoricien )",
        date: "1942 - 2018",
        quote: "“La création d'une intelligence artificielle serait le plus grand événement de l'histoire de l'humanité. Mais il pourrait aussi être l'ultime. ”",
    },
    {
        image: "https://images.findagrave.com/photos250/photos/2008/10/23903480_120007020815.jpg",
        name: "Max Planck ( physicien )",
        date: "1858 - 1947",
        quote: "“La science ne peut pas résoudre le mystère ultime de la nature, et cela, parce qu'en dernière analyse, nous faisons nous-mêmes partie du mystère que nous essayons de résoudre.”",
    },
    /*{
        image: "",
        name: "",
        date: "",
        quote: "“”",
    },
    {
        image: "",
        name: "",
        date: "",
        quote: "“”",
    },
    {
        image: "",
        name: "",
        date: "",
        quote: "“”",
    },
    {
        image: "",
        name: "",
        date: "",
        quote: "“”",
    },
    {
        image: "",
        name: "",
        date: "",
        quote: "“”",
    },
    {
        image: "",
        name: "",
        date: "",
        quote: "“”",
    }*/
]

