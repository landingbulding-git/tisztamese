import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: "Általános információk a módszerről",
    items: [
      {
        question: "Milyen meseterápiás módszert alkalmaznak a foglalkozáson?",
        answer: "A **Kincskereső Meseterápiás Módszer** a tudattalannal dolgozik. Mivel a tudattalanunk legjobb kifejezési eszközei a **képek és a szimbólumok**, a népmesék képi világa kiválóan alkalmas arra, hogy ezeket a szimbolikus tartalmakat közvetítse, és általuk jól megélhető módon férjünk hozzá ezekhez a tartalmakhoz."
      },
      {
        question: "Miért kizárólag népmesékkel dolgoznak a terápia során?",
        answer: "Ebben a módszerben azért használunk kizárólag **népmeséket** – azoknak is a lehető legeredetibb variációit –, mert a népmese nem egy egyszerű szórakoztató történet. A népmesékben az **emberi és a kollektív tudás** sűrűsödik össze; szimbólumaik **életutakat** mutatnak be, és egyfajta intuitív belső tudást hordoznak, amely megoldást és kiutat kínál az élethelyzeteinkre, ha a szimbólumokat megfelelően alkalmazzuk."
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
        answer: "Az esemény elején elhangzik néhány bevezető mondat arról, hogyan értelmezzük az **anyasebet**, és milyen szimbolikus erővel bírnak a mesék. Ezután következik a mese – egy gazdag szimbolikájú magyar népmese, a **Szép Cerceruska** –, amit mindenki végighallgat. Ezt egy általam vezetett **testi relaxáció** követi csukott szemmel. A relaxáció közben újra elhangzanak a mese legfontosabb csomópontjai és szimbólumai, majd a résztvevők **spontán lerajzolják** a bennük kialakult képet. Az elkészült rajzot lefotózzák, feltöltik egy megadott linkre, és a jelentkezők közül néhánnyal – az időkereten belül – **online megbeszéljük** a látottakat."
      },
      {
        question: "Hogyan döntsem el, mit rajzoljak a relaxáció után? Mi van, ha nem láttam semmit?",
        answer: "A legjobb, ha egyáltalán nem foglalkozunk ezzel tudatosan, és **elfelejtjük a tervezgetést**. Engedni kell, hogy a mese **átmossa a lelket**, mint ahogy a tenger hulláma partra dob egy kavicsot. Ha valaki **nem lát semmit a relaxáció alatt**, az teljesen természetes – talán éppen kevésbé vizuális módon működünk. A döntő pillanat az, amikor visszatérve egyszerűen csak a **krétákhoz nyúlunk, és elkezdünk vonalakat húzni**; a kép magától összeáll majd. Másnál előfordulhat az is, hogy végig egy konkrét, fix képet lát (akár egy sárga vízilovat), ami látszólag nem kapcsolódik a meséhez, de mégis helye van ott."
      },
      {
        question: "Kötelező-e beszélnem vagy megmutatnom a rajzomat?",
        answer: "Nem, a **megosztás és a beszélgetés teljesen önkéntes**. Egyetlen szót sem kötelező mondani, és a rajzot sem kötelező megmutatni. A mese a szimbólumok révén már a tudattalannal találkozva **kifejtette a hatását**; a megbeszélés hiánya csupán annyit jelent, hogy a tudatos feldolgozást magunkban, és nem másokkal megosztva végezzük el. Tapasztalat szerint a résztvevőket érdekli a saját rajzuk háttere, és szeretnék beazonosítani a mögötte rejlő emlékeket vagy élményeket."
      },
      {
        question: "Kötelező-e egyáltalán rajzolni a foglalkozáson?",
        answer: "Nem kötelező, de a rajz kihagyásával a saját lehetőségeit szűkíti a résztvevő. A szimbólum ugyan így is dolgozik a belsőben, de a rajzolás segít **a felszínre hozni és külsőleg láthatóvá tenni** a tudattalan tartalmakat (például egy félelmetes belső alakot). Amint valami kikerül a papírra, könnyebb vele szembenézni és fejben összerakni az összefüggéseket, mint amikor a tudattalanban rejtve maradva okoz szorongást."
      },
      {
        question: "Részt vehetek-e az eseményen, ha nem tudok rajzolni?",
        answer: "Igen, a **rajztudás egyáltalán nem számít**. A belső képeket egyébként sem lehet pontosan ugyanúgy papírra vetni, ahogy belül láttuk. Nem művészi alkotásra van szükség: teljesen megfelel a **pálcikaember vagy a maszatolás** is. A lényeg csupán annyi, hogy a kréta nyomot hagyjon a papíron, amibe már bele lehet kapaszkodni a folyamat során."
      }
    ]
  },
  {
    title: "A téma és a célközönség",
    items: [
      {
        question: "Mi a foglalkozás pontos témája, és mit jelent az \"anyaseb\"?",
        answer: "A téma az **anya–lánya kapcsolatban** kialakult, néha egészen mély **sérülésekről és sebekről** szól. Olyan nőknek szól – a **felnőttkorba lépéstől kezdve** –, akik úgy érzik, hogy az anyjukkal való nehézségeiken lélekben még nem jutottak teljesen túl. Ez nem csupán egy egyéni probléma; fontos ránézni akkor is, ha valaki erősnek érzi magát, vagy nem szívesen gondol a múltbeli fájdalmakra. A foglalkozás **nem a hibáztatható anyákról szól**, hanem **rólunk**, akik szeretnénk **teljesebbé tenni az életünket**, és fontosnak tartjuk ezt az elsődleges, meghatározó kapcsolatot."
      },
      {
        question: "Kizárólag friss anyáknak vagy a közeljövőben gyereket tervezőknek szól az esemény?",
        answer: "**Bármilyen korú felnőtt nőnek szól** – nekik duplán hasznos lehet, de a fókusz a **saját személyes jólléten** van. Az **anya–lánya viszony** az egyik legnehezebb kapcsolat: genetikailag és érzelmileg is ehhez állunk a legközelebb, így a **saját identitás meghatározása és a leválás** még a legtökéletesebb anya mellett is embert próbáló feladat mindenki számára."
      },
      {
        question: "Van-e életkori határa a részvételnek?",
        answer: "**Nincs felső korhatár**; a betöltött **20. év felett** bárki jöhet, aki érdeklődik. **Akár 70–80 évesen is aktuális és hasznos** ez a munka. Amíg lélegzünk, addig jó esetben előrefelé haladunk és fejlődünk, így az **önmagunkkal való foglalkozást** és a belső kapcsolatot idős korban sem érdemes letenni."
      }
    ]
  },
  {
    title: "Technikai és gyakorlati tudnivalók",
    items: [
      {
        question: "Milyen eszközökre és környezetre van szükségem az online részvételhez?",
        answer: "**Papír:** a legjobb az **A3-as méret**, mert a nagyobb íven nagyobb mozdulatokkal és mélyebb beleéléssel lehet rajzolni, de ha nincs más, az **A4-es** is megteszi.\n\n**Rajzeszköz:** **kréta szükséges** – abból is olyan, ami erősebb nyomot hagy (például **olajpasztell**). A színes ceruza túl gyenge nyomot hagy, a golyóstoll pedig túl erős, merev vonalat zár le. Egy **12 vagy 24 darabos készlet** ideális; a túl sok színben (pl. 60 darab) könnyű elveszni.\n\n**Technikai eszköz:** egy **telefon**, amivel a kész rajzot le lehet fotózni és fel lehet tölteni.\n\n**Környezet:** egy **teljesen nyugodt, háborítatlan helyiség**, ahol a résztvevő **egyedül van** – a relaxációt és a belső folyamatokat zavarja mások jelenléte."
      },
      {
        question: "Kötelező bekapcsolni a kamerát az online esemény alatt?",
        answer: "**Nem kötelező**, de örülök neki, mert jó látni az arcokat és kapcsolódni az emberekhez. Az egyetlen szigorú kötelezettség az online térben a **titoktartás** (hogy az elhangzott személyes történeteket senki ne beszélje ki utána). Minden más a saját komfortérzettől függ: ha valakinek kellemetlen a kamera, vagy épp technikailag nem működik, abból semmi gond nem származik, nem lesz számonkérés."
      },
      {
        question: "Mennyi ideig tart a foglalkozás?",
        answer: "**Körülbelül két és három óra között** lesz a vége. Az alsó határ biztosabb, de a felső határ rugalmas. Ha a folyamat végén valakinél egy olyan aktuális, megnyílt téma jön elő a rajz kapcsán, ami érett a feldolgozásra, a beszélgetést **nem fogom mereven lezárni** az időkeret miatt; elvisszük addig a pontig, amíg a résztvevő megnyugvást talál."
      }
    ]
  },
  {
    title: "Biztonság, félelmek és hatások",
    items: [
      {
        question: "Természetes-e, ha valaki tart a foglalkozástól vagy fél a kezdés előtt?",
        answer: "Teljesen rendben van és **természetes** – alig találkozom olyan emberrel, aki ne félne egy kicsit a kezdés előtt. A félelem jön és megy, de ha átadjuk neki az irányítást, **fontos dolgokról maradhatunk le**. A tartózkodás oka általában az, hogy tudjuk: **a tudattalanban lévő dolgokkal való szembenézéséhez erő kell**. Ha egy belső tartalmat kimondunk és megnevezünk, az **elköteleződéssel jár** – nem tehetünk úgy, mintha mi sem történt volna. Az ismeretlentől való félelem létező jelenség, de szerintem **jobb tudni, mi lakik bennünk**, mint hagyni, hogy a letagadott belső tartalmak váratlan és kellemetlen pillanatokban okozzanak galibát a mindennapi kapcsolatainkban. A folyamat során **semmi végzetes vagy önidegen dologra** nem fogunk rájönni, csak arra, amik mi magunk vagyunk. Ha a módszert jól vezetik, **nem lehet vele kárt okozni**, bár szomorúságot vagy megrázó felismeréseket hozhat."
      },
      {
        question: "Miben más az online forma, mint a személyes találkozó? Ugyanolyan hatásos?",
        answer: "A **technika és a folyamat menete teljesen megegyezik**. Személyesen – ahol kis, **6–8 fős csoportokban** dolgozunk – könnyebb dolgom van segítőként, mert azonnal látom a résztvevők érzelmi reakcióit a mese felolvasása közben, és a jelenlévők energiája, a fizikai közelség miatt a relaxáció is könnyebb. Az online forma létjogosultságáról a covid alatti főiskolai oktatási és terápiás tapasztalatok győztek meg: **a módszer így is gyönyörűen és teljesen rendben működik**. Ha a személyes találkozás a távolság miatt nem megoldható, az **online forma kiváló alternatíva**."
      },
      {
        question: "Mire lehet számítani az eseményt követő napokban, hetekben?",
        answer: "Érdemes tudni, hogy **a mese a foglalkozás után is dolgozik** a belsőben. **Hetekig előfordulhatnak** intenzívebb belső megélések, sűrűbb vagy szokatlan **álmok**, amelyek összefüggésbe hozhatók a mese élményével. Sokan számolnak be váratlan, különös találkozásokról vagy olyan külső eseményekről az életükben, amelyek összeköthetők a folyamattal; **a tudattalannak hatalmas, nehezen elképzelhető mozgósító ereje van**."
      },
      {
        question: "Kiknek nem javasolt a részvétel?",
        answer: "**Nem javasolt a részvétel azoknak**, akik **nagyon friss gyászban** vagy **nagyon friss traumában, krízisben** vannak (különösen, ha az épp az anyához kötődik – például egy aktuális családi szakítás vagy az anya közelmúltbeli halála esetén). Ilyenkor a tudattalan még az események rendezésével van elfoglalva, és egy nagyobb létszámú online eseményen feljöhetnek olyan túl erős megélések, amelyeket online formában nem lehet megfelelően kezelni. Ezen élethelyzetekben óvatosabb, egyéni módszerekkel, távolabbról indítva célszerű elkezdeni a munkát.\n\n**Fontos:** Nem javasolt a részvétel azoknak a személyeknek sem, akik **pszichiátriai gyógyszereket** vagy **mentális zavarokra gyógyszereket** szednek."
      }
    ]
  },
  {
    title: "Interakció a csoportban",
    items: [
      {
        question: "Reflektálhatnak-e a csoporttagok egymás rajzaira?",
        answer: "**Nem**, ezen az online eseményen a csoporttagoknak **nem lesz lehetőségük** egymás alkotásaira reflektálni. **Kizárólag én** fogok beszélgetni azzal, aki ezt önként vállalja. A személyes csoportokkal ellentétben az online térben az emberi jelenlét hiánya miatt nem lehet könnyen érvényesíteni a reflexió szempontjait."
      },
      {
        question: "Mit adhat a részvétel annak, akinek a rajzára nem jut idő, vagy nem akar beszélni?",
        answer: "**Nagyon sokat adhat az is**, ha valaki csak hallgatja a másokkal folytatott beszélgetéseket. A csoporttagok megéléseit és rajzait **össze tudja vetni** a saját belső képeivel, a saját rajzával és azzal, hogy ő hogyan vélekedik a témáról. Az esemény célja részben magának a **módszernek a bemutatása**, ami így, a folyamat követésével is **átláthatóvá és tapasztalhatóvá** válik."
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
          {faqData.map((section, sectionIdx) => (
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
