/*SheetJS*/
/* processing array buffers, only required for readAsArrayBuffer */
// function fixdata(data) {
// 	let o = "", l = 0, w = 10240;
// 	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
// 	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
// 	return o;
// }
// const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */



	var tab;
    let tableauElement = new Array();
    var fruit, arome, poudre, autre;

    // $.getJSON("json/fruit.json", function(json) {
    //     console.log("chargement du fichier json fruit");
    //     console.log(json); // this will show the info it in firebug console
    //     fruit = json;
    // });
    // $.getJSON("json/arome.json", function(json) {
    //     console.log("chargement du fichier json arome");
    //     console.log(json); // this will show the info it in firebug console
    //     arome = json;
    // });
    // $.getJSON("json/poudre.json", function(json) {
    //     console.log("chargement du fichier json poudre");
    //     console.log(json); // this will show the info it in firebug console
    //     poudre = json;
    // });

    fruit = [{"article":"11001849","description":"Puree Mangue Alphonso Dohler ~"},{"article":"11003137","description":"Puree Cassis DOHLER 2.34579"},{"article":"11001605","description":"Pur Framboise 0% Cuve Hx ~"},{"article":"11001668","description":"Pur Mangue Totapuri 0% ~"},{"article":"11001584","description":"Pur Fraise Cuve  0% ~"},{"article":"11003843","description":"Puree Cassis MAINFRUCHT ~"},{"article":"11004269","description":"Pur Peche Jaune M117302 Zuegg"},{"article":"11001727","description":"Puree Cassis Unifruit 19388"},{"article":"11003495","description":"Puree Framboise Bio"},{"article":"11004283","description":"Pur poire Guyot 117107 Zuegg"},{"article":"11002920","description":"Pur Rhub Doehler 8.45169.120"},{"article":"11001681","description":"Pur Pommes Concentree 20 Brix"},{"article":"11001429","description":"Framboise Sucree 10% Puree ~"},{"article":"11001594","description":"Pur Peche Jaune 19162"},{"article":"11001611","description":"Jus Conc Citvert 50°-719750006"},{"article":"11001590","description":"Jus Conc Ananas 57°brix"},{"article":"11001563","description":"Pur Poire Williams Cuve 0%"},{"article":"11001581","description":"Pur Cerise Griotte Cuve 0% +"},{"article":"11001663","description":"Jus Conc Passion Equateur"},{"article":"11001564","description":"Jus Conc Orange 65° Brix"},{"article":"11001562","description":"Pur Passion 8608.00 Cuve 10% +"},{"article":"11001637","description":"Jus Conc Pomme 40°brix 19406"},{"article":"11003396","description":"Pate De Noix Coco Ultra Smooth"},{"article":"11001575","description":"Jus Conc Fraise 66°brix"},{"article":"11003401","description":"Jus Conc Pomme Verte 70.8° B"},{"article":"11001661","description":"Jus Conc Cit 400gpl Cloudy"},{"article":"11001591","description":"Jus Conc Mandarin 63 724010008"},{"article":"11001376","description":"Jus Cit Sicile Conc48 1200kg"},{"article":"11001624","description":"Melange Fr Exo F101811 ~"},{"article":"11001534","description":"Jaune D'Oeuf Bio 100% +"},{"article":"11001772","description":"Jus Conc Pomme 70° Brix 11385"},{"article":"11001574","description":"Pur Banane 0%"},{"article":"11002196","description":"Beurre Doux Bio FR"},{"article":"11003453","description":"Jus conc passion 50° Mainfruch"},{"article":"11001602","description":"Jus Conc Pamplemousse 60°brix"},{"article":"11001558","description":"Jaune Oeuf Liquide Non Sucre +"},{"article":"11001579","description":"Jus Conc Framboise 65°brix"},{"article":"11003998","description":"Jus Conc Litchi SVZ"},{"article":"11003996","description":"Pur Melon Sucree 10% Ravifruit"},{"article":"11001565","description":"Pur Framb Cuve 0% Sucre Ravi +"},{"article":"11004344","description":"Blanc Œuf Liq Past Suc Pl.Air"},{"article":"11001896","description":"Puree Pomme Conc 16/18 Brix"},{"article":"11001787","description":"Yaourt Veloute 5% Mg +"},{"article":"11001920","description":"Beurre Doux Ifs"},{"article":"11003127","description":"Jaune Oeuf Liquide Plein Air +"},{"article":"11003494","description":"Jus Conc Citron Bio Dohler !!"},{"article":"11001582","description":"Pur Mirabelle Lorraine Fut 0%"},{"article":"11001657","description":"Jus Conc Poire 70° 2.62057.183"},{"article":"11001533","description":"Jus Concentre Mure 65 Brix"},{"article":"11001586","description":"Pur Abricot Fut 19282"},{"article":"11001610","description":"Pur Fr Rouge 0% Cuve 8569/00 +"}];
    arome= [{"article":"11001741","description":"Ar Nat Citron E1025274 Mane"},{"article":"11001674","description":"Ar Van Crem Nat E_1902934 Mane"},{"article":"11001874","description":"Ar Nat Van E_1782061/01 Mane"},{"article":"11001589","description":"Ar Ananas Nat E9915023 Mane"},{"article":"11001587","description":"Ar Menthe Nat E9907806 /601009"},{"article":"11001767","description":"Ar Nat Van Brb  513220 t Firm"},{"article":"11003503","description":"Ar Nat Vanille TEG10370990 Tak"},{"article":"11001785","description":"Ar Van Nat 1116460 Sens Rmb"},{"article":"11003170","description":"Ar Nat Poire PE16857 Metarom"},{"article":"11001872","description":"Ar Nat Coco 554539t Firm"},{"article":"11001888","description":"Jus Conc Groseille"},{"article":"11001384","description":"Anato Colorant 0,6% 839012"},{"article":"11001628","description":"Ar Vanille Ni E215828 Mane"},{"article":"11002041","description":"Ar Cit Meringue Nat 765164 SYM"},{"article":"11001768","description":"Col Beta Caro E160a RingeK RMB"},{"article":"11001750","description":"Ar Vanille Brb TEG-10370606"},{"article":"11003456","description":"Ar nat pistache TEG 10374125"},{"article":"11003424","description":"Ar Nat Van TEG10369863 TAG NES"},{"article":"11001863","description":"Ar Nat Vanille TEG-10370182"},{"article":"11001573","description":"Ar Rhum Nat Pe14517 Metar"},{"article":"11001877","description":"Ar Nat Van E1720425 Mane"},{"article":"11001716","description":"Ar Van Brb Nat E_1904817 Mane"},{"article":"11001592","description":"Ar Mandarine Nat Pe15082 Metar"},{"article":"11001643","description":"Ar Jamaica 80.4871 Robe"},{"article":"11001603","description":"Col Curcuma E100 T-Pt8-Ws Chr"},{"article":"11003134","description":"Col B Carotene NBC yellow C220"},{"article":"11001832","description":"Col Beta Carot Np E160a 400 Ws"},{"article":"11003992","description":"Ar Nat Marron IT250-480-4 Giv"},{"article":"11001895","description":"Ar Poire Nat E1528246 Mane"},{"article":"11001836","description":"Ar Nat Frai E102319502 Mane"},{"article":"20000004","description":"Beurre Doux 10kg - Origin : Fr"},{"article":"11001725","description":"Ar Pomme Nat 819508 Robe"},{"article":"11003103","description":"Ar Nat Vanille 1100906150 Sile"},{"article":"11001650","description":"Ar Bisc Ni Pf33127981 Firm"},{"article":"11001665","description":"Ar Nougat Nat 795446 Symr"},{"article":"11003962","description":"Ar Nat Cerise FAB 180813E"},{"article":"11001879","description":"Ar Nat Framb E1501747/02 Mane"},{"article":"11004270","description":"Ar Nat Mandarine 220436 Symr"},{"article":"11001462","description":"Ar  Citron Nat M-0054227 Mane"},{"article":"11001886","description":"Ar Nat Cafe E_18B0946 Mane"},{"article":"11001802","description":"Pate Nois 3107"},{"article":"11001395","description":"Ar Beurre  23466 Giv"},{"article":"11001620","description":"Conc Sureau 70120043"},{"article":"11004370","description":"Infusion Tonka M_0063125 Mane"},{"article":"11001840","description":"Conc Carot Fm Papaya Ws 705762"},{"article":"11001882","description":"Ar Cafe 507282t Firm"},{"article":"11003802","description":"Col Chloro E141 409058 Sen NES"},{"article":"11001684","description":"Ar Van Nat TEG-10369893 TAKA"},{"article":"11001604","description":"Col Chloro E141 C-3000-Ws Chr"},{"article":"11001702","description":"Ar Creme Nat 208323 Symr"},{"article":"11003447","description":"Ar nat cara CU8563361 Giv NES"},{"article":"11001866","description":"Ar Caramel Nat 472061 Symr"},{"article":"11003457","description":"Ar Nat Van TEG10370176 TAG NES"},{"article":"11001824","description":"Col Bleu Spiruline Acai 310ws"},{"article":"11001839","description":"Conc Carthame Fm Starfr Bright"},{"article":"11001626","description":"Ar Exo Nat Bf 10749 Sens"},{"article":"11003814","description":"Ar Nat Ananas 1117661 Sensient"},{"article":"11001891","description":"Arome Pist E 1524990/01 Mane"},{"article":"11003512","description":"Ar nat citr j E1857816/01 Mane"},{"article":"11001578","description":"Ar Nat Va Nat E1720424/01 Mane"},{"article":"11001735","description":"Ar Caramel Nat Symr 638844"},{"article":"11001625","description":"Ar Passion Nat 11791 Sens"},{"article":"11001722","description":"Ar Cassis Nat PE17306 Meta"},{"article":"11001878","description":"Ar Coco Nat E1501532/02 Mane"},{"article":"11001683","description":"Conc Cassis 65°b"},{"article":"11001588","description":"Col Rocou E160b A320ws Chr"},{"article":"11001714","description":"Ar Banane Nat E_1005563 Mane"},{"article":"11001921","description":"Ar Fraise Nat 214864 Symr"},{"article":"11001405","description":"Ar Cr Brulee Nat PE 17201 Meta"},{"article":"11001492","description":"Ar Peche Ql44860 Giv"},{"article":"11004416","description":"Ar Nat Grenade PE15834 Metarom"},{"article":"11001837","description":"Conc Carot Orange Vanill 420ws"},{"article":"11001362","description":"Ar Lait 49501/Es 9091 Giot"},{"article":"11003445","description":"Ar nat amande 944415 Symrise"},{"article":"11001744","description":"Ar Fraise Nat 376762 Symr"},{"article":"11001855","description":"Ar Nat Citron 460306 Symr"},{"article":"11003828","description":"Ar Nat Cannelle Teg-10330430"},{"article":"11001717","description":"Ar Nat Van Mada E1781654 Mane"},{"article":"11001794","description":"Colorant Charbon E153"},{"article":"11001616","description":"Ar Mangue Nat Bf 11253 Sens Hx"},{"article":"11001506","description":"Ar Cit Meringuee Ql65565 Giv"},{"article":"11001568","description":"Col Rouge Betterave B50ws Chr"},{"article":"11001629","description":"Ar Fr Bois Nat E_216345 Mane"},{"article":"11001936","description":"Ar Coco Nat E1617112/01 Mane"},{"article":"11001678","description":"Ar Nat  Vanille Pe16232 Metar"},{"article":"11001747","description":"Ar Choc Blanc Ni Pe12173 Metar"},{"article":"11001724","description":"Ar Nat Framboise PE17202 Meta"},{"article":"11001606","description":"Col Rge Cass E163 Ac3ws Chr Hx"},{"article":"11001619","description":"Ar Pamplem Nat 81.6176 Robe Hx"},{"article":"11003851","description":"Ar Nat Cassis QL13331 Givaudan"},{"article":"11001801","description":"Ar Cr Brulee Nat 226283 Symr"},{"article":"11001726","description":"Ar Poire Nat&A Pe 16593 Metar"},{"article":"11001652","description":"Ar Cr Brulee Ni Pe15922 Metar"},{"article":"11001728","description":"Ar Coco Nat 81a287 Robe"},{"article":"11001889","description":"Ar Groseille Nat 725915 Symr"},{"article":"11003451","description":"Ar nat noisette IJ6484444 Giv"},{"article":"11001856","description":"Ar Bisc Nat 554038t Firm"},{"article":"11003427","description":"Col Riboflavine Poudre 50350"},{"article":"11001693","description":"Ar Pistache Nat PE 17452 Meta"},{"article":"11001622","description":"Ar Pom Vert Nat PE 17259 Met"},{"article":"11003171","description":"Ar Nat Nois M0063142 Mane"},{"article":"11001566","description":"Ar Cit Vert Nat 285+ametar"},{"article":"11001427","description":"Ar Vanille Nat Pe17206"},{"article":"11001585","description":"Ar Fr Rge Ni E9721557/02 Mane"},{"article":"11001723","description":"Ar Nat Nois E1005650 Mane"},{"article":"11003994","description":"Ar Nat Prune M0055414 Mane NES"},{"article":"11001576","description":"Ar Fr Exo Ni 9721560/01 Mane"},{"article":"11003443","description":"Conc sureau 70120043"},{"article":"11001908","description":"Ar Nat Cassis 761012 Symrise"},{"article":"11001608","description":"Ar Poire Nat 789834 Symr"},{"article":"11001838","description":"Conc Betterave Fm Ws 687807"},{"article":"11001536","description":"Ar Framboise Nat E1001087 Mane"},{"article":"11002732","description":"Ar Banane M0055568 Mane"},{"article":"11001766","description":"Ar Vanille Nat E_18B0945 Mane"},{"article":"11001428","description":"Ext Nat Cacao 924408 Firm"},{"article":"11002921","description":"Ar Rhubarbe PE 16562 Metarom"},{"article":"11003454","description":"Ar nat coco VY03400404 Giv"},{"article":"11003455","description":"Ar nat mangue 15023487 IFF"},{"article":"11001929","description":"Ar Abricot Nat 171490 Symr"},{"article":"11003983","description":"Ar Nat Framb NE970073 IFF NES"},{"article":"11001732","description":"Ar Coco Nat Dreidoppel 6075"},{"article":"11001676","description":"Ext Vanille TEG E_18B0943 Taka"},{"article":"11003968","description":"Ar Nat Barbap NE521723 IFF NES"},{"article":"11003995","description":"Ar Nat Melon E0606182 Mane NES"},{"article":"11001799","description":"Ar Cassis Nat 27855 Aroma"},{"article":"11003993","description":"Ar Nat Cerise 218669 Symr NES"},{"article":"11004282","description":"Ar Nat Abricot 1207401 Sensien"},{"article":"11001831","description":"Col Curcuma Np E100 Ws6"},{"article":"11001743","description":"Ar Nat Miel 959969 Firm"},{"article":"11001865","description":"Ar Fraise Ni E1422245 Mane"},{"article":"11001894","description":"Ar Pomme Nat E1528669/01 Mane"},{"article":"11003444","description":"Ar nat citr vert 502733A Firm"},{"article":"11001754","description":"Ext Van Brb TEG10348825 TAKA"},{"article":"11004273","description":"Ar Toffee NI MO-743-050-3 Giv"},{"article":"11001876","description":"Ar Nat Cit Vt E1025274/03 Mane"},{"article":"11001540","description":"Ar Nat Orange E1021182 Mane"},{"article":"11001692","description":"Ar Menthe Nat 880028 Symr"},{"article":"11004303","description":"Conc Betterave Bio CC00180002"},{"article":"11003449","description":"Ar nat noisette 550550A Firm"},{"article":"11003104","description":"Ar Nat Gaufrette Sensient"},{"article":"11003450","description":"Ar nat C brulee 358820 Sym NES"},{"article":"11003441","description":"Ar nat pecan 554068 T Firm"},{"article":"11001501","description":"Ar Amaretto 490516/861016 Giot"},{"article":"11001740","description":"Ar Coco 31/20715 Firm"},{"article":"11001647","description":"Ar Chocolat Ni Pf33127439 Firm"},{"article":"11003967","description":"Ar Nat Menthe E9915367/01 Mane"},{"article":"11003136","description":"Ar Nat Tropical Sens 1209211"},{"article":"11001673","description":"Ar Beurre Nat 0718491 Mane"},{"article":"11001710","description":"Ar Fr Exo Nat E_1002592 Mane"},{"article":"11001359","description":"Ar Creme Wonf Van Ql30165 Giv"},{"article":"11001857","description":"Conc Raisin Fm Ws 701921"},{"article":"11001632","description":"Ar Vanille-Panna 206153 Symr"},{"article":"11001709","description":"Ar Fr Rouges Nat E9931646 Mane"},{"article":"11001381","description":"Curcumine 7%-Lws 503052 Sens"},{"article":"11001742","description":"Ar Nat Nougat 580347t Firm"},{"article":"11001695","description":"Ar Coco Nat 050002 Firm"},{"article":"11001375","description":"Ar Pomme  .331881 Symr"},{"article":"11001374","description":"Ar Pistache Ni U35680 Firm"},{"article":"11001614","description":"Ar Cit Jaune Nat M30367 Mane"},{"article":"11001843","description":"Ar Mojito (Nat) 550793 T5 Firm"},{"article":"11003478","description":"Ar Vanilla Java"},{"article":"11001793","description":"Col Beta Caro Nbc Red 200 Ws"},{"article":"11003448","description":"Ar nat chocolat 550765T Firm"},{"article":"11001419","description":"Ar Cafe Nat  1100709118 Sile"},{"article":"11002023","description":"Ar Orange Nat E1612576 Mane"},{"article":"11003504","description":"Ar Cr Angl Nat E_18A9715 Mane"},{"article":"11001905","description":"Ext Van Symr779570/Teg10369539"},{"article":"11003110","description":"Ar Nat Van E1778958 Mane"},{"article":"11001925","description":"Ar Peche Nat 555160 2C Firm"},{"article":"11001646","description":"Ar Mirabe Nat Pf 34428785 Firm"},{"article":"11001708","description":"Ar Cara Nat 050002 175t Firm"},{"article":"11001808","description":"Ar Cara Ni Cb 81704193 Cadb"},{"article":"11001859","description":"Ar Toffee Nat 5700017 Bell"},{"article":"11001617","description":"Ar Peche Nat Pe15644 Metar"},{"article":"11001807","description":"Ar Caramel Ni 580693t Firm"},{"article":"11001393","description":"Ar Fr Bois Nat 3182930011 Wild"},{"article":"11001775","description":"Ar Nois Nat Pe16672 Metar"}];
    poudre = [{"article":"11001550","description":"Dextrose Merisweet 200"},{"article":"11002036","description":"Cara Bs Fb84gr Nigay Fut"},{"article":"11001597","description":"Miel Tournesol Espagne A182"},{"article":"11001627","description":"Satiaxane Cx 911/Xanthan 80"},{"article":"11004772","description":"Pou Cafe Mokambo NES"},{"article":"11003158","description":"Pou Cacao 10/12 D11 CK"},{"article":"11001621","description":"Col Cara E150a 25kg - 1090"},{"article":"11001607","description":"Cara Aromatique 5S7713"},{"article":"11001583","description":"Rhum Gelifie 50% Hx"},{"article":"11001712","description":"Creme Nougat Esp"},{"article":"11003102","description":"Pou Gaufrette 007100B"},{"article":"11001553","description":"Chocolat Rape Amer 6chra-P"},{"article":"11001552","description":"Acide Citrique Monohydrate Gra"},{"article":"11001811","description":"Caramel Aromatique 5SGF7704"},{"article":"11001355","description":"Sirop Caramel"},{"article":"11001670","description":"Pou Lait Caramelise 313b"},{"article":"11001903","description":"Po Cacao 10/12 Umb"},{"article":"11001476","description":"Dairyline 100 Np/ Fm8620 Np"},{"article":"11001424","description":"Pate Nougat Base Montelimar"},{"article":"11001792","description":"Cafe Pou Arabica A11a22"},{"article":"11001777","description":"Lecithine Tournesol"},{"article":"11003107","description":"Sucre Glace"},{"article":"11001730","description":"Lactoremp Wpc35%"},{"article":"11003101","description":"Billes Cereale Biscuitee 1053"},{"article":"11001672","description":"Proteines Pois Hyfoama Pw"},{"article":"11001844","description":"Rhum Gelifie 50% Gra50n"},{"article":"11001800","description":"Gouttes Cho Blanc Belge Chw-S2"},{"article":"11001764","description":"Lygomme Fm 4617 Rmb"},{"article":"11001644","description":"Pou Cacao 20/22 GT78/D21V"},{"article":"11001790","description":"Gousses Van Epuisees Deba Mada"},{"article":"11001789","description":"Pou Lait 0 % Certifiée Ifs Fr"},{"article":"11002820","description":"Cremodan 60 VEG NP"},{"article":"11001498","description":"Pate Nois Toract.Forte"},{"article":"11003157","description":"Pou Cacao 20/22 SR 100037-793"},{"article":"11002928","description":"Creme De Coco 24% MG"},{"article":"11001893","description":"Chocolat Au Lait Chm-S23-558"},{"article":"11001779","description":"Pou Cacao 20/22 Gt150/D21CE"},{"article":"11003159","description":"Pou Cacao 10/12 D11 SB"},{"article":"11001830","description":"Unipectine Of 845 C"},{"article":"11001892","description":"Pou Cacao 10-12% 100323-793"},{"article":"11003442","description":"Alcool neutre gélifié NES"},{"article":"11001687","description":"Pate Nois"},{"article":"11001899","description":"Leciprime 1400 Ipm"},{"article":"11001598","description":"Cafe Soluble A 11 C 22"},{"article":"11002042","description":"Jaune Oeuf Poudre Plein Air"},{"article":"11001729","description":"Pou Lactoserum Doux"},{"article":"11001561","description":"Pate Pistache De Californie"},{"article":"11002838","description":"Choc Noir Tanzanie CHD-Q75TAZ"},{"article":"11001612","description":"Nx Coco Pou Atom Hx 12100232"},{"article":"11001513","description":"Sirop Riz Bio"},{"article":"11001551","description":"Sucre En Sac"},{"article":"11003156","description":"Procream HF 2"},{"article":"11003153","description":"Emulsifiant E471 Mighty SoftXL"},{"article":"11001666","description":"Lygomme Fz 217"},{"article":"11004442","description":"Methocel A4M E461 Danisco"},{"article":"11001499","description":"Choco Extra Bitter Chd-S70-558"},{"article":"11001758","description":"Cara Bs Fb84s Nigay Futs"},{"article":"11003291","description":"Chocolat Blond CHKS2935CAR-491"},{"article":"11001574","description":"Pur Banane 0%"},{"article":"11001748","description":"Pou Cacao 20/22 D21dq"},{"article":"11001818","description":"Wpc 35 % Végétarien"},{"article":"11004814","description":"Unipectine OB 700"},{"article":"11003452","description":"Pate praline noiset La Morella"},{"article":"11001662","description":"Glucodry 210"},{"article":"11001514","description":"Pou Cacao 10/12 Bio 100510-793"},{"article":"11001636","description":"Pate Cacao 100083-458"},{"article":"11001707","description":"Pou Confiture De Lait Vet"},{"article":"11001518","description":"Sucre Canne Bio Extra-Light"},{"article":"11001623","description":"Peanuts Paste"},{"article":"11001746","description":"Pou Cacao 10/12 D11b"},{"article":"11001734","description":"Stab Grinsted Lbg 246"},{"article":"11000064","description":"Pasta Nocciola Igp"},{"article":"11001691","description":"Pou Choc Chd-Y8190P-U47"},{"article":"11001634","description":"Glycerine Natle Codex"},{"article":"11001658","description":"Choc Au Lait Belge Chm-T23-105"},{"article":"11001517","description":"Pou Lait Bio 0%"},{"article":"11001595","description":"Graines Vanille Purifiees"},{"article":"11001835","description":"Palmiste Rspo Ertilor Pk26 Sg"},{"article":"11001812","description":"Huile Tournesol Au Kg"},{"article":"11003459","description":"Lecithine Soja Bio ADIVEC"},{"article":"11001559","description":"Marsala 17%"},{"article":"11001593","description":"Beurre Cacao"},{"article":"11001848","description":"Prpg"},{"article":"11001383","description":"Vanilline"},{"article":"11003479","description":"Proszek Vanilla Java"},{"article":"11003154","description":"Stab Grindsted Guar 225"},{"article":"11001685","description":"Gouttes Cho Blanc W0011212-540"},{"article":"11001890","description":"Fmp 471 Pu Np"},{"article":"11001502","description":"Satiagel Adf 520 / Adf 1690"},{"article":"11001520","description":"Choc Bio Chd-Dr-150tnop-597"},{"article":"11001823","description":"Stab Satiagel Adf 135"},{"article":"11001904","description":"Premix Vit D/B12 Re17475-D"},{"article":"11001907","description":"Maltitol Maltidex M16311"},{"article":"11000084","description":"Pasta Pistacchio Puro Sicilia"},{"article":"11001842","description":"Lygomme Fm 5700 Rmb"},{"article":"11001773","description":"Lygomme Fz 617"},{"article":"11001900","description":"Polydextrose Litesse Two Powd"},{"article":"11001515","description":"Pou Vanille Epuisee 2631 Bio"},{"article":"11001901","description":"Erythritol Zerose 16952"},{"article":"11001549","description":"Glucose Poudre Glucodry 385"},{"article":"11001932","description":"Creme Amande Blanche 60101220"},{"article":"11003292","description":"Marc de Champagne gel 50%"},{"article":"11001809","description":"Sucre Vergeoise Brun"},{"article":"11001613","description":"Lygomme Gab 2200"},{"article":"11001642","description":"Sel Fin Alimentaire"},{"article":"11001664","description":"Unipectine Ayd250"},{"article":"11001688","description":"Lygomme Fm 4613 RSPO MB"},{"article":"11001778","description":"Stab Viscogum Mp41230"},{"article":"11001804","description":"Unipectine Of 305 C"},{"article":"11001825","description":"Stab Grinsted Lactem R22 Np"},{"article":"11003155","description":"Stab Carraghenanes CM-888"},{"article":"11003426","description":"Gousses Van Epuisees Bourb NES"},{"article":"14001017","description":"Chocolat Belge Chd-S11-558"},{"article":"20000004","description":"Beurre Doux 10kg - Origin : Fr"},{"article":"11002196","description":"Beurre Doux Bio FR"},{"article":"11001738","description":"Sucre Inverti Liq 73% Si 66-73"},{"article":"11001762","description":"Amidon E1442 C*polar Tex 06748"},{"article":"11004831","description":"Lygomme FM 4617 NP"},{"article":"11001756","description":"Fleur de sel"}];


function createTableForFlavor(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Arôme");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            console.log(t.length);
            let debug =t.length;
            let i=0, j=0;


            for(j=0;j<tabTriSalleArome.length;j++){

                for(i=0;i<t.length;i++){

                    if(checkElementInJson(arome, t[i][0]) == true && GetAromePlacement(t[i][0]) == tabTriSalleArome[j]){
                    //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                    console.log("draw flavor");
                    console.log(i);
                    console.log(t[i][0]);
                    console.log(GetAromePlacement(t[i][0]));
                    console.log(t[i][1]);
                    createTableRowForFlavor(table,
                        t[i][0],
                        GetAromePlacement(t[i][0]),
                        t[i][1]
                    );
                    t[i][2]=1;
                    }
                
                
                    
                }

            }
                
}
function createTableForPowder(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Poudre");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            let i=0;
            for(i=0;i<t.length;i++){

                if(checkElementInJson(poudre, t[i][0]) == true){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}
function createTableForFruit(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    
    td.setAttribute("colspan", "4");
    td.setAttribute("height", "40");
    txt = document.createTextNode("Purée");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            for(i=0;i<t.length;i++){

                if(checkElementInJson(fruit, t[i][0]) == true){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}

function createTableForOther(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Autre");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            for(i=0;i<t.length;i++){

                
                if(t[i][2] == 0){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}
    
function createTableRow(tableBody,col1,col2){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-arrows-alt-v");
    
   
    td.appendChild(i);
    td.setAttribute("class", "no-print");
    td.setAttribute("id", "sortableData");
    tr.appendChild(td);

  
    td = document.createElement("td");
    txt = document.createTextNode(col1);
    td.style.width = "15%";
    td.appendChild(txt);
    tr.appendChild(td);

    // // nom de la sauce
    td = document.createElement("td");
    txt = document.createTextNode(col2);
    td.style.width = "30%";
    td.appendChild(txt);
    tr.appendChild(td);

      // // cas vide
      td = document.createElement("td");
      txt = document.createTextNode("");
      td.style.width = "50%";
      td.appendChild(txt);
      tr.appendChild(td);

    tableBody.appendChild(tr);
}


function checkElementInJson(tab, element){
//console.log("check"+element);

        let i =0;
        for(i=0;i<tab.length;i++){
            if(tab[i].article.includes(element) ){
                //console.log("true");
                return 1;
            }
        }
        //console.log("false");
    
    return -1;

}

function checkElement(tab, element){

    if(tab.length == 0){
        //cas ou le tableau est vide
        return -1;
    }else{
        let i =0;
        for(i=0;i<tab.length;i++){
            if(tab[i][0] == element ){
                return 1;
            }
        }

    }
    return -1;

}


function writeDataTable(t){
    let tableLength = t.length;

    // on fait le tri dans le tableau
    //suppression des doublons
    let nombreElement = 0;

    console.log("taille du tableau:" + tableLength);
    for(i=0;i<tableLength;i++){
        //console.log(i);
        /*checkElement(t,t[i]["N° d'article"]) != -1 &&*/ 
       if(checkElement(tableauElement,t[i]["N° d'article"]) == -1){
           // console.log("ajout nouveau element");
        tableauElement.push(new Array(t[i]["N° d'article"], t[i]["Description d'article"],0));
        nombreElement ++;
        }
    }
        console.log(tableauElement);



    let div = document.getElementById("DataPanel");
    //div.write(t[0]);
    console.log(t[2]["Description d'article"]);
    let tableBody = document.getElementById("DataPanelTableBody");
    
    //dessin tableau
    createTableForFlavor(tableBody,tableauElement); 
    createTableForPowder(tableBody,tableauElement); 
    createTableForFruit(tableBody,tableauElement); 
    createTableForOther(tableBody,tableauElement); 

    $("tbody").sortable({
        handle: "#sortableData",
        cancel:''
    }).disableSelection();

$("#dataContainer").removeClass("invisible");
}






/* fixdata and rABS are defined in the drag and drop example */
function handleXLSFile(e) {
    console.log("chargement");
	var files = e.target.files;
	var i,f;
	for (i = 0; i != files.length; ++i){
		f = files[i];
		var reader = new FileReader();
		var name = f.name;
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook;
			if(rABS) {
                /* if binary string, read with type 'binary' */

                    workbook = XLSX.read(data, {type: 'binary'});
					
					var first_sheet_name = workbook.SheetNames[0];
					
					/* Get worksheet */
					var worksheet = workbook.Sheets[first_sheet_name];
					
					tab = XLSX.utils.sheet_to_json(worksheet, {header:0});
					

                //console.table(tab);


			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
            }// DO SOMETHING WITH workbook HERE 
            
            document.getElementById("selectionPHS").style.display = "none";
            $("main").remove();


            writeDataTable(tab);

		};
			 reader.readAsBinaryString(f);
}


}



document.getElementById("inputPHS").addEventListener('change', handleXLSFile, false);