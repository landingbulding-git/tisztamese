import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
  hidden?: boolean;
}

const faqData: FAQSection[] = [
  {
    title: "Általános információk a módszerről",
    items: [
      {
        question: "Milyen meseterápiás módszert alkalmaznak a foglalkozáson?",
        answer: <>A <b>Kincskereső Meseterápiás Módszer</b> a tudattalannal dolgozik. Mivel a tudattalanunk legjobb kifejezési eszközei a <b>képek és a szimbólumok</b>, a népmesék képi világa kiválóan alkalmas arra, hogy ezeket a szimbolikus tartalmakat közvetítse, és általuk jól megélhető módon férjünk hozzá ezekhez a tartalmakhoz.</>
      },
      {
        question: "Miért kizárólag népmesékkel dolgoznak a terápia során?",
        answer: <>Ebben a módszerben azért használunk kizárólag <b>népmeséket</b> – azoknak is a lehető legeredetibb variációit –, mert a népmese nem egy egyszerű szórakoztató történet. A népmesékben az <b>emberi és a kollektív tudás</b> sűrűsödik össze; szimbólumaik <b>életutakat</b> mutatnak be, és egyfajta intuitív belső tudást hordoznak, amely megoldást és kiutat kínál az élethelyzeteinkre, ha a szimbólumokat megfelelően alkalmazzuk.</>
      },
      {
        question: "Hasznos lehet-e az esemény annak, akit korábban egyáltalán nem érdekeltek a mesék?",
        answer: "Igen, a mese olyan, mint a napfény: mindenkire hat, aki kimegy a szabadba. Nem feltétel a korábbi meseimádat; a módszer működik, ha nem gátoljuk a folyamatot, és felismerjük, hogy a mesék nem merülnek ki a királylányok és királyfiak egyszerű történetében, hanem fejlődési utat mutatnak."
      }
    ]
  },
  {
    title: "Az online esemény menete és a rajzolás",
    items: [
      {
        question: "Pontosan mi fog történni az online eseményen?",
        answer: <>Az esemény elején elhangzik néhány bevezető mondat arról, hogyan értelmezzük az <b>anyasebet</b>, és milyen szimbolikus erővel bírnak a mesék. Ezután következik a mese – egy gazdag szimbolikájú magyar népmese, a <b>Szép Cerceruska</b> –, amit mindenki végighallgat. Ezt egy általam vezetett <b>testi relaxáció</b> követi csukott szemmel. A relaxáció közben újra elhangzanak a mese legfontosabb csomópontjai és szimbólumai, majd a résztvevők <b>spontán lerajzolják</b> a bennük kialakult képet. Az elkészült rajzot lefotózzák, feltöltik egy megadott linkre, és a jelentkezők közül néhánnyal – az időkereten belül – <b>online megbeszéljük</b> a látottakat.</>
      },
      {
        question: "Hogyan döntsem el, mit rajzoljak a relaxáció után? Mi van, ha nem láttam semmit?",
        answer: <>A legjobb, ha egyáltalán nem foglalkozunk ezzel tudatosan, és <b>elfelejtjük a tervezgetést</b>. Engedni kell, hogy a mese <b>átmossa a lelket</b>, mint ahogy a tenger hulláma partra dob egy kavicsot. Ha valaki <b>nem lát semmit a relaxáció alatt</b>, az teljesen természetes – talán éppen kevésbé vizuális módon működünk. A döntő pillanat az, amikor visszatérve egyszerűen csak a <b>krétákhoz nyúlunk, és elkezdünk vonalakat húzni</b>; a kép magától összeáll majd. Másnál előfordulhat az is, hogy végig egy konkrét, fix képet lát (akár egy sárga vízilovat), ami látszólag nem kapcsolódik a meséhez, de mégis helye van ott.</>
      },
      {
        question: "Kötelező-e beszélnem vagy megmutatnom a rajzomat?",
        answer: <>Nem, a <b>megosztás és a beszélgetés teljesen önkéntes</b>. Egyetlen szót sem kötelező mondani, és a rajzot sem kötelező megmutatni. A mese a szimbólumok révén már a tudattalannal találkozva <b>kifejtette a hatását</b>; a megbeszélés hiánya csupán annyit jelent, hogy a tudatos feldolgozást magunkban, és nem másokkal megosztva végezzük el. Tapasztalat szerint a résztvevőket érdekli a saját rajzuk háttere, és szeretnék beazonosítani a mögötte rejlő emlékeket vagy élményeket.</>
      },
      {
        question: "Kötelező-e egyáltalán rajzolni a foglalkozáson?",
        answer: <>Nem kötelező, de a rajz kihagyásával a saját lehetőségeit szűkíti a résztvevő. A szimbólum ugyan így is dolgozik a belsőben, de a rajzolás segít <b>a felszínre hozni és külsőleg láthatóvá tenni</b> a tudattalan tartalmakat (például egy félelmetes belső alakot). Amint valami kikerül a papírra, könnyebb vele szembenézni és fejben összerakni az összefüggéseket, mint amikor a tudattalanban rejtve maradva okoz szorongást.</>
      },
      {
        question: "Részt vehetek-e az eseményen, ha nem tudok rajzolni?",
        answer: <>Igen, a <b>rajztudás egyáltalán nem számít</b>. A belső képeket egyébként sem lehet pontosan ugyanúgy papírra vetni, ahogy belül láttuk. Nem művészi alkotásra van szükség: teljesen megfelel a <b>pálcikaember vagy a maszatolás</b> is. A lényeg csupán annyi, hogy a kréta nyomot hagyjon a papíron, amibe már bele lehet kapaszkodni a folyamat során.</>
      }
    ]
  },
  {
    title: "A téma és a célközönség",
    items: [
      {
        question: "Mi a foglalkozás pontos témája, és mit jelent az \"anyaseb\"?",
        answer: <>A téma az <b>anya–lánya kapcsolatban</b> kialakult, néha egészen mély <b>sérülésekről és sebekről</b> szól. Olyan nőknek szól – a <b>felnőttkorba lépéstől kezdve</b> –, akik úgy érzik, hogy az anyjukkal való nehézségeiken lélekben még nem jutottak teljesen túl. Ez nem csupán egy egyéni probléma; fontos ránézni akkor is, ha valaki erősnek érzi magát, vagy nem szívesen gondol a múltbeli fájdalmakra. A foglalkozás <b>nem a hibáztatható anyákról szól</b>, hanem <b>rólunk</b>, akik szeretnénk <b>teljesebbé tenni az életünket</b>, és fontosnak tartjuk ezt az elsődleges, meghatározó kapcsolatot.</>
      },
      {
        question: "Kizárólag friss anyáknak vagy a közeljövőben gyereket tervezőknek szól az esemény?",
        answer: <><b>Bármilyen korú felnőtt nőnek szól</b> – nekik duplán hasznos lehet, de a fókusz a <b>saját személyes jólléten</b> van. Az <b>anya–lánya viszony</b> az egyik legnehezebb kapcsolat: genetikailag és érzelmileg is ehhez állunk a legközelebb, így a <b>saját identitás meghatározása és a leválás</b> még a legtökéletesebb anya mellett is embert próbáló feladat mindenki számára.</>
      },
      {
        question: "Van-e életkori határa a részvételnek?",
        answer: <><b>Nincs felső korhatár</b>; a betöltött <b>20. év felett</b> bárki jöhet, aki érdeklődik. <b>Akár 70–80 évesen is aktuális és hasznos</b> ez a munka. Amíg lélegzünk, addig jó esetben előrefelé haladunk és fejlődünk, így az <b>önmagunkkal való foglalkozást</b> és a belső kapcsolatot idős korban sem érdemes letenni.</>
      }
    ]
  },
  {
    title: "Technikai és gyakorlati tudnivalók",
    items: [
      {
        question: "Milyen eszközökre és környezetre van szükségem az online részvételhez?",
        answer: <><b>Papír:</b> a legjobb az <b>A3-as méret</b>, mert a nagyobb íven nagyobb mozdulatokkal és mélyebb beleéléssel lehet rajzolni, de ha nincs más, az <b>A4-es</b> is megteszi.<br/><br/><b>Rajzeszköz:</b> <b>kréta szükséges</b> – abból is olyan, ami erősebb nyomot hagy (például <b>olajpasztell</b>). A színes ceruza túl gyenge nyomot hagy, a golyóstoll pedig túl erős, merev vonalat zár le. Egy <b>12 vagy 24 darabos készlet</b> ideális; a túl sok színben (pl. 60 darab) könnyű elveszni.<br/><br/><b>Technikai eszköz:</b> egy <b>telefon</b>, amivel a kész rajzot le lehet fotózni és fel lehet tölteni.<br/><br/><b>Környezet:</b> egy <b>teljesen nyugodt, háborítatlan helyiség</b>, ahol a résztvevő <b>egyedül van</b> – a relaxációt és a belső folyamatokat zavarja mások jelenléte.</>
      },
      {
        question: "Kötelező bekapcsolni a kamerát az online esemény alatt?",
        answer: <><b>Nem kötelező</b>, de örülök neki, mert jó látni az arcokat és kapcsolódni az emberekhez. Az egyetlen szigorú kötelezettség az online térben a <b>titoktartás</b> (hogy az elhangzott személyes történeteket senki ne beszélje ki utána). Minden más a saját komfortérzettől függ: ha valakinek kellemetlen a kamera, vagy épp technikailag nem működik, abból semmi gond nem származik, nem lesz számonkérés.</>
      },
      {
        question: "Mennyi ideig tart a foglalkozás?",
        answer: <><b>Körülbelül két és három óra között</b> lesz a vége. Az alsó határ biztosabb, de a felső határ rugalmas. Ha a folyamat végén valakinél egy olyan aktuális, megnyílt téma jön elő a rajz kapcsán, ami érett a feldolgozásra, a beszélgetést <b>nem fogom mereven lezárni</b> az időkeret miatt; elvisszük addig a pontig, amíg a résztvevő megnyugvást talál.</>
      }
    ]
  },
  {
    title: "Biztonság, félelmek és hatások",
    items: [
      {
        question: "Természetes-e, ha valaki tart a foglalkozástól vagy fél a kezdés előtt?",
        answer: <>Teljesen rendben van és <b>természetes</b> – alig találkozom olyan emberrel, aki ne félne egy kicsit a kezdés előtt. A félelem jön és megy, de ha átadjuk neki az irányítást, <b>fontos dolgokról maradhatunk le</b>. A tartózkodás oka általában az, hogy tudjuk: <b>a tudattalanban lévő dolgokkal való szembenézéséhez erő kell</b>. Ha egy belső tartalmat kimondunk és megnevezünk, az <b>elköteleződéssel jár</b> – nem tehetünk úgy, mintha mi sem történt volna. Az ismeretlentől való félelem létező jelenség, de szerintem <b>jobb tudni, mi lakik bennünk</b>, mint hagyni, hogy a letagadott belső tartalmak váratlan és kellemetlen pillanatokban okozzanak galibát a mindennapi kapcsolatainkban. A folyamat során <b>semmi végzetes vagy önidegen dologra</b> nem fogunk rájönni, csak arra, amik mi magunk vagyunk. Ha a módszert jól vezetik, <b>nem lehet vele kárt okozni</b>, bár szomorúságot vagy megrázó felismeréseket hozhat.</>
      },
      {
        question: "Miben más az online forma, mint a személyes találkozó? Ugyanolyan hatásos?",
        answer: <>A <b>technika és a folyamat menete teljesen megegyezik</b>. Személyesen – ahol kis, <b>6–8 fős csoportokban</b> dolgozunk – könnyebb dolgom van segítőként, mert azonnal látom a résztvevők érzelmi reakcióit a mese felolvasása közben, és a jelenlévők energiája, a fizikai közelség miatt a relaxáció is könnyebb. Az online forma létjogosultságáról a covid alatti főiskolai oktatási és terápiás tapasztalatok győztek meg: <b>a módszer így is gyönyörűen és teljesen rendben működik</b>. Ha a személyes találkozás a távolság miatt nem megoldható, az <b>online forma kiváló alternatíva</b>.</>
      },
      {
        question: "Mire lehet számítani az eseményt követő napokban, hetekben?",
        answer: <>Érdemes tudni, hogy <b>a mese a foglalkozás után is dolgozik</b> a belsőben. <b>Hetekig előfordulhatnak</b> intenzívebb belső megélések, sűrűbb vagy szokatlan <b>álmok</b>, amelyek összefüggésbe hozhatók a mese élményével. Sokan számolnak be váratlan, különös találkozásokról vagy olyan külső eseményekről az életükben, amelyek összeköthetők a folyamattal; <b>a tudattalannak hatalmas, nehezen elképzelhető mozgósító ereje van</b>.</>
      },
      {
        question: "Kiknek nem javasolt a részvétel?",
        answer: <><b>Nem javasolt a részvétel azoknak</b>, akik <b>nagyon friss gyászban</b> vagy <b>nagyon friss traumában, krízisben</b> vannak (különösen, ha az épp az anyához kötődik – például egy aktuális családi szakítás vagy az anya közelmúltbeli halála esetén). Ilyenkor a tudattalan még az események rendezésével van elfoglalva, és egy nagyobb létszámú online eseményen feljöhetnek olyan túl erős megélések, amelyeket online formában nem lehet megfelelően kezelni. Ezen élethelyzetekben óvatosabb, egyéni módszerekkel, távolabbról indítva célszerű elkezdeni a munkát.<br/><br/><b>Fontos:</b> Nem javasolt a részvétel azoknak a személyeknek sem, akik <b>pszichiátriai gyógyszereket</b> vagy <b>mentális zavarokra gyógyszereket</b> szednek.</>
      }
    ]
  },
  {
    title: "Interakció a csoportban",
    hidden: true,
    items: [
      {
        question: "Reflektálhatnak-e a csoporttagok egymás rajzaira?",
        answer: <><b>Nem</b>, ezen az online eseményen a csoporttagoknak <b>nem lesz lehetőségük</b> egymás alkotásaira reflektálni. <b>Kizárólag én</b> fogok beszélgetni azzal, aki ezt önként vállalja. A személyes csoportokkal ellentétben az online térben az emberi jelenlét hiánya miatt nem lehet könnyen érvényesíteni a reflexió szempontjait.</>
      },
      {
        question: "Mit adhat a részvétel annak, akinek a rajzára nem jut idő, vagy nem akar beszélni?",
        answer: <><b>Nagyon sokat adhat az is</b>, ha valaki csak hallgatja a másokkal folytatott beszélgetéseket. A csoporttagok megéléseit és rajzait <b>össze tudja vetni</b> a saját belső képeivel, a saját rajzával és azzal, hogy ő hogyan vélekedik a témáról. Az esemény célja részben magának a <b>módszernek a bemutatása</b>, ami így, a folyamat követésével is <b>átláthatóvá és tapasztalhatóvá</b> válik.</>
      }
    ]
  }
];

export const FAQCollapse = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-2 text-center">
          Gyakran Ismételt Kérdések
        </h2>
        <p className="text-center text-black/60 mb-12 text-lg">
          Válaszok az eseménnyel kapcsolatos kérdésekre
        </p>

        <div className="space-y-4">
          {faqData.filter(section => !section.hidden).map((section, sectionIdx) => (
            <div key={sectionIdx} className="space-y-3">
              <h3 className="text-lg font-semibold text-black mt-8 mb-4 first:mt-0">
                {section.title}
              </h3>
              {section.items.map((item, itemIdx) => {
                const itemId = `${sectionIdx}-${itemIdx}`;
                const isExpanded = expandedItems.has(itemId);

                return (
                  <div
                    key={itemId}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-red-300 transition-colors"
                  >
                    <button
                      onClick={() => toggleItem(itemId)}
                      className="w-full px-6 py-4 flex items-start justify-between gap-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <span className="font-semibold text-black pr-4 text-base">
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-1"
                      >
                        <ChevronDown className="w-5 h-5 text-red-500" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white border-t border-gray-200 text-black/70 whitespace-pre-wrap leading-relaxed">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
