"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest")); // supertest is a framework that allows to easily test web apis
require("jest");
const server_1 = __importDefault(require("./../server"));
const MongoMock_1 = __importDefault(require("@shared/tests/MongoMock"));
describe("testing-server-routes", () => {
    beforeAll(async () => {
        await MongoMock_1.default.connect();
    });
    afterAll(async () => {
        await MongoMock_1.default.disconnect();
    });
    beforeEach(async () => {
        await Tag.deleteMany({});
        await Contact.deleteMany({});
    });
    it("GET /movie/:id - success", async () => {
        const { body } = await supertest_1.default(server_1.default).get("/movie/5"); //uses the request function that calls on express app instance
        expect(body).toEqual({
            "movie": {
                "adult": false,
                "backdrop_path": "/u0zMKKpEdDWpOKmFW2sLbKKICJH.jpg",
                "belongs_to_collection": null,
                "budget": 4000000,
                "genres": [
                    {
                        "id": 80,
                        "name": "Crime"
                    },
                    {
                        "id": 35,
                        "name": "Comedy"
                    }
                ],
                "homepage": "",
                "id": 5,
                "imdb_id": "tt0113101",
                "original_language": "en",
                "original_title": "Four Rooms",
                "overview": "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
                "popularity": 15.095,
                "poster_path": "/xhU6hPDnk4s8iWWKoq4oEmNI600.jpg",
                "production_companies": [
                    {
                        "id": 14,
                        "logo_path": "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
                        "name": "Miramax",
                        "origin_country": "US"
                    },
                    {
                        "id": 59,
                        "logo_path": "/yH7OMeSxhfP0AVM6iT0rsF3F4ZC.png",
                        "name": "A Band Apart",
                        "origin_country": "US"
                    }
                ],
                "production_countries": [
                    {
                        "iso_3166_1": "US",
                        "name": "United States of America"
                    }
                ],
                "release_date": "1995-12-09",
                "revenue": 4257354,
                "runtime": 98,
                "spoken_languages": [
                    {
                        "english_name": "English",
                        "iso_639_1": "en",
                        "name": "English"
                    }
                ],
                "status": "Released",
                "tagline": "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
                "title": "Four Rooms",
                "video": false,
                "vote_average": 5.8,
                "vote_count": 1805
            },
            "translation": {
                "id": 5,
                "translations": [
                    {
                        "iso_3166_1": "BG",
                        "iso_639_1": "bg",
                        "name": "български език",
                        "english_name": "Bulgarian",
                        "data": {
                            "homepage": "",
                            "overview": "Четири истории протичащи, протичащи в един хотел в новогодишната нощ. Връзката между тях е смахнат пиколо, който става свидетел на какви ли не извращения в извънредния си работен ден.",
                            "runtime": 100,
                            "tagline": "",
                            "title": "Четири стаи"
                        }
                    },
                    {
                        "iso_3166_1": "CZ",
                        "iso_639_1": "cs",
                        "name": "Český",
                        "english_name": "Czech",
                        "data": {
                            "homepage": "",
                            "overview": "Tento povídkový snímek je dílem čtyř režisérů, kteří se v poslední době stali nejslavnějšími představiteli americké nezávislé kinematografie. Tvůrci natočili čtyři epizodické příběhy, odehrávající se o silvestrovské noci v pokojích jednoho losangeleského hotelu. Do každého příběhu (i pokoje) je zatažen novopečený hotelový sluha Ted. S osudovou nekompromisností se mladík stane důležitým aktérem různých podivných až bizarních událostí. Každý z režisérů napsal scénář své epizody a samozřejmě při realizaci uplatnil svou poetiku. Výsledkem je značně eklektická podívaná, v níž se různé styly a žánry střídají bez většího doplňujícího účinku.",
                            "runtime": 98,
                            "tagline": "Rezervace všech průšvihů zaručena aneb panenská noc hotelového poskoka.",
                            "title": "Čtyři pokoje"
                        }
                    },
                    {
                        "iso_3166_1": "DK",
                        "iso_639_1": "da",
                        "name": "Dansk",
                        "english_name": "Danish",
                        "data": {
                            "homepage": "",
                            "overview": "Det er nytårsaften og første dag på jobbet for en ensom piccolo, derskal forsøge at holde styr på de tolv gæster i det forfaldne Mon Signor Hotel i Los Angeles. Ikke nogen uoverkommelig opgave, vil du nok mene, men du har til gengæld heller ikke mødt de hér gæster endnu. Hvis Ted -for det hedder piccoloen- overlever denne nat, vil han takke sin skaber og få sig et nyt job.",
                            "runtime": 0,
                            "tagline": "",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "DE",
                        "iso_639_1": "de",
                        "name": "Deutsch",
                        "english_name": "German",
                        "data": {
                            "homepage": "",
                            "overview": "In der Silvesternacht tritt Ted seinen Posten als Page in einem einstmals ehrwürdigen, mittlerweile aber heruntergekommenen Hotel an. Schon am Neujahrstag widerfahren ihm wundersame Dinge: So kriegt er es mit Hexen, die ihre Göttin zu neuem Leben erwecken wollen, einem eifersüchtigen Ehemann, zwei verzogenen Kindern, die eine grausame Entdeckung machen und einem arroganten Hollywood-Star zu tun.",
                            "runtime": 98,
                            "tagline": "",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "GR",
                        "iso_639_1": "el",
                        "name": "ελληνικά",
                        "english_name": "Greek",
                        "data": {
                            "homepage": "",
                            "overview": "Δώδεκα σκανδαλώδες ένοικοι. Τέσσερα σκανδαλώδη αιτήματα. Κι ένας μοναχικός γκρουμ, στην πρώτη μέρα στη δουλειά, που θα περάσει την πιο άγρια πρωτοχρονιά της ζωής του.Ο δύσμοιρος γκρουμ του ξενοδοχείου Τεντ την παραμονή της Πρωτοχρονιάς θα ζήσει την πιο άγρια νύχτα της ζωής του! Προσπαθώντας να εξυπηρετήσει τους πελάτες του ξενοδοχείου συναντά τους πιο παράξενους και εκκεντρικούς ανθρώπους που έχει γνωρίσει ποτέ! Σε ένα από τα δωμάτια τέσσερις μάγισσες προσπαθούν να καλέσουν το πνεύμα της θεάς Ντιάνα. Σε ένα άλλο δωμάτιο ένας εξαγριωμένος σύζυγος σημαδεύει με πιστόλι την γυναίκα του. Στο τρίτο δωμάτιο ένας άγριος γκάνγκσκτερ αναγκάζει τον Τεντ να προσέχει τα παιδιά του, ενώ στο τέταρτο έναs εκκεντρικός σκηνοθέτης κάνει πάρτι και βάζει ένα αλλόκοτο στοίχημα…",
                            "runtime": 0,
                            "tagline": "",
                            "title": "Τέσσερα Δωμάτια"
                        }
                    },
                    {
                        "iso_3166_1": "US",
                        "iso_639_1": "en",
                        "name": "English",
                        "english_name": "English",
                        "data": {
                            "homepage": "",
                            "overview": "It's Ted the Bellhop's first night on the job...and the hotel's very unusual guests are about to place him in some outrageous predicaments. It seems that this evening's room service is serving up one unbelievable happening after another.",
                            "runtime": 98,
                            "tagline": "Twelve outrageous guests. Four scandalous requests. And one lone bellhop, in his first day on the job, who's in for the wildest New year's Eve of his life.",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "ES",
                        "iso_639_1": "es",
                        "name": "Español",
                        "english_name": "Spanish",
                        "data": {
                            "homepage": "",
                            "overview": "Durante una Nochevieja, en un hotel de Los Ángeles, un botones (Tim Roth) es continuamente solicitado por los ocupantes de cuatro habitaciones. En una de ellas se han reunido unas brujas, en otra un hombre apunta con un revólver a su mujer, que está atada a la cama, en la tercera un gángster y su mujer le piden que cuide a sus hijos y en la cuarta dos hombres realizan una arriesgada apuesta.",
                            "runtime": 97,
                            "tagline": "",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "MX",
                        "iso_639_1": "es",
                        "name": "Español",
                        "english_name": "Spanish",
                        "data": {
                            "homepage": "",
                            "overview": "Durante una Nochevieja, en un hotel de Los Ángeles, un botones (Tim Roth) es continuamente solicitado por los ocupantes de cuatro habitaciones. En una de ellas se han reunido unas brujas, en otra un hombre apunta con un revólver a su mujer, que está atada a la cama, en la tercera un gángster y su mujer le piden que cuide a sus hijos y en la cuarta dos hombres realizan una arriesgada apuesta.",
                            "runtime": 95,
                            "tagline": "",
                            "title": "Cuatro habitaciones"
                        }
                    },
                    {
                        "iso_3166_1": "FI",
                        "iso_639_1": "fi",
                        "name": "suomi",
                        "english_name": "Finnish",
                        "data": {
                            "homepage": "",
                            "overview": "Kaksitoista erikoista vierasta. Neljä kummallista pyyntöä. Ja yksi hotellipoika työssä ensimmäistä päivää, josta tulee hänen elämänsä rajuin uudenvuodenaatto. Mitä kaikkea poloiselle piccololle voikaan tapahtua uudenvuodenyönä? Quentin Tarantinon tuottama episodielokuva vie meidät Tedin mukana neljään, toinen toistaan yllättävämpään hotellihuoneeseen. Hotellin palvelutasoa koettelevat joukko noitia, perverssejä seksileikkejä harrastava pari, meksikolaisgangsterin, kauhukakarat ja erään ohjaajan pikku pirskeet, joissa lyödään outo veto.",
                            "runtime": 0,
                            "tagline": "",
                            "title": "Neljä Huonetta"
                        }
                    },
                    {
                        "iso_3166_1": "FR",
                        "iso_639_1": "fr",
                        "name": "Français",
                        "english_name": "French",
                        "data": {
                            "homepage": "",
                            "overview": "Le groom d'un hôtel de luxe présente quatre histoires, se passant dans quatre chambres différentes. The missing ingredient : des sorcières tentent d'invoquer l'esprit de la déesse Diana. The wrong man : un homme armé séquestre sa femme. The misbehavers : un gangster, sa femme et ses deux enfants logent dans une chambre. The man from Hollywood : un acteur arrogant a organisé une fête.",
                            "runtime": 98,
                            "tagline": "",
                            "title": "Groom service"
                        }
                    },
                    {
                        "iso_3166_1": "IL",
                        "iso_639_1": "he",
                        "name": "עִבְרִית",
                        "english_name": "Hebrew",
                        "data": {
                            "homepage": "",
                            "overview": "מסופר על בלבוי (טים רות') המשרת 4 חדרים שבכל אחד מהם יש דבר מוזר אחר. הסרט בנוי כארבעה מיני-סרטים שאותו בלבוי הוא המכנה המשותף ביניהם, כשכל חדר מבויים ע\"י במאי אחר. קוונטין טרנטינו ביים אחד מהם.",
                            "runtime": 0,
                            "tagline": "",
                            "title": "ארבעה חדרים"
                        }
                    },
                    {
                        "iso_3166_1": "HU",
                        "iso_639_1": "hu",
                        "name": "Magyar",
                        "english_name": "Hungarian",
                        "data": {
                            "homepage": "",
                            "overview": "Ted, az első éjszakai szolgálatát teljesítő boy szilveszter éjjelén a Los Angeles-i Mon Signor szállodában hajmeresztő kalandok elé néz. A nászutasok részére fenntartott szobában szemrevaló boszorkányok gyülekeznek. Amikor Ted belép a szobába ötven dollárt ígérnek neki, ha az egyik boszorkányt boldoggá teszi. Ezután jegesvödörrel a kezében Ted belép a 404-es szobába. Itt egy feldúlt férfi fogadja fegyvert szegezve rá. Azzal vádolja, hogy viszonya van a feleségével, és ezért most lakolnia kell. Hosszas tortúra után sikerül kimenekülnie a szobából. Következő útja a 309-es szobába vezet. Egy maffiózó lakik itt feleségével és két gyermekével. A házaspár szórakozni megy, a két gyereket Tedre bízzák. Ám ő magukra hagyja őket, és ettől kezdve elszabadul a pokol. Az elegáns tetőtéri lakosztályt Chester Rush, Hollywood híres komikus sztárja és barátai bérlik. Egy őrült fogadást kötnek, amelyhez szerencsétlen Tednek kell asszisztálnia.",
                            "runtime": 102,
                            "tagline": "",
                            "title": "Négy szoba"
                        }
                    },
                    {
                        "iso_3166_1": "IT",
                        "iso_639_1": "it",
                        "name": "Italiano",
                        "english_name": "Italian",
                        "data": {
                            "homepage": "",
                            "overview": "Quattro camere, quattro episodi comico-grotteschi tenuti insieme da un luogo (il Mon Signor, vecchio albergo di Los Angeles), un tempo (la notte di San Silvestro) e un fattorino (T. Roth). 1) “Strano intruglio” di A. Anders: una squadra di streghe cerca sperma fresco per evocare la loro dea; 2) “L'uomo sbagliato” di A. Rockwell: una coppia sadomaso coinvolge il fattorino d'albergo nei suoi esercizi; 3) “I cattivi” di R. Rodriguez: due bambini burrascosi si ribellano al baby-sitter, scoprono un cadavere, incendiano la stanza; 4) “L'uomo di Hollywood” di Q. Tarantino: un attore scommette che riuscirà ad accendere uno Zippo dieci volte di seguito, vincerà una Chevrolet del '64 e salverà il proprio mignolo. Bischerrima scemenza e colluvie di sciocchezze comicarole, non priva di volgarità né di turpiloquio. Si va dal pessimo al mediocre. Il meglio del film è nel cartoon d'avvio, veicolo dei titoli di testa. Colonna sonora dei Combustible Edison.",
                            "runtime": 98,
                            "tagline": "Dodici ospiti oltraggiosi. Quattro richieste scandalose. E un fattorino solitario, nel suo primo giorno di lavoro, che è pronto per il capodanno più selvaggio della sua vita.",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "JP",
                        "iso_639_1": "ja",
                        "name": "日本語",
                        "english_name": "Japanese",
                        "data": {
                            "homepage": "",
                            "overview": "『ルーム３２１／お客様は魔女』新米ベルボーイのテッドが呼ばれた部屋では、妖しい魔女たちの儀式が行われていた。『ルーム４０４／間違えられた男』氷を届けに来たテッドは、中年男からいきなり拳銃を向けられる。『ルーム３０９／かわいい無法者』テッドはラテン系のヤクザ夫婦から悪ガキ姉弟の世話を頼まれて…。『ペントハウス／ハリウッドから来た男』高級車と小指をかけたトンデモない賭けに巻き込まれたテッドの運命は！？",
                            "runtime": 0,
                            "tagline": "",
                            "title": "フォー・ルームス"
                        }
                    },
                    {
                        "iso_3166_1": "GE",
                        "iso_639_1": "ka",
                        "name": "ქართული",
                        "english_name": "Georgian",
                        "data": {
                            "homepage": "",
                            "overview": "",
                            "runtime": 0,
                            "tagline": "",
                            "title": "ოთხი ოთახი"
                        }
                    },
                    {
                        "iso_3166_1": "KR",
                        "iso_639_1": "ko",
                        "name": "한국어/조선말",
                        "english_name": "Korean",
                        "data": {
                            "homepage": "",
                            "overview": "새해 전날 밤, LA 몽시뇰 호텔에서 첫근무를 하게 된 괴짜 벨보이 테드는 상상조차 할 수 없는 최악의 밤을 맞이한다. 허니문 스위트룸에 투숙한 마녀들의 부활의식에 야릇한 제물로 걸려드는가 하면, 얼음 배달차 들른 룸 404호의 악당 지그프리드는 아내의 정부라고 오해를 한다. 5백 달러를 받고 돌봐주기로 한 룸 309호 갱스터 부부의 꼬마 악동들은 시끌벅적한 소란을 벌이며 방 한 칸을 홀라당 날려버린다. 마지막 펜트하우스 특실 룸에는 할리우드 최고의 코미디언 체스터 러쉬와 그의 친구들이 벌이는 잔인한 내기에 엉겁결에 끼어들게 된 테드는 피할 수 없는 희생양이 될 판이 된다.",
                            "runtime": 0,
                            "tagline": "네 가지 이야기들로 이루어진 옴니버스 영화",
                            "title": "포룸"
                        }
                    },
                    {
                        "iso_3166_1": "LT",
                        "iso_639_1": "lt",
                        "name": "Lietuvių",
                        "english_name": "Lithuanian",
                        "data": {
                            "homepage": "",
                            "overview": "Naujųjų metų išvakarės viešbutyje, menančiame praeities populiarumą, tačiau išgyvenančiame ne pačius geriausius laikus. Todėl tą naktį tebuvo užimti tik keturi kambariai, kuriuose apsigyveno itin keistos kompanijos: - moterys, siekiančios atgaivinti meilės dievaitę, pakvaišusi pora su išskirtiniais polinkiais, gangsterių šeima, nesusitvarkanti su savo vaikais ir kino žvaigždės, besilažinantys iš savo pirštų. Viešbučio budėtojui Tedui tai pirmoji darbo diena. O paskirtas jis čia buvo, idant švenčių metu pastovų personalą galima būtų paleisti atostogų. Tedas nėra viešbučio budėtojas iš prigimties ir gabumais šioje srityje jis taip pat nepasižymi. Jis supainioja iškvietimus, kambarius, paslaugas ir dėl to įsivelia į kvailas ir klaikias istorijas.",
                            "runtime": 0,
                            "tagline": "",
                            "title": "Keturi kambariai"
                        }
                    },
                    {
                        "iso_3166_1": "NL",
                        "iso_639_1": "nl",
                        "name": "Nederlands",
                        "english_name": "Dutch",
                        "data": {
                            "homepage": "",
                            "overview": "Op oudjaarsavond in hotel Mon Signor in Los Angeles staat bediende Ted (Tim Roth) er helemaal alleen voor. Plotseling raakt hij dan verwikkeld in vier vreemde situaties. Als eerste komt hij in een kamer waar een groep heksen een ritueel willen uitvoeren, maar ze missen sperma. Vervolgens komt Ted in een kamer terecht waarin een gewapende man zijn vrouw op het bed heeft vastgebonden.",
                            "runtime": 90,
                            "tagline": "",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "PL",
                        "iso_639_1": "pl",
                        "name": "Polski",
                        "english_name": "Polish",
                        "data": {
                            "homepage": "http://www.miramax.com/movie/four-rooms/",
                            "overview": "Boy hotelowy Ted jest świadkiem czterech niezwykłych historii w pewną noc sylwestrową. W apartamencie dla nowożeńców trwa sabat czarownic, a w pokoju 404 dochodzi do gwałtownej kłótni małżeńskiej... o kochanka żony. Tymczasem w pokoju 309 pozostawione bez opieki dzieciaki stają na głowie, zaś w apartamencie na ostatnim piętrze hollywoodzki producent sprawdza skuteczność tricków mistrza Hitchcocka",
                            "runtime": 98,
                            "tagline": "",
                            "title": "Cztery pokoje"
                        }
                    },
                    {
                        "iso_3166_1": "BR",
                        "iso_639_1": "pt",
                        "name": "Português",
                        "english_name": "Portuguese",
                        "data": {
                            "homepage": "",
                            "overview": "Em uma véspera de Ano-Novo muito louca, o carregador de malas de um hotel precisa lidar com bruxas em um quarto, crianças diabólicas em outro, acaba no meio de uma relação problemática e de uma aposta sangrenta entre a comitiva de um superstar.",
                            "runtime": 102,
                            "tagline": "",
                            "title": "Grande Hotel"
                        }
                    },
                    {
                        "iso_3166_1": "PT",
                        "iso_639_1": "pt",
                        "name": "Português",
                        "english_name": "Portuguese",
                        "data": {
                            "homepage": "",
                            "overview": "Convidamos você para passar o ano novo no luxuoso, porém decadente Hotem Mon Signor onde alguns hóspedes muito estranhos irão se registrar e um mensageiro chamado Ted, em seu primeiro dia da trabalho terá uma noite inesquecível. Grande Hotel é uma comédia com elenco extraordinário dirigida por quatro dos maiores diretores da nova geração de Hollywood. O filme conta histórias inusitadas, aterrorizantes, ousadas e hilárias que acontecem em diferentes quartos de um hotel em Los Angeles, na noite de Ano Novo.",
                            "runtime": 98,
                            "tagline": "",
                            "title": "Grande Hotel"
                        }
                    },
                    {
                        "iso_3166_1": "RO",
                        "iso_639_1": "ro",
                        "name": "Română",
                        "english_name": "Romanian",
                        "data": {
                            "homepage": "",
                            "overview": "",
                            "runtime": 0,
                            "tagline": "",
                            "title": "Patru camere"
                        }
                    },
                    {
                        "iso_3166_1": "RU",
                        "iso_639_1": "ru",
                        "name": "Pусский",
                        "english_name": "Russian",
                        "data": {
                            "homepage": "",
                            "overview": "Озорная комедия состоит из четырех новелл (каждый из режиссеров сделал по одной), связанных одним героем — коридорным Тедом, вышедшим на работу накануне Нового года. Он попадает на шабаш ведьм, чуть не погибает от руки ревнивого мужа, еле уносит ноги от шаловливых детишек гангстера, принимает участие в странном пари эксцентричных господ. Но, несмотря на все сомнительные приключения, коридорный сохраняет невозмутимость в любых, самых невероятных ситуациях.",
                            "runtime": 98,
                            "tagline": "",
                            "title": "Четыре комнаты"
                        }
                    },
                    {
                        "iso_3166_1": "SK",
                        "iso_639_1": "sk",
                        "name": "Slovenčina",
                        "english_name": "Slovak",
                        "data": {
                            "homepage": "",
                            "overview": "Hoteloví hostia dokážu byť pekne otravní. Obzvlášť, keď sa na vec pozeráte očami miestneho poskoka Teda!\r Hotelový poslíček Ted dostal novú prácu - stal sa poskokom snobských hostí v luxusnom hoteli Mon Signor. Blíži sa Silvester a do Los Angeles sa schádza zberba tých najzlomyselnejších a nejrozmaznanejších boháčov, aby si vo veľkom štýle užili koniec roka.",
                            "runtime": 0,
                            "tagline": "Tim Roth v poviedkovej koláži Quentina Tarantina & Co. - rezervácia všetkých prúserov zaručená alebo panenská noc hotelového poskoka.",
                            "title": "Štyri izby"
                        }
                    },
                    {
                        "iso_3166_1": "SE",
                        "iso_639_1": "sv",
                        "name": "svenska",
                        "english_name": "Swedish",
                        "data": {
                            "homepage": "",
                            "overview": "Fyra historier tar plats i fyra olika rum på Mon Signor Hotel i Los Angeles på nyårsafton. Piccolon Ted kommer att besöka alla fyra rum och får uppleva en märklig natt han aldrig kommer att glömma.",
                            "runtime": 0,
                            "tagline": "",
                            "title": ""
                        }
                    },
                    {
                        "iso_3166_1": "TR",
                        "iso_639_1": "tr",
                        "name": "Türkçe",
                        "english_name": "Turkish",
                        "data": {
                            "homepage": "",
                            "overview": "Tarantino'nun örgütlediği bu ilginç fars-komedi dört 'bağımsız' yönetmenin ortak çalışması. Ted lüks fakat gözden düşmüş bir otelde servis elemanı olarak çalışmaya başlar ve ilk çalışma gecesinde dört, biri birinden ilginç odayla uğraşmak zorunda kalır. Odaların ilkinde bir cadılar kumpanyası Tanrıça Diana'nın ruhunu çağırma uğraşındadır. İkincisinde sert bir gangster Ted'i çocuklarına dadılık yapmaya zorlamaktadır. Üçüncü odada ise çıldırmış boynuzlanan bir koca ikâmet etmektedir. Son odaya girdiğinde Ted kendisini snop bir film yıldızının verdiği partinin ortasında bulur. Tüm bu 'karakterlerin' Ted'den farklı beklentileri vardır. Tarantino ve arkadaşlarının çok daha sakin, iddiasız bir tarzı denediği fakat absürd komedinin hakkını veren bir çalışma.",
                            "runtime": 98,
                            "tagline": "On iki garip misafir. Dört acayip istek. İşinin ilk günündeki otel görevlisi hayatının en garip günlerinden birisini yaşayacak.",
                            "title": "Dört Oda"
                        }
                    },
                    {
                        "iso_3166_1": "UA",
                        "iso_639_1": "uk",
                        "name": "Український",
                        "english_name": "Ukrainian",
                        "data": {
                            "homepage": "",
                            "overview": "Пустотлива комедія складається з чотирьох новел, зв'язаних одним героєм — портьє Тедом, що вийшов на роботу напередодні Нового року.\r Він потрапляє на шабаш відьом, ледве не гине від руки ревнивого чоловіка, ледве виносить ноги від пустотливих діточок гангстера, бере участь в дивному парі ексцентричних панів.\r Але, не дивлячись на всі сумнівні пригоди, коридорний зберігає незворушність в будь-яких, найнеймовірніших ситуаціях і звісно ж отримує купу чайових.",
                            "runtime": 0,
                            "tagline": "",
                            "title": "Чотири кімнати"
                        }
                    },
                    {
                        "iso_3166_1": "CN",
                        "iso_639_1": "zh",
                        "name": "普通话",
                        "english_name": "Mandarin",
                        "data": {
                            "homepage": "",
                            "overview": "在一家古旧的旅馆内，员工们都去欢度新年假期，只有一个小侍应生（Tim Roth 蒂姆•罗素 饰）留守。当夜，光怪陆离的事件轮番上演：1，\t一群女巫准备在当晚复活他们的女神，而她们却弄丢了至关重要的精液，小侍应生临时客串，勇敢献身…… 2，\t善妒的丈夫怀疑妻子与他人有染，遂将妻子绑在椅子上，倒霉的侍应生则被当作奸夫，手枪抵头，命悬一线…… 3，\t富翁夫妻参加新年宴会，将子女留在房间中。两个淘气的小家伙展开了一场大战，却看到了恐怖的一幕…… 4，\t几名好莱坞演员凑在房间中玩打火机游戏，每人打十下，十下连续打着就会赢得一部跑车，反之有一下不着便要切掉一根手指。侍应生被临时找来充当刽子手……",
                            "runtime": 0,
                            "tagline": "",
                            "title": "四个房间"
                        }
                    }
                ]
            }
        });
    });
});
