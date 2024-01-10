var fetchQuotes = function () {

    versiculos = [
        ["I will sing the Lord's praise, for he has been good to me.", "Psalm 13:6"],
        ["Husbands, love your wives, just as Christ loved the church and gave himself up for her", "Ephesians 5:25"],
         ["Above all else, guard your heart, for everything you do flows from it", "Proverbs 4:23"],
      ["These commandments that I give you today are to be on your hearts.", "Deuteronomy 6:6"],
      ["Blessed is the one who persevers under trial, because having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.", "James 1:12"],
      ["Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows", "James 1:17"],
      ["My dear brothers and sisters, take note of this: everyone should be quick to listen, slow to speak and slow to become angry. Because human anger does not produce the righteousness that God desires.", "James 1:19-20"],
        ["Therefore get rid of all moral filth and the evil that is so prevalent, and humbly accept the word planted in you, which can save you", "James 1:21"],
      ["As the body without spirit is dead, so faith without deeds is dead", "James 2:26"],
          ["En el principio creó Dios lo cielos y la tierra.", 
     "Genesis 1.1"],
      ["Dios te bendiga y te guarde. Dios haga resplandecer su rostro sobre ti y tenga de ti misericordia. Dios alce sobre ti Su rostro y ponga en ti paz.", "Números 6:24-26"],
      ["Honra a tu padre y a tu madre, para que tus días se alargen en la tierra que Dios tu Dios te da.", "Exodo 20:12"],
      ["Amarás al Señor tu Dios con todo el corazón, con toda el alma, con todas tus fuerzas.", "Deuteronomio 6:5"],
      ["Y estas palabras que yo te mando hoy, estarán sobre tu corazón;", 
      "Deuteronomio 6:6"],
      ["y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes.",
        "Deutoronomio 6:7"],
      ["Profeta les levantaré de en medio de sus hermanos, como tú; y pondré mis palabras en su boca, y Él les hablará todo lo que yo le mandare.",
    "Deuteronomio 18:18"],
      ["Nunca se apartará de tu boca este libro de la ley, sino que de dia y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito, porque entonces harás prosperar tu camino y todo te saldrá bien.",
    "Josue 1:8"],
      ["Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes porque tu Dios estará contigo dondequiera que vayas.", "Josue 1:9"],
      ["Respondió Rut: No me rueges que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios.",
    "Rut 1:16"],
      ["Sobre toda cosa guardada, guarda tu corazón; Porque de él mana la vida.",
    "Proverbios 4:23"],
      ["Instruye al niño en su camino y aún cuando fuere viejo no se apartará de él.",
    "Proverbios 22:6"],
      ["No temas, porque Yo estoy contigo; no desmayes, porque Yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
    "Isaías 41:10"],
      ["Más el herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él,  y por su llaga fuimos nosotros curados.",
    "Isaías 53:5"],
      ["Clamá a mi y yo te responderé, y te enseñaré cosas grandes y ocultas que tú conoces.",
    "Jeremias 33:3"],
      ["Alegrate mucho, hija de Sion; da voces de Júbilo, hija de Jerusalén; he aquí tu rey vendrá a ti, justo y salvador, humilde  y cabalgando sobre un asno, sobre un pollino hijo de asna.",
    "Zacarias 9:9"],
      ["El respondiendo, les dijo: ¿No habéis leido que el que los hizo al principio, varón y hembra los hizo, y dijo: por esto el hombre dejará padre y madre, y se unirá a su mujer, y los dos serán una sola carne?",
    "Mateo 19:4-5"],
      ["Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios ha unido que no lo separé el hombre.",
    "Mateo 19:6"],
      ["Y yo os digo que cualquiera que repudia a su mujer, salvo por causa de fornicación, y se casa con otra, adultera; y el que se casa con la repudiada, adultera.",
    "Mateo 19:9"],
      ["Y yo os digo: pedid y se os dará, buscad y hallareís, llamad y se os   abrirá.",
    "Lucas 11:9"],
      ["Porque de tal manera amó Dios al mundo, que ha dado a su hijo unigénito para que todo aquel que en Él cree no se pierda, más tenga vida eterna.",
    "Juan 3:16"],
      ["Porque no envió Dios a su Hijo al mundo para condenar al mundo, sino para que el mundo sea salvo por él.",
    "Juan 3:17"],
      ["Y conocereís la verdad y la verdad os hará libres.",
    "Juan 8:32"],
      ["Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mi.",
    "Juan 14:6"],
      ["No os engañeis, Dios no puede ser burlado,pues todo lo que el hombre   sembraré, eso también segará.",
      "Galatas 6:7"],
      ["He aquí, yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta,  entraré a él, y cenaré con él, y él conmigo.",
    "Apocalipisis 3:20"],
      ["Gozemonos, alegremonos y seamos felices porque han llegado las bodas del cordero y su esposa está lista.",
    "Apocalipisis 19:7"],
      ["Por esto dejará el hombre a su padre y a su madre y se unirá a su mujer y los dos serán una sola carne.",
    "Efesios 5:31"],
      ["Donde hay envidia y rivalidad hay desorden y toda clase de maldad",
    "Santiago 3:16"],
      ["No dejes que se incline mi corazón a cosa mala.",
      "Salmo 141:4"],
      ["Bienaventurado el hombre que tiene en Ti sus fuerzas en cuyo corazón están tus caminos",
    "Salmo 84:5"],
      ["No dejandoos de congregar como algunos tiene por costumbre, sino exhortandoos y tanto más cuando veís que aquel dia está cerca.",
    "Hebreos 10:9"],
      ["Pero tu cuando ores, entra a tu cuarto, cierra la puerta y habla con tu Padre que está en el cielo.",
    "Mateo 6:6"],
      ["Porque si ustede perdonan a los demás el mal que les hagan, su Padre que está en el cielo tambień los perdonará.",
    "Mateo 6:14"],
      ["Luego Jesús dijo, hija tu fe te ha sanado vete en paz y sin ninguna   enfermedad.",
      "Marcos 5:34"],
      ["Pedid y se os daŕa, buscad y encontrareís, llamad y se os abrirá.",
    "Lucas 11:9"],
      ["Pues la voluntad de Dios es vuestra santificación, que os aparteís de fornicación.",
    "1 Tesalonicensenses 4:3"],
      ["Hice un pacto solemne con mis hijos, no mirar con desea a una muchacha.",
    "Job 31:1"],
      ["Porque de tal manera amó Dios al mundo, que ha dado a su hijo unigénito Para que todo aquel que en Él crea, no se pierda más tenga vida eterna.",
    "Juan 3:16"],
      ["Hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida, de la estatura de la plenitud de Cristo.",
    "Efesios 4:13"],
      ["Que si confesares con tu boca que Jesús es el Señor y creyeres en tu coraźon que Dios lo levantó de los muertos, será salvo.",
    "Romanos 10:9"],
      ["Jesús les dijo, amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente, este es el primero y gran mandamiento, el segundo es semejante, amarás a tu prójimo como a Ti mismo.",
    "Mateo 12:37-39"],
      ["Porque si siendo enemigos fuimos reconciliados con Dios por la muerte de Su Hijo, mucho más seremos salvos por su vida.",
    "Romanos 8:5"],
      ["Todo lo puedo en Cristo que me fortalece.",
    "Filipenses 4:13"],
      ["En paz me acostaré, y así mismo dormiré porque sólo tu Dios me haces vivir confiado.",
    "Salmo 4:8"],
      ["Lampara es a mis pies y lumbrear a mi camino.",
    "Salmo 119:105"],
      ["Bienaventurada la nación cuyo Dios es Dios y el pueblo que Él escogió como heredad",
    "Salmo 2:12"],
      ["Esposos amad a vuestras mujeres asi como Cristo amó a la iglesia y la declara Santa purificandola con el lavamiento del agua.",
    "Efesios 5:25"]
      ]

      var i = Math.floor(Math.random() * versiculos.length);
        console.log(i);


    if (i) {
        document.querySelector('#quote').textContent = versiculos[i][0]
        document.querySelector('#name').textContent = versiculos[i][1]
    } else {
        document.querySelector('#quote').innerHTML = 'No quotes today!'
    }

    fontResize()
    setTimeout(function(){
        location.reload()
    }, 3600000)
    
}

var fontResize = function(){
    var subBody = document.querySelector('.sub-div')

    if(subBody.clientHeight > 900){
        console.log(subBody.clientHeight)
        console.log('the body is too big')
        document.querySelector('#quote').style.fontSize= '55px'
        document.querySelector('#name').style.fontSize = '45px'
    }

    if(subBody.clientHeight > 1000){
        console.log(subBody.clientHeight)
        console.log('the body is too big')
        document.querySelector('#quote').style.fontSize= '50px'
        document.querySelector('#name').style.fontSize = '40px'
    }
}

fetchQuotes()