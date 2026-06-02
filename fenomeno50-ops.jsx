import { useState } from "react";

const FOTOS={
  "3":"./images/3.jpg",
  "6":"./images/6.jpg",
  "14":"./images/14.jpg",
  "16":"./images/16.jpg",
  "17":"./images/17.jpg",
  "18":"./images/18.jpg",
  "19":"./images/19.jpg",
  "20":"./images/20.jpg",
  "31":"./images/31.jpg",
  "32":"./images/32.jpg",
  "33":"./images/33.jpg",
  "34":"./images/34.jpg",
  "35":"./images/35.jpg",
  "36":"./images/36.jpg",
  "37":"./images/37.jpg",
  "38":"./images/38.jpg",
  "43":"./images/43.jpg",
  "44":"./images/44.jpg",
  "45":"./images/45.jpg",
  "46":"./images/46.jpg",
  "47":"./images/47.jpg",
  "50":"./images/50.jpg",
  "52":"./images/52.jpg",
  "53":"./images/53.jpg",
  "54":"./images/54.jpg",
  "55":"./images/55.jpg",
  "56":"./images/56.jpg",
  "57":"./images/57.jpg",
  "58":"./images/58.jpg",
  "59":"./images/59.jpg",
  "60":"./images/60.jpg",
  "61":"./images/61.jpg",
  "62":"./images/62.jpg",
  "63":"./images/63.jpg",
  "64":"./images/64.jpg",
  "65":"./images/65.jpg",
  "66":"./images/66.jpg",
  "67":"./images/67.jpg",
  "68":"./images/68.jpg",
  "69":"./images/69.jpg",
  "70":"./images/70.jpg",
  "71":"./images/71.jpg",
  "72":"./images/72.jpg",
  "73":"./images/73.jpg",
  "74":"./images/74.jpg",
  "75":"./images/75.jpg",
  "76":"./images/76.jpg",
  "77":"./images/77.jpg",
  "80":"./images/80.jpg",
  "82":"./images/82.jpg",
  "83":"./images/83.jpg",
  "88":"./images/88.jpg",
  "90":"./images/90.jpg",
  "91":"./images/91.jpg",
  "92":"./images/92.jpg",
  "93":"./images/93.jpg",
  "94":"./images/94.jpg",
  "95":"./images/95.jpg",
  "96":"./images/96.jpg",
  "97":"./images/97.jpg",
  "98":"./images/98.jpg",
  "99":"./images/99.jpg",
  "100":"./images/100.jpg",
  "101":"./images/101.jpg",
  "102":"./images/102.jpg",
  "103":"./images/103.jpg",
  "104":"./images/104.jpg",
  "105":"./images/105.jpg",
  "106":"./images/106.jpg",
  "107":"./images/107.jpg",
  "108":"./images/108.jpg",
  "109":"./images/109.jpg",
  "110":"./images/110.jpg",
  "111":"./images/111.jpg",
  "112":"./images/112.jpg",
  "113":"./images/113.jpg",
  "114":"./images/114.jpg",
  "115":"./images/115.jpg",
  "116":"./images/116.jpg",
  "117":"./images/117.jpg",
  "118":"./images/118.jpg",
  "119":"./images/119.jpg",
  "120":"./images/120.jpg",
  "121":"./images/121.jpg",
  "122":"./images/122.jpg",
  "123":"./images/123.jpg",
  "124":"./images/124.jpg",
};
const ITEMS=[{"id":1,"ano":1990,"ato":"ato1","item":"Medalha Artilheiro — Campeonato Metropolitano","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Top Scorer Medal — Metropolitan Championship"},{"id":2,"ano":1991,"ato":"ato1","item":"Medalha Artilheiro — Copa C.B.I.A.","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Top Scorer Medal — C.B.I.A. Cup"},{"id":3,"ano":1991,"ato":"ato1","item":"Medalha 2° Artilheiro Infantil — São Cristóvão","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"2nd Youth Top Scorer Medal — São Cristóvão"},{"id":4,"ano":1991,"ato":"ato1","item":"Medalha Artilheiro — Copa Funabem","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Top Scorer Medal — Funabem Cup"},{"id":5,"ano":1993,"ato":"ato1","item":"Santinho autografado pelo Zico","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Seu Nélio","imp":true,"item_en":"Prayer card autographed by Zico"},{"id":6,"ano":1993,"ato":"ato1","item":"Troféu 'Fato do Ano 93' — Cruzeiro","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"ÚNICO NO MUNDO","item_en":"'Story of the Year 93' Trophy — Cruzeiro","nota_en":"ONE OF A KIND IN THE WORLD"},{"id":7,"ano":1993,"ato":"ato1","item":"Medalha Recopa Sudamericana — Cruzeiro","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Recopa Sudamericana Medal — Cruzeiro"},{"id":82,"ano":null,"ato":"ato1","item":"Medalha 'Club do Gusi' — Artilheiro (infância)","temos":true,"ok":true,"caixa":null,"col":"Rn","nota":"Torneio a identificar","item_en":"'Club do Gusi' Medal — Top Scorer (childhood)","nota_en":"Tournament to be identified"},{"id":8,"ano":1994,"ato":"ato2","item":"Medalha Ouro Copa do Mundo 1994 — Tetra","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"1994 World Cup Gold Medal — Tetra"},{"id":9,"ano":1994,"ato":"ato2","item":"Credencial Oficial Copa 1994","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Official 1994 World Cup Credential"},{"id":10,"ano":1994,"ato":"ato2","item":"Kit Nike PSV + card ídolo Zico","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Zico","imp":true,"item_en":"Nike PSV kit + Zico idol card"},{"id":11,"ano":1994,"ato":"ato2","item":"Card PSV Eindhoven 1994–95 autografado","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"PSV Eindhoven 1994–95 card, autographed"},{"id":12,"ano":1995,"ato":"ato2","item":"Medalha Copa América 1995 — Prata","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"1995 Copa América Medal — Silver"},{"id":13,"ano":1995,"ato":"ato2","item":"Card PSV Eindhoven 1995–96","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"PSV Eindhoven 1995–96 card"},{"id":14,"ano":1996,"ato":"ato2","item":"Camisa Barcelona Titular 96–97 Kappa — Blaugrana","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"⚠ Catalogada como Away — é TITULAR. Conexão: ids 17/19/20","item_en":"Barcelona Home Jersey 96–97 Kappa — Blaugrana","nota_en":"⚠ Catalogued as Away — it is HOME. Linked: ids 17/19/20"},{"id":15,"ano":1996,"ato":"ato2","item":"Medalha Recopa Europeia — Barcelona","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"European Cup Winners' Cup Medal — Barcelona"},{"id":16,"ano":1996,"ato":"ato2","item":"FIFA World Player of the Year 1996","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"FIFA World Player of the Year 1996"},{"id":17,"ano":1997,"ato":"ato2","item":"Chuteira de Ouro Europeia Adidas-ESM 1996–97","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Troféu Adidas oficial. Placa confirmada: adidas · Ronaldo · Europe 1996/97 · ESM®. Chuteira Adidas Predator dourada sobre base de mármore cinza. Prêmio Adidas ESM (European Sports Media) ao artilheiro europeu da temporada — Ronaldo marcou 47 gols em 49 jogos pelo FC Barcelona.","item_en":"European Golden Boot Adidas-ESM 1996–97","nota_en":"1st edition. Confirm base inscription"},{"id":18,"ano":1997,"ato":"ato2","item":"Réplica UEFA Cup Winners Cup — Barcelona","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"UEFA Cup Winners' Cup Replica — Barcelona"},{"id":19,"ano":1997,"ato":"ato2","item":"Ballon d'Or 1997","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Zico","imp":true,"nota":"Maleta alumínio original","item_en":"Ballon d'Or 1997","nota_en":"Original aluminum case"},{"id":20,"ano":1997,"ato":"ato2","item":"FIFA World Player of the Year 1997","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"FIFA World Player of the Year 1997"},{"id":21,"ano":1997,"ato":"ato2","item":"Medalha Copa América 1997 — Ouro","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"1997 Copa América Medal — Gold"},{"id":22,"ano":1997,"ato":"ato2","item":"Medalha Copa das Confederações 1997","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"1997 Confederations Cup Medal"},{"id":23,"ano":1997,"ato":"ato2","item":"Camisa Inter de Milão emoldurada","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Inter Milan jersey, framed"},{"id":24,"ano":1997,"ato":"ato2","item":"Medalha UEFA Cup — Inter de Milão","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"UEFA Cup Medal — Inter Milan"},{"id":25,"ano":1998,"ato":"ato2","item":"Medalha Prata Copa 1998 — Paris","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Zico","imp":true,"item_en":"1998 World Cup Silver Medal — Paris"},{"id":26,"ano":1999,"ato":"ato2","item":"Medalha Copa América 1999 — Ouro","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"1999 Copa América Medal — Gold"},{"id":27,"ano":2000,"ato":"ato2","item":"Medalha Coppa Italia 1999–2000","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Coppa Italia Medal 1999–2000"},{"id":52,"ano":1994,"ato":"ato2","item":"Troféu Pres Service — Artilheiro Mineiro 1994","temos":true,"ok":true,"caixa":"RR1","col":"Rn","imp":true,"item_en":"Pres Service Trophy — Minas Gerais Top Scorer 1994"},{"id":53,"ano":1994,"ato":"ato2","item":"Atleta do Centenário — Sec. Municipal Esportes","temos":true,"ok":false,"caixa":"RR1","col":"Rn","dano":"Desgaste dourado","item_en":"Athlete of the Centenary — Municipal Sports Dept.","dano_en":"Gold finish worn"},{"id":54,"ano":1995,"ato":"ato2","item":"Nacht der Vedetten — Eindhoven 1995","temos":true,"ok":true,"caixa":"RR1","col":"Rn","item_en":"Nacht der Vedetten — Eindhoven 1995"},{"id":55,"ano":1996,"ato":"ato2","item":"Homenagem Centro de Futebol — Lisboa 1996","temos":true,"ok":true,"caixa":"RR1","col":"Rn","item_en":"Football Center Tribute — Lisbon 1996"},{"id":56,"ano":1996,"ato":"ato2","item":"Club Barça Jove Sport — Los Mejores del 96","temos":true,"ok":true,"caixa":"RR1","col":"Rn","item_en":"Club Barça Jove Sport — Best of '96"},{"id":57,"ano":1996,"ato":"ato2","item":"La Cadena COPE — Mejor Jugador Extranjero 96/97","temos":true,"ok":true,"caixa":"RR3","col":"Rn","imp":true,"item_en":"La Cadena COPE — Best Foreign Player 96/97"},{"id":58,"ano":1997,"ato":"ato2","item":"Brasil World Tour Japan — Nike Japan 1997","temos":true,"ok":true,"caixa":"RR2","col":"Rn","item_en":"Brazil World Tour Japan — Nike Japan 1997"},{"id":59,"ano":1997,"ato":"ato2","item":"千里明杯 97 — Melhor Atleta Mundo (China)","temos":true,"ok":true,"caixa":"RR2","col":"Rn","item_en":"千里明杯 97 — World's Best Athlete (China)"},{"id":60,"ano":1998,"ato":"ato2","item":"UEFA Best Forward 1997/98 — Monaco","temos":true,"ok":false,"caixa":"RR1","col":"Rn","imp":true,"dano":"Disco de vidro solto","item_en":"UEFA Best Forward 1997/98 — Monaco","dano_en":"Glass disc loose"},{"id":61,"ano":1998,"ato":"ato2","item":"UEFA Most Valuable Player 1997/98 — Monaco","temos":true,"ok":false,"caixa":"RR1","col":"Rn","imp":true,"dano":"Disco amarelado","item_en":"UEFA Most Valuable Player 1997/98 — Monaco","dano_en":"Disc yellowed"},{"id":62,"ano":1998,"ato":"ato2","item":"Tuttosport — Placa Comemorativa Edição Nº 1","temos":true,"ok":true,"caixa":"RR1","col":"Rn","item_en":"Tuttosport — Commemorative Plaque Issue No. 1"},{"id":63,"ano":1998,"ato":"ato2","item":"Réplica Coupe UEFA — Inter · Paris 1998","temos":true,"ok":false,"caixa":"RR2","col":"Rn","dano":"Oxidação significativa","item_en":"UEFA Cup Replica — Inter · Paris 1998","dano_en":"Significant oxidation"},{"id":64,"ano":1998,"ato":"ato2","item":"Hall of Fame del Calcio Italiano — FIGC","temos":true,"ok":false,"caixa":"RR2","col":"Rn","imp":true,"dano":"Base separada do corpo","item_en":"Italian Football Hall of Fame — FIGC","dano_en":"Base detached from body"},{"id":65,"ano":1998,"ato":"ato2","item":"Hong Kong City of Life — Cristal comemorativo","temos":true,"ok":true,"caixa":"RR2","col":"Rn","item_en":"Hong Kong City of Life — commemorative crystal"},{"id":78,"ano":1994,"ato":"ato2","item":"Nike Premier Preta — 1ª chuteira Nike (PSV)","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"Black Nike Premier — first Nike boots (PSV)"},{"id":80,"ano":1999,"ato":"ato2","item":"Chuteira Nike Mercurial — época 1ª lesão Inter","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Confirmar par com id:81","item_en":"Nike Mercurial boots — era of 1st Inter injury","nota_en":"Confirm pair with id:81"},{"id":28,"ano":2002,"ato":"ato3","item":"Chuteiras Nike Mercurial Amarelas — Final Yokohama","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Felipão","imp":true,"nota":"PEÇA ÂNCORA · Coleção Ronaldo · Chuteiras da FINAL 2002 Yokohama (Brasil 2x0 Alemanha). DISTINTAS das chuteiras de Gustavo (id:89 = Copa 2006). São dois momentos curatoriais diferentes: id:28 → ATO 3 (Penta), id:89 → ATO 4 (maior artilheiro Copa).","item_en":"Yellow Nike Mercurial boots — Yokohama Final","nota_en":"ANCHOR PIECE. Original turf + 2006 ticket"},{"id":29,"ano":2002,"ato":"ato3","item":"Medalha Ouro Copa 2002 — Penta","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"2002 World Cup Gold Medal — Penta"},{"id":30,"ano":2002,"ato":"ato3","item":"Réplica FIFA Copa 2002 — exclusiva jogadores","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"2002 World Cup FIFA Replica — players exclusive"},{"id":31,"ano":2002,"ato":"ato3","item":"FIFA World Player 2002 — nome RONALDO gravado","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"FIFA World Player 2002 — RONALDO engraved"},{"id":32,"ano":2002,"ato":"ato3","item":"Ballon d'Or 2002","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Maleta alumínio original. 2 Ballons d'Or juntos = raríssimo","item_en":"Ballon d'Or 2002","nota_en":"Original aluminum case. 2 Ballons d'Or together = extremely rare"},{"id":33,"ano":2002,"ato":"ato3","item":"Camisa Seleção Brasileira Away Azul Copa 2002","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Brazil National Team Away Jersey, Blue, 2002 World Cup"},{"id":34,"ano":2002,"ato":"ato3","item":"Chuteira de Ouro Copa 2002 — artilheiro 8 gols","temos":true,"ok":false,"caixa":null,"col":"Rn","carta":"Beckham","imp":true,"nota":"Troféu FIFA oficial. Placa confirmada: FIFA World Cup Korea/Japan 2002 Ronaldo. Chuteira Adidas dourada sobre mármore negro. DANO: base com rachaduras, peça tombada.","item_en":"2002 World Cup Golden Boot — top scorer, 8 goals","nota_en":"RECEIVED from Ronald. Plaque: FIFA World Cup Korea/Japan 2002 · Ronaldo. Black marble base.","dano":"Base de mármore com rachaduras. Chuteira tombada — verificar restauração."},{"id":66,"ano":2002,"ato":"ato3","item":"IstoÉ — Brasileiro do Ano 2002","temos":true,"ok":false,"caixa":"RR3","col":"Rn","dano":"Placa solta","item_en":"IstoÉ — Brazilian of the Year 2002","dano_en":"Plaque loose"},{"id":67,"ano":2002,"ato":"ato3","item":"Prêmio Brasil Olímpico 2002 — Hors Concours","temos":true,"ok":true,"caixa":"RR3","col":"Rn","item_en":"Brazil Olympic Award 2002 — Hors Concours"},{"id":79,"ano":2002,"ato":"ato3","item":"Camisa Seleção Titular Amarela Final 2002 — autografada","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Distinto do id:33 (away azul)","item_en":"Brazil Home Jersey, Yellow, 2002 Final — autographed","nota_en":"Distinct from id:33 (blue away)"},{"id":81,"ano":2002,"ato":"ato3","item":"Chuteira Nike Mercurial Preta — Copa 2002 autografada","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Confirmar par com id:80","item_en":"Black Nike Mercurial boots — 2002 World Cup, autographed","nota_en":"Confirm pair with id:80"},{"id":35,"ano":2002,"ato":"ato4","item":"Medalha Copa Intercontinental FIFA 2002","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"FIFA Intercontinental Cup Medal 2002"},{"id":36,"ano":2003,"ato":"ato4","item":"Man of the Match — HK vs Real Madrid 2003","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Man of the Match — HK vs Real Madrid 2003"},{"id":37,"ano":2003,"ato":"ato4","item":"Supercopa de España 2003 — Real Madrid","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"Spanish Super Cup 2003 — Real Madrid"},{"id":38,"ano":2003,"ato":"ato4","item":"Trofeo EFE — Melhor Ibero-americano 2002–03","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"item_en":"Trofeo EFE — Best Ibero-American 2002–03"},{"id":40,"ano":2003,"ato":"ato4","item":"Nike R9 Laranja/Preto autografada","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Beckham","imp":true,"item_en":"Nike R9 Orange/Black, autographed"},{"id":41,"ano":2003,"ato":"ato4","item":"Nike R9 Dourada autografada","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Beckham","imp":true,"item_en":"Nike R9 Gold, autographed"},{"id":42,"ano":2003,"ato":"ato4","item":"Nike Mercurial Prata/Azul/Verde autografada","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Nike Mercurial Silver/Blue/Green, autographed"},{"id":43,"ano":2006,"ato":"ato4","item":"Chuteira de Bronze Copa 2006 — recorde 15 gols","temos":true,"ok":null,"caixa":null,"col":"Rn","carta":"Beckham","imp":true,"nota":"Troféu FIFA oficial — Chuteira Adidas Predator em bronze sobre mármore negro. Placa: FIFA World Cup Germany 2006. Ronaldo: 3 gols na Copa, 15 gols no total — recorde histórico quebrando Gerd Müller. Sala Memorabília · PDF #04.","item_en":"2006 World Cup Bronze Boot — record 15 goals","nota_en":"In negotiation"},{"id":44,"ano":2009,"ato":"ato4","item":"Faixa Campeão Paulistão 2009 — Corinthians invicto","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"2009 Paulistão Champion Sash — Corinthians unbeaten"},{"id":45,"ano":2009,"ato":"ato4","item":"Nike Tiempo Legend R9 Preto/Amarelo — filhos bordados","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"PAR ÚNICO — Ronald + Maria Sophia","item_en":"Nike Tiempo Legend R9 Black/Yellow — children's names embroidered","nota_en":"UNIQUE PAIR — Ronald + Maria Sophia"},{"id":46,"ano":2010,"ato":"ato4","item":"Nike Tiempo Legend III Roxo/Laranja — Corinthians","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"PAR ÚNICO — Ronald + Maria Sophia","item_en":"Nike Tiempo Legend III Purple/Orange — Corinthians","nota_en":"UNIQUE PAIR — Ronald + Maria Sophia"},{"id":47,"ano":2009,"ato":"ato4","item":"Conjunto Copa do Brasil emoldurado — Corinthians","temos":true,"ok":true,"caixa":null,"col":"G","item_en":"Copa do Brasil framed set — Corinthians"},{"id":48,"ano":2018,"ato":"ato4","item":"Globe Soccer Awards — Globo de Ouro","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Globe Soccer Awards — Golden Globe"},{"id":49,"ano":2025,"ato":"ato4","item":"Medalha Final Draw Copa 2026 — Washington D.C.","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"2026 World Cup Final Draw Medal — Washington D.C."},{"id":50,"ano":null,"ato":"ato4","item":"Camiseta Seleção Brasileira autografada por Pelé","temos":true,"ok":true,"caixa":null,"col":"Rn","carta":"Beckham","imp":true,"item_en":"Brazil National Team shirt autographed by Pelé"},{"id":68,"ano":2003,"ato":"ato4","item":"Trofeo Pichichi 2003/04 — Real Madrid (24 gols)","temos":true,"ok":false,"caixa":"RR3","col":"Rn","imp":true,"dano":"Oxidação severa","item_en":"Trofeo Pichichi 2003/04 — Real Madrid (24 goals)","dano_en":"Severe oxidation"},{"id":69,"ano":2001,"ato":"ato4","item":"Grand Prix Open Monza — 2nd Team (golfe)","temos":true,"ok":true,"caixa":"av","col":"Rn","item_en":"Grand Prix Open Monza — 2nd Team (golf)"},{"id":70,"ano":2001,"ato":"ato4","item":"Grand Prix Open Monte-Carlo — 1st Putting (golfe)","temos":true,"ok":true,"caixa":"av","col":"Rn","item_en":"Grand Prix Open Monte-Carlo — 1st Putting (golf)"},{"id":71,"ano":2010,"ato":"ato4","item":"Prêmio Craque Brasileirão 2010 — CBF","temos":true,"ok":true,"caixa":"av","col":"Rn","item_en":"Brasileirão Player Award 2010 — CBF"},{"id":72,"ano":null,"ato":"ato4","item":"Bola FIFA Approved — Autógrafos Múltiplos","temos":true,"ok":true,"caixa":"av","col":"Rn","nota":"Identificar autógrafos","item_en":"FIFA Approved Ball — Multiple Autographs","nota_en":"Identify autographs"},{"id":73,"ano":null,"ato":"ato4","item":"Réplica FC Barcelona Campió de Lliga 1991-92","temos":true,"ok":false,"caixa":"av","col":"Rn","dano":"Oxidação","item_en":"FC Barcelona League Champion Replica 1991-92","dano_en":"Oxidation"},{"id":74,"ano":null,"ato":"ato4","item":"Troféu da Concha — espanhol (fã-clube/gala)","temos":true,"ok":true,"caixa":"av","col":"Rn","nota":"NÃO é da infância","item_en":"Trophy of the Shell — Spanish (fan club/gala)","nota_en":"NOT from childhood"},{"id":75,"ano":null,"ato":"ato4","item":"Independiente del Valle — Placa","temos":true,"ok":true,"caixa":"av","col":"Rn","item_en":"Independiente del Valle — Plaque"},{"id":76,"ano":2012,"ato":"ato5","item":"Medida Certa — TV Globo / Fantástico 2012","temos":true,"ok":true,"caixa":null,"col":"Rn","item_en":"Medida Certa — TV Globo / Fantástico 2012"},{"id":77,"ano":2018,"ato":"ato5","item":"BACC Global Goodwill Ambassador — Tiffany & Co.","temos":true,"ok":true,"caixa":"av","col":"Rn","item_en":"BACC Global Goodwill Ambassador — Tiffany & Co."},
{"id":83,"ano":1996,"ato":"ato2","item":"Camisa Barcelona Away 96-97 — Azul (padrão Barça)","item_en":"Barcelona Away 96-97 — Blue (Barça pattern)","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Away azul escuro com padrão Barça repetido no tecido. Kappa. Coleção Gustavo.","nota_en":"Third kit. Fabric with repeated Barca pattern. Kappa."},
{"id":84,"ano":2003,"ato":"ato4","item":"Camisa Real Madrid Titular Branca — autografada","item_en":"Real Madrid White Home Jersey — autographed","temos":true,"ok":true,"caixa":null,"col":"G","carta":"Beckham","imp":true,"nota":"Gola azul-acinzentada. Numero 9 tipografia circular. Com autografo.","nota_en":"Blue-grey collar. Circular number 9 font. With autograph."},
{"id":86,"ano":2004,"ato":"ato4","item":"Camisa Real Madrid Away — azul-escuro, patch La Liga","item_en":"Real Madrid Away Jersey — dark blue, La Liga patch","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Segundo uniforme azul-grafite com detalhes amarelos. Adidas. Patch La Liga oficial.","nota_en":"Away jersey blue-grey with yellow details. Adidas. Official La Liga patch."},
{"id":87,"ano":2003,"ato":"ato4","item":"Camisa Real Madrid Third Kit Preta — autografada + patch La Liga","item_en":"Real Madrid Black Third Kit — autographed + La Liga patch","temos":true,"ok":true,"caixa":null,"col":"G","carta":"Beckham","imp":true,"nota":"Kit preto com listras rosa. Patch La Liga. Com autografo.","nota_en":"Black kit with pink stripes. La Liga patch. With autograph."},
{"id":88,"ano":2002,"ato":"ato3","item":"Grama Original — Final Copa do Mundo 2002 · Yokohama","item_en":"Original Turf — 2002 World Cup Final · Yokohama","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Grama do campo · Estadio Internacional de Yokohama · Brasil 2x0 Alemanha · 30.06.2002. Display acrílico standalone. CURADORIA: ATO 3 (Penta). Peça distinta das chuteiras 2006 (id:89) e do ingresso 2006 (id:98).","nota_en":"Turf from International Stadium Yokohama — Brazil 2x0 Germany. Same display as 2006 boots (id:89)."},
{"id":89,"ano":2006,"ato":"ato4","item":"Chuteiras Nike Amarelas — Copa do Mundo 2006","item_en":"Yellow Nike Boots — 2006 World Cup","temos":true,"ok":true,"caixa":null,"col":"G","carta":"Beckham","imp":true,"nota":"Chuteiras autografadas usadas na Copa 2006 (Alemanha). CURADORIA: ATO 4 — copa em que Ronaldo tornou-se maior artilheiro da história com 15 gols. SEPARAR da grama 2002 (id:88) na curadoria — anos e narrativas distintos.","nota_en":"NOTE: 2006 WC boots (Germany), NOT 2002 Final. Autographed. Same display as 2002 Yokohama turf (id:88)."},
{"id":90,"ano":2004,"ato":"ato4","item":"Chuteira Nike — Real Madrid (cor bronze)","item_en":"Nike Boot — Real Madrid era (bronze color)","temos":true,"ok":true,"caixa":null,"col":"G","imp":false,"nota":"Boot de jogo cor bronze do periodo Real Madrid. DIFERENTE do id:43 (premio FIFA Copa 2006). Coleção Gustavo.","nota_en":"Identify: FIFA Bronze Boot award WC 2006 (id:43) or field boot in bronze?"},
{"id":91,"ano":2002,"ato":"ato2","item":"Chuteira Nike Cinza com Vermelho — Copa do Mundo 2002 (usada com Ronaldinho Gaúcho)","item_en":"Grey and Red Nike Boot — 2002 World Cup","temos":true,"ok":true,"caixa":null,"col":"G","imp":false,"nota":"CONFIRMADO: Chuteira cinza com vermelho usada na Copa 2002 (Korea/Japan). Foto referência: Ronaldo Fenômeno (#9) e Ronaldinho Gaúcho (#7). Coleção Gustavo.","nota_en":"Grey boot. Club and season to confirm."},
{"u":"alta","t":"id:88+89 — Grama 2002 e chuteiras 2006: confirmar mesmo colecionador"},
{"u":"alta","t":"id:90 — Chuteira Bronze: premio Copa 2006 (=id:43?) ou chuteira de campo?"},
{"u":"media","t":"ids 84-87 — Camisas Real Madrid: mapear temporadas exatas"},
{"u":"media","t":"id:91 — Chuteira cinza: identificar clube/temporada"},
{"u":"baixa","t":"Fotos ids 84-89: sem foto catalogada (somente id:14, 47, 83 tem foto)"},
{"id":93,"ano":1998,"ato":"ato2","item":"Chuteira Prata Nike — Inter de Milão","item_en":"Silver Nike Boot — Inter Milan","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Chuteira prata do periodo Inter de Milao (1997-2002). Colecao Gustavo. Confirmar temporada exata.","nota_en":"Silver boot from Inter Milan era (1997-2002). Gustavo collection. Confirm exact season."},
{"id":94,"ano":1998,"ato":"ato2","item":"Camisa Inter de Milão Branca — autografada","item_en":"Inter Milan White Jersey — autographed","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Camisa branca do Inter de Milao. Colecao Gustavo.","nota_en":"Inter Milan white jersey. Gustavo collection."},
{"id":95,"ano":2009,"ato":"ato4","item":"Camisa Corinthians — R9 nas costas (personalizada)","item_en":"Corinthians Jersey — R9 on back (personalized)","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Camisa do Corinthians com R9 nas costas (diferente do id:47 que tem RONALDO). Colecao Gustavo.","nota_en":"Corinthians jersey with R9 on back (different from id:47 which has RONALDO). Gustavo collection."},
{"id":96,"ano":2002,"ato":"ato3","item":"Chuteira Nike Dourada — Seleção Brasileira Copa 2002","item_en":"Gold Nike Boot — Brazil National Team 2002 World Cup","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Boot de jogo cor dourada usado pela Selecao. DIFERENTE da Chuteira de Ouro FIFA (id:34 que e o premio). Colecao Gustavo.","nota_en":"Gold-colored match boot worn for the national team. DIFFERENT from FIFA Golden Boot award (id:34). Gustavo collection."},
{"id":97,"ano":1995,"ato":"ato2","item":"Chuteira Nike Tiempo Preta — PSV Eindhoven","item_en":"Black Nike Tiempo Boot — PSV Eindhoven","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Chuteira Nike Tiempo preta do periodo PSV. DIFERENTE do id:78 (que e Nike Premier). Colecao Gustavo.","nota_en":"Black Nike Tiempo boot from PSV era. DIFFERENT from id:78 (which is Nike Premier). Gustavo collection."},
{"id":98,"ano":2006,"ato":"ato4","item":"Ingresso Original — Copa do Mundo 2006 · Alemanha","item_en":"Original Ticket — 2006 World Cup · Germany","temos":true,"ok":true,"caixa":null,"col":"G","imp":true,"nota":"Ingresso original da Copa 2006. CURADORIA: ATO 4 — junto com as chuteiras (id:89). SEPARAR da grama 2002 (id:88) que pertence ao ATO 3.","nota_en":"Original 2006 World Cup ticket. CURATION: ACT 4 — alongside boots (id:89). SEPARATE from 2002 turf (id:88) which belongs to ACT 3."},
// SALA MEMORABÍLIA — PDF 31 ITENS — JUN 2026
{"id":99,"ano":1995,"ato":"ato2","item":"Topscore — Voetballer van het Jaar 1995","item_en":"Topscore — Voetballer van het Jaar 1995","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Escultura em bronze jogador em chute sobre mármore. Jornal holandês De Telegraaf. Placa: TOPSCORE — Voetballer van het Jaar 1995. Primeiro reconhecimento europeu de Ronaldo, aos 18 anos, no PSV Eindhoven."},
{"id":100,"ano":1996,"ato":"ato2","item":"D'n Opkikker — Carnaval de Eindhoven 1996","item_en":"D'n Opkikker — Carnival of Eindhoven 1996","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Coluna dourada com esfera pátinada verde inscrita: CARNAVAL 1996 EINDHOVEN — d'n opkikker — Ronaldo. Prêmio cultural da cidade que o adotou."},
{"id":101,"ano":1997,"ato":"ato2","item":"Oscars du Football — UNFP/FIFPRO/Canal+ — Saison 1996/97","item_en":"Oscars du Football — UNFP/FIFPRO/Canal+ — Season 1996/97","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Prêmio francês dos sindicatos UNFP e FIFPRO em parceria com Canal+. Votado pelos próprios jogadores profissionais."},
{"id":102,"ano":1996,"ato":"ato2","item":"Jogador do Ano 1996 — Clube de Torcedores Italianos","item_en":"Player of the Year 1996 — Italian Supporters Club","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Prêmio de clube de torcedores italianos ao melhor jogador de 1996. O amor da torcida italiana que se aprofundaria nos anos de Internazionale."},
{"id":103,"ano":1997,"ato":"ato2","item":"Placa e Moeda — Inter Club Foligno 1997","item_en":"Plaque and Coin — Inter Club Foligno 1997","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Placa e moeda comemorativas do Inter Club Foligno, entregues logo após a chegada de Ronaldo ao Internazionale de Milão. Acolhimento dos torcedores nerazzurri."},
{"id":104,"ano":1998,"ato":"ato2","item":"Top 11 Sony — Campionato Italiano 1997/98","item_en":"Top 11 Sony — Italian Championship 1997/98","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Seleção dos 11 melhores do Campeonato Italiano patrocinada pela Sony. Ronaldo integrou o time ideal da Serie A."},
{"id":105,"ano":1998,"ato":"ato2","item":"Rana d'Oro 1998 — Inter Club Vercelli","item_en":"Rana d'Oro 1998 — Inter Club Vercelli","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Escultura de rã dourada sobre folha de lírio em mármore negro. Placa: RANA D'ORO 1998 — Ronaldo — Inter Club Vercelli — 14 Aprile 1999. Entregue após a Copa de 98 — a torcida premiou Ronaldo num dos momentos mais difíceis."},
{"id":106,"ano":1998,"ato":"ato2","item":"Bravo Sport — Bronzener Sieger der Otto-Wahl 1998","item_en":"Bravo Sport — Bronze Winner of the Otto-Wahl 1998","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Prêmio da revista alemã Bravo Sport. Bronzener Sieger = 3° colocado da votação de leitores jovens (Otto-Wahl). Popularidade de Ronaldo entre a juventude europeia."},
{"id":107,"ano":null,"ato":"ato2","item":"Il Migliore in Campo — Tele+ (Sem Data)","item_en":"Il Migliore in Campo — Tele+ (No Date)","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Placa da Tele+ (canal italiano de TV) para o melhor em campo. Sem data — possivelmente Serie A entre 1997 e 2002."},
{"id":108,"ano":2002,"ato":"ato2","item":"Il Migliore in Campo — Tele+ · Inter vs Piacenza 2001/02","item_en":"Il Migliore in Campo — Tele+ · Inter vs Piacenza 2001/02","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Placa da Tele+ para o melhor em campo · partida Inter vs Piacenza 2001/02. Jogo emblemático do retorno de Ronaldo após as lesões no joelho."},
{"id":109,"ano":2001,"ato":"ato2","item":"Ronaldo Sports Field Dedication — Nike World Headquarters 2001","item_en":"Ronaldo Sports Field Dedication — Nike World Headquarters 2001","temos":true,"ok":false,"caixa":null,"col":"Rn","imp":true,"nota":"Réplica da Vitória de Samotrácia em gesso sobre base de espelho. Gravado: Ronaldo Sports Field Dedication — April 10, 2001 — Nike World Headquarters. A asa está QUEBRADA — metáfora: entregue no ano de sua 2ª lesão devastadora.","dano":"Asa quebrada"},
{"id":110,"ano":2002,"ato":"ato3","item":"23rd Toyota Cup — Most Valuable Player 2002","item_en":"23rd Toyota Cup — Most Valuable Player 2002","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Placa bilíngue (japonês/inglês) da Toyota Motor Corporation. MVP — For reaching the ultimate goal — December 3rd, 2002. Real Madrid venceu o Olimpia do Paraguai."},
{"id":111,"ano":2002,"ato":"ato3","item":"Trans World Sport — Sportsman of the Year 2002","item_en":"Trans World Sport — Sportsman of the Year 2002","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Vaso de cristal lapidado gravado: TRANS WORLD SPORT'S SPORTSMAN OF THE YEAR 2002 — FOR REACHING THE ULTIMATE GOAL — Luiz Nazario de Lima Ronaldo."},
{"id":112,"ano":2018,"ato":"ato5","item":"Hall of Fame — FC Internazionale Milano 2018","item_en":"Hall of Fame — FC Internazionale Milano 2018","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Troféu em acrílico e espelho dourado com escudo da Inter. Base: RONALDO — ATTACCANTE/STRIKER — 2018. O Inter inseriu Ronaldo no Hall da Fama 16 anos após sua saída."},
{"id":113,"ano":null,"ato":"ato2","item":"Escultura Leão de São Marcos — Prefeitura de Veneza","item_en":"Lion of St. Mark Sculpture — City of Venice","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Leão Alado de São Marcos em bronze dourado sobre granito rosa. Placa: Il Sindaco di Venezia (O Prefeito de Veneza). Presente de Estado entregue diretamente pelo Prefeito."},
{"id":114,"ano":null,"ato":"ato4","item":"La Gran Noche del Deporte — El Mundo Deportivo","item_en":"La Gran Noche del Deporte — El Mundo Deportivo","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Troféu artístico em metal: anéis entrelaçados e chapéu de coco no topo, base de mármore negro. Prêmio do jornal esportivo espanhol El Mundo Deportivo."},
{"id":115,"ano":2005,"ato":"ato4","item":"Cámara de Comercio Brasil-España — Premio Élite Deportes 2005","item_en":"Brazil-Spain Chamber of Commerce — Premio Élite Deportes 2005","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Placa: por sus destacados valores deportivos y su inestimable contribución al conocimiento de Brasil y de España en el resto del mundo — Madrid, 24 de noviembre de 2005. Reconhecimento diplomático-esportivo."},
{"id":116,"ano":2004,"ato":"ato4","item":"Prêmio Especial 2004 — Globo Minas","item_en":"Special Award 2004 — Globo Minas","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Prêmio especial da TV Globo Minas. Homenagem da emissora mineira ao jogador que iniciou sua carreira no Cruzeiro — onde marcou 44 gols em 47 jogos antes de ir para a Europa."},
{"id":117,"ano":2014,"ato":"ato5","item":"Prato Comemorativo — Kuwait 2014","item_en":"Commemorative Plate — Kuwait 2014","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Prato decorativo com motivos árabes, entregue a Ronaldo em visita ao Kuwait em 2014. Após a aposentadoria, tornou-se figura de destaque em eventos internacionais incluindo países do Oriente Médio."},
{"id":118,"ano":null,"ato":"ato4","item":"Quadro — Sala de Trofeos del Real Madrid","item_en":"Frame — Real Madrid Trophy Room","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Quadro emoldurado com miniaturas 3D em metal de todos os troféus do Real Madrid. Título: La Sala de Trofeos del Real Madrid. Inclui Copas de Europa, Intercontinental, Copa da Liga e Copa del Rey."},
{"id":119,"ano":null,"ato":"ato4","item":"Brasão Entalhado — Ronaldo · Real Madrid","item_en":"Carved Crest — Ronaldo · Real Madrid","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Brasão do Real Madrid entalhado em madeira com o nome Ronaldo. Lembrança dos anos como Galáctico (2002-2007), quando marcou 104 gols em 177 jogos."},
{"id":120,"ano":null,"ato":"ato4","item":"Troféu Adidas Tango — Origem Desconhecida","item_en":"Adidas Tango Trophy — Unknown Origin","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Bola Adidas Tango em miniatura prateada sobre pedestal metálico. A Tango foi o design icônico dos anos 1980-90. Origem e contexto a identificar — possivelmente prêmio de artilharia ou parceria comercial."},
{"id":121,"ano":null,"ato":"ato4","item":"Bola Prateada — Possivelmente Trofeo Pichichi","item_en":"Silver Ball — Possibly Trofeo Pichichi","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Bola prateada decorativa sem placa de identificação visível. Possivelmente Trofeo Pichichi (artilheiro do Campeonato Espanhol) ou outra premiação de artilharia. Peça a identificar."},
{"id":122,"ano":2004,"ato":"ato4","item":"Adidas Predator Pulse Yin-Yang — Beckham Ed. Limitada 125/723","item_en":"Adidas Predator Pulse Yin-Yang — Beckham Limited Ed. 125/723","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Caixa de madeira preta que abre como cofre revelando dois pares Predator Pulse branco-vermelho. Placa: DAVID BECKHAM — STRENGTH IN SILENCE. Nº 125 de apenas 723 exemplares. Produzida quando Ronaldo e Beckham eram colegas nos Galácticos."},
{"id":123,"ano":null,"ato":"ato4","item":"Chuteira Nike Customizada — Estrelas Graffiti","item_en":"Custom Nike Boot — Stars Graffiti","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Chuteiras Nike prateadas com intervenção em graffiti colorido (amarelo, verde, rosa, vermelho) com estrelas pintadas. Exibidas em caixa acrílica. Peça de arte urbana única — artista e contexto a identificar."},
{"id":124,"ano":null,"ato":"ato4","item":"Molde Negativo das Chuteiras Nike Ronaldo","item_en":"Negative Mold of Ronaldo's Nike Boots","temos":true,"ok":true,"caixa":null,"col":"Rn","imp":true,"nota":"Dois moldes de alumínio com o negativo da sola das chuteiras R9 de Ronaldo, com assinatura gravada e URL www.nikestore.com. O molde do pé que marcou 15 gols em Copas do Mundo."}];
const CARTAS=[
  {id:"fachada",narrador:"Marcos Uchôa",papel:"Jornalista",tag:null,
   texto:`Ronaldinho. Ronaldo. Fenômeno.

Como uma carreira se transforma tanto assim?

De ser tratado de forma carinhosa a virar algo sinônimo de uma força da natureza?

Todos nós vamos aprendendo muito sobre o mundo através de histórias ouvidas quando éramos crianças. Histórias de príncipes, de guerreiros, de heróis. E nelas existe assim uma espécie de uma fórmula, de um padrão.

O herói nos é apresentado com suas virtudes. Mas tem um momento na vida dele em que ele sofre muito, que duvidam dele, que ele se abala com tanta coisa que dá errado.

Até que através de muita luta, perseverança, esforço, ele dá a volta por cima, triunfa e mostra o caminho de um final feliz.

É muito raro se ver isso na vida real.

Mas Ronaldo teve uma carreira onde aconteceu exatamente isso.

A admiração, a veneração que ele conquistou pelo mundo superam as conquistas dele no futebol. E foram muitas!

Ronaldo é um exemplo de coisas muito boas. O talento, os gols, as vitórias, os títulos, o bom humor, a humildade e algo tão brasileiro, o sorriso, nos mostram um mundo alegre, feliz.

Isso é Brasil. Isso é Ronaldo.`,texto_en:`Ronaldinho. Ronaldo. Fenômeno.

How does a career transform this much?

From being called by an affectionate nickname to becoming a synonym for a force of nature?

We all learn a great deal about the world through the stories we hear as children. Stories of princes, of warriors, of heroes. And in them there is a kind of formula, a pattern.

The hero is introduced to us with his virtues. But there comes a moment in his life when he suffers greatly, when he is doubted, when so much goes wrong that he is shaken to his core.

Until, through struggle, perseverance and effort, he rises again, triumphs, and shows the way to a happy ending.

It is very rare to see this in real life.

But Ronaldo had a career where exactly this happened.

The admiration, the reverence he earned around the world go beyond his achievements in football. And there were many!

Ronaldo is an example of very good things. The talent, the goals, the victories, the titles, the good humor, the humility, and something so Brazilian, the smile, they show us a joyful, happy world.

This is Brazil. This is Ronaldo.`,papel_en:"Journalist",tag_en:null},
  {id:"ato1",narrador:"Seu Nélio Nazário",papel:"Pai",tag:"Antes do mundo saber, ele já sabia.",
   texto:`Meu nome é Nélio. Sou o pai do Ronaldo.

Ele nasceu no dia 18 de setembro de 1976. Mas está escrito 22 na certidão. Eu demorei pra registrar e perdi o prazo. Até hoje o mundo comemora no dia errado. Coisa de pai.

Antes de virar Fenômeno, ele foi o caçula. Três filhos numa casa de Bento Ribeiro, uma TV que vivia quebrada. Eu trabalhava na Telerj, técnico de cabos. Final de semana ia pro camelô de Madureira pra fechar o mês.

O Ronaldo pedia vitamina, cuidava do que comia. Quando a Sônia chegava com as queimaduras, ele passava pomada nos braços dela, fazia carinho, e prometia que um dia ia tirar ela daquela vida. Cumpriu.

A gente não tinha quase nada. Mas ele tinha uma bola. E era só o que ele precisava.

Por volta dos 11 anos eu levei ele pra fazer teste no Valqueire Tênis Clube. A fila de ala estava lotada. A de pivô também. Aí ele foi pra fila do gol, porque era a menor. Passou no teste como goleiro. Pouco tempo depois mudou de posição. Virou o artilheiro do time.

Levei ele e o irmão na geral do Maracanã pra ver o Flamengo do Zico jogar. Um dia, na saída do estádio, o Ronaldo ficou esperando os jogadores na rua. Pediu autógrafos, ninguém quis dar atenção. Aí o Zico apareceu. O Ronaldo pegou um santinho que tinha caído no chão e estendeu pro Zico. O Zico parou, sorriu, conversou com ele e assinou.

Em 1993, com 16 anos, o Ronaldo estreou no Cruzeiro. Eu vi com meus olhos.`,texto_en:`My name is Nélio. I am Ronaldo's father.

He was born on September 18, 1976. But the birth certificate says the 22nd. I was late registering him and missed the deadline. To this day the world celebrates on the wrong day. A father's mistake.

Before he became the Fenômeno, he was the youngest. Three children in a house in Bento Ribeiro, a TV that was always broken. I worked at Telerj, a cable technician. On weekends I'd work the street market in Madureira to make ends meet.

Ronaldo asked for vitamins, watched what he ate. When Sônia came home with burns, he would rub ointment on her arms, comfort her, and promise that one day he'd take her out of that life. He did.

We had almost nothing. But he had a ball. And that was all he needed.

Around age 11 I took him to try out at Valqueire Tênis Clube. The line for wingers was full. So was the line for pivots. So he went to the line for goalkeeper, because it was the shortest. He passed the tryout as a goalkeeper. Soon after, he changed position. He became the team's top scorer.

I took him and his brother to the stands at the Maracanã to watch Zico's Flamengo play. One day, leaving the stadium, Ronaldo waited for the players out on the street. He asked for autographs, but no one paid attention. Then Zico appeared. Ronaldo picked up a little prayer card that had fallen on the ground and held it out to Zico. Zico stopped, smiled, talked with him, and signed it.

In 1993, at 16 years old, Ronaldo made his debut for Cruzeiro. I saw it with my own eyes.`,papel_en:"Father",tag_en:"Before the world knew, he already knew."},
  {id:"ato2",narrador:"Zico",papel:"Ídolo de infância, amigo pra vida",tag:"Na alegria e na tristeza.",
   texto:`Eu era o ídolo daquele garoto. Soube depois. Nunca poderia imaginar que daria um autógrafo pro futuro Fenômeno.

Aí em 1993 me chega um pivete magro do Cruzeiro fazendo 56 gols em 58 jogos como profissional. Tinha 16 anos.

Em 1994, com 17, foi pra Copa do Mundo nos Estados Unidos. Ficou no banco a Copa inteira. Voltou campeão sem ter pisado em campo.

Em 1996, com 20 anos, foi eleito o melhor jogador do mundo pela FIFA. Em 1997 ganhou de novo. Dessa vez com a Bola de Ouro junto. PSV, Barcelona, Inter. Tudo numa velocidade que ninguém viu antes.

E aí veio 1998.

Dia 12 de julho, em Paris, antes da final. Convulsão no quarto do hotel. Ninguém entendeu. Os médicos não entenderam. Ele jogou assim mesmo. Brasil perdeu de 3 a 0. Eu estava no banco, vendo aquilo.

Em novembro de 99, o joelho rompeu em Milão, contra o Lecce. Cinco meses depois, na final da Copa da Itália, rompeu de novo.

O mundo inteiro achou que era o fim.

Mas eu olhava pra aquele menino e sentia que um dia ainda ia ligar pra ele. E dizer: Você sabe o que você passou. E aí Deus te deu essa oportunidade. Eu não sabia quando. Só sabia que esse dia ia chegar.

Bastou um pra mostrar que não era.`,texto_en:`I was that boy's idol. I found out later. I could never have imagined I was giving an autograph to the future Fenômeno.

Then in 1993 this skinny kid from Cruzeiro shows up, scoring 56 goals in 58 games as a professional. He was 16 years old.

In 1994, at 17, he went to the World Cup in the United States. He sat on the bench the entire tournament. He came home a champion without ever setting foot on the pitch.

In 1996, at 20, he was named the best player in the world by FIFA. In 1997 he won it again. This time with the Ballon d'Or alongside it. PSV, Barcelona, Inter. All at a speed no one had ever seen before.

And then came 1998.

July 12, in Paris, before the final. A convulsion in the hotel room. No one understood. The doctors didn't understand. He played anyway. Brazil lost 3 to 0. I was on the bench, watching it all.

In November of '99, his knee gave out in Milan, against Lecce. Five months later, in the Italian Cup final, it gave out again.

The whole world thought it was the end.

But I looked at that boy and felt that one day I would still call him. And say: You know what you went through. And then God gave you this chance. I didn't know when. I only knew that day would come.

It took just one to show that it wasn't.`,papel_en:"Childhood idol, friend for life",tag_en:"In joy and in sorrow.",
   alerta:"⚠ Painel impresso tem '58 gols em 60 jogos' — FECHADO diz '56 gols em 58 jogos'. Confirmar com Zico."},
  {id:"ato3",narrador:"Luiz Felipe Scolari",papel:"Técnico do Penta",tag:"Faltava acreditar. Ele acreditou.",
   texto:`Tu é meu camisa 9. Titular. Não tem discussão.

Foi isso que eu falei pro Ronaldo em maio de 2002. Tinha gente na CBF que duvidava. Tinha jornalista escrevendo que era loucura. Ele tinha passado quase dois anos longe dos gramados, com o mesmo joelho operado três vezes. Eu pouco me importei.

Cheguei em Yokohama no dia 30 de junho. Final contra a Alemanha. No vestiário ele tava quieto, daquele jeito dele. Olhei nos olhos e disse: Joga sem medo. Hoje é teu dia.

Primeiro gol, o Rivaldo bateu, o Kahn deu rebote. Ele empurrou pro fundo.

Segundo gol, o corta-luz do Rivaldo. Ele dominou e mandou no canto.

Ele veio correndo pro banco. Gritou meu nome. Felipão! Pulou no meu pescoço. Eu vi de perto a cara de um homem que tinha voltado dos mortos.

Quatro anos antes, em Paris, eu tinha visto pela TV. Como todo brasileiro. Aquele garoto sentado no vestiário sem entender o que tinha acontecido no corpo dele.

Em 2002, foi diferente. Eu tava ali do lado. E quando ele veio correndo gritar meu nome, foi como se o Brasil inteiro tivesse voltado junto.

Eu assinei embaixo da maior virada do esporte brasileiro. E faria tudo de novo.

Depois daquilo, o Ronaldo virou outra coisa. Foi pro Real Madrid. Virou Galáctico. E aí já não era mais comigo.`,texto_en:`You're my number 9. Starter. No discussion.

That's what I told Ronaldo in May of 2002. There were people at the CBF who doubted it. There were journalists writing that it was madness. He had spent almost two years away from the pitch, with the same knee operated on three times. I couldn't have cared less.

I arrived in Yokohama on June 30. The final against Germany. In the locker room he was quiet, in that way of his. I looked him in the eyes and said: Play without fear. Today is your day.

First goal, Rivaldo struck it, Kahn spilled the rebound. He pushed it into the net.

Second goal, Rivaldo's dummy. He controlled it and placed it in the corner.

He came running to the bench. He shouted my name. Felipão! He jumped on my neck. Up close I saw the face of a man who had come back from the dead.

Four years earlier, in Paris, I had watched on TV. Like every Brazilian. That boy sitting in the locker room not understanding what had happened to his body.

In 2002, it was different. I was right there beside him. And when he came running to shout my name, it was as if all of Brazil had come back with him.

I signed my name to the greatest comeback in Brazilian sport. And I would do it all again.

After that, Ronaldo became something else. He went to Real Madrid. He became a Galáctico. And from then on, it was no longer with me.`,papel_en:"Coach of the Penta",tag_en:"All that was missing was belief. He believed."},
  {id:"ato4",narrador:"David Beckham",papel:"Companheiro de Real Madrid",tag:"Galácticos no estádio. Em casa, churrasco e guaraná.",
   texto:`O ídolo precisou virar homem.

Eu joguei com o Ronaldo no Real Madrid. Quando cheguei, em 2003, levei um tempo pra me adaptar. A Espanha era outra língua, outra cultura, um novo lugar pra mim e pra minha família chamar de casa. Foi o Ronaldo quem me acolheu e ajudou a todos nós. Aquele sorriso, a mesma alegria simples de sempre, sem pose de estrela. Ele nos chamava pra um churrasco, me ensinou a tomar guaraná, me apresentou o Brasil dentro da Espanha, ajudou minha família a se ambientar.

Galácticos: Zidane, Figo, Roberto Carlos, Raúl, ele e eu. Um vestiário cheio de Bolas de Ouro. E o jogador mais difícil de marcar de todos era o brasileiro. Eu jogava ao lado dele e ainda parava pra vê-lo jogar.

Em 2006 ele foi pra Alemanha. Em 2002 tinha sido o artilheiro da Copa com 8 gols e levado a Chuteira de Ouro. Em 2006 se tornou o maior artilheiro da história das Copas do Mundo, com 15 gols. A Chuteira de Bronze no bolso.

Em 2007 ele foi para o Milan. Em fevereiro de 2008, contra o Livorno, o tendão patelar do joelho esquerdo rompeu. A terceira lesão grave em dez anos. Liguei pra ele naquela noite. Ele atendeu rindo. Disse: Eu vou voltar.

E voltou. Foi para o Corinthians em 2009 e foi campeão aos 32 anos, jogando com o joelho enfaixado. Em fevereiro de 2011 ele anunciou a aposentadoria, em lágrimas, na televisão.

Eu chorei assistindo de casa.

Somos amigos para a vida toda. Vivemos uma bela história dentro e fora de campo, e seguimos vivendo. Tudo o que passamos juntos fica comigo para sempre.

Ronaldo é o jogador mais completo que eu já vi. Mas o que eu mais admiro é o homem.`,texto_en:`The idol had to become a man.

I played with Ronaldo at Real Madrid. When I arrived, in 2003, it took me a while to adapt. Spain was another language, another culture, a new place for me and my family to call home. It was Ronaldo who welcomed me and helped us all. That smile, the same simple joy as always, no star attitude. He invited us over for a barbecue, taught me to drink guaraná, introduced me to Brazil within Spain, helped my family settle in.

Galácticos: Zidane, Figo, Roberto Carlos, Raúl, him and me. A locker room full of Ballon d'Ors. And the hardest player of all to mark was the Brazilian. I played alongside him and still stopped to watch him play.

In 2006 he went to Germany. In 2002 he had been the World Cup's top scorer with 8 goals and won the Golden Boot. In 2006 he became the all-time top scorer in World Cup history, with 15 goals. The Bronze Boot in his pocket.

In 2007 he went to Milan. In February 2008, against Livorno, the patellar tendon of his left knee ruptured. The third serious injury in ten years. I called him that night. He answered laughing. He said: I'm going to come back.

And he came back. He went to Corinthians in 2009 and was a champion at 32, playing with his knee bandaged. In February 2011 he announced his retirement, in tears, on television.

I cried watching from home.

We are friends for life. We lived a beautiful story on and off the pitch, and we keep living it. Everything we went through together stays with me forever.

Ronaldo is the most complete player I have ever seen. But what I admire most is the man.`,papel_en:"Real Madrid teammate",tag_en:"Galácticos at the stadium. At home, barbecue and guaraná."},
  {id:"ato5",narrador:"Dona Sônia",papel:"Mãe",tag:"Deu à luz ao Ronaldo. E foi a razão do Fenômeno existir.",
   texto:`Eu sou a Sônia. Sou a mãe do Ronaldo.

Quando ele parou de jogar, em 2011, eu pensei que finalmente ele ia descansar. Achei que tinha acabado. Não tinha acabado nada. O Ronaldo nunca soube ficar parado.

Em 2018 comprou um clube na Espanha. Em 2022 voltou pro Cruzeiro, onde tudo começou. Em 2023 casou com a Celina em Ibiza. Deixou a marca dele na forma de gerir o futebol. Virou CEO, produtor, investidor. Se apaixonou pelo tênis, se aventurou no surf. E segue assim, sempre aprendendo, sempre se reinventando.

E no meio disso tudo, ele continuou sendo o meu filho.

A gente viveu muita coisa boa e muita coisa difícil. Vi ele ser xingado pelo mundo num dia e amado pelo mundo no outro. Sempre se levantou. Sempre voltou. Sempre rindo de alguma coisa.

O que mais me orgulha não está em nenhum título ou prêmio que vocês viram aqui. O que mais me orgulha é o tipo de pessoa que ele é.

O Ronaldo é simples. Sabe juntar gente. Os amigos da infância nunca saíram da mesa dele. Os amigos do futebol entraram. Os amigos do mundo todo entraram. Presidente, pedreiro, jogador, jornalista, vizinho. Todo mundo cabe. Ele é assim, agregador, generoso, de coração aberto. Festa do Ronaldo é mesa grande. Sempre foi, e continua sendo.

Lutou pelos dele a vida inteira. Quando o primeiro dinheiro chegou, cuidou da família primeiro. Comprou casa pra mim, comprou casa pro pai dele, comprou casa pros irmãos, pagou estudo pros sobrinhos. Nunca esqueceu de ninguém.

E sempre olhou pra quem precisava. Nunca tolerou preconceito.

Um dia ele criou a Fundação Fenômenos. Já são 15 anos. Mais de 750 mil pessoas alcançadas, mais de 250 lideranças formadas.

Eu olho pra ele hoje e entendo: o Ronaldo nunca foi só meu. Ele é do povo. Sempre foi.

Cinquenta anos do meu menino.`,texto_en:`I am Sônia. I am Ronaldo's mother.

When he stopped playing, in 2011, I thought he would finally rest. I thought it was over. Nothing was over. Ronaldo never knew how to sit still.

In 2018 he bought a club in Spain. In 2022 he returned to Cruzeiro, where it all began. In 2023 he married Celina in Ibiza. He left his mark on the way football is run. He became a CEO, a producer, an investor. He fell in love with tennis, took up surfing. And he keeps going, always learning, always reinventing himself.

And through all of it, he kept being my son.

We lived through much that was good and much that was hard. I saw him cursed by the world one day and loved by the world the next. He always got back up. He always came back. Always laughing about something.

What makes me proudest is not in any title or prize you've seen here. What makes me proudest is the kind of person he is.

Ronaldo is simple. He knows how to bring people together. His childhood friends never left his table. His football friends joined. Friends from all over the world joined. President, bricklayer, player, journalist, neighbor. There's room for everyone. That's how he is, a uniter, generous, open-hearted. A party at Ronaldo's means a big table. It always was, and it still is.

He fought for his people his whole life. When the first money came, he took care of his family first. He bought a house for me, a house for his father, houses for his brothers, paid for his nephews' education. He never forgot anyone.

And he always looked out for those in need. He never tolerated prejudice.

One day he created the Fenômenos Foundation. It's been 15 years now. More than 750,000 people reached, more than 250 leaders trained.

I look at him today and I understand: Ronaldo was never only mine. He belongs to the people. He always did.

Fifty years of my boy.`,papel_en:"Mother",tag_en:"She gave birth to Ronaldo. And she was the reason the Fenômeno exists."},
  {id:"encerramento",narrador:"Ronald, Alex, Maria Sophia e Maria Alice Nazário",papel:"Os filhos",tag:null,
   assinatura:"Com amor,\nRonald, Alex, Maria Sophia e Maria Alice Nazário",
   texto:`Crescer filho do Fenômeno é diferente. De um jeito que só a gente sabe.

Alex chegou um pouco depois na família. E quando chegou, meu pai botou a gente numa sala de videogame e falou: se conheçam aí, brinquem. E foi o que a gente fez. Rindo do que só irmão ri.

A gente não cresceu embaixo do mesmo teto. Mas fomos criados juntos. Tem uma cumplicidade entre nós que não precisa de explicação.

Videogame, anime, essas histórias de herói impossível sempre fizeram parte do universo dele. A gente não sabia, mas o universo game virou a semente de algo muito maior. Foi exatamente ali que nasceu a Rede Ronaldo. O que começou na sala de casa virou um universo inteiro. Isso que você acabou de ver é parte dele.

É muito bom ser filho dele. Quando estamos fora do Brasil e alguém descobre que somos brasileiros, as pessoas falam Ronaldo. E quando falamos que somos filhos, o impacto nos deixa completamente emocionados. O brilho nos olhos de quem descobre diz tudo.

A Dona Sônia já disse o que a gente sempre soube. A maior conquista do nosso pai não estava em nenhuma vitrine.

Estava no que ele nos ensinou sem precisar ensinar.

Que cair faz parte. Que levantar é a escolha. Que a velocidade não é um dom, é a resposta de quem recusou ficar parado.

Você sai dessa experiência levando isso. Não é a história dele que você carrega. É a sua.`,texto_en:`Growing up as the Fenômeno's child is different. In a way only we understand.

Alex came into the family a little later. And when he arrived, our father put us in a video game room and said: get to know each other in there, play. And that's what we did. Laughing the way only brothers laugh.

We didn't grow up under the same roof. But we were raised together. There's a closeness between us that needs no explanation.

Video games, anime, those impossible hero stories were always part of his world. We didn't know it, but the gaming universe became the seed of something much bigger. It was right there that Rede Ronaldo was born. What started in the living room became an entire universe. What you've just seen is part of it.

It's wonderful to be his child. When we're outside Brazil and someone finds out we're Brazilian, people say Ronaldo. And when we say we're his children, the impact leaves us completely moved. The light in the eyes of those who find out says it all.

Dona Sônia already said what we always knew. Our father's greatest achievement was never in any display case.

It was in what he taught us without needing to teach.

That falling is part of it. That getting back up is a choice. That speed is not a gift, it is the answer of someone who refused to stand still.

You leave this experience carrying that. It's not his story that you carry. It's your own.`,papel_en:"His children",tag_en:null},
];

const PENDENCIAS=[
  {u:"alta",  t:"id:43 — Chuteira de Bronze Copa 2006 · negociação em andamento"},
  {u:"alta",  t:"ATO 2 — painel impresso: '58 gols em 60 jogos' vs FECHADO '56 gols em 58 jogos'"},
  {u:"alta",  t:"ATO 1 — painel impresso tem 'lanchonete fritando hambúrguer' (excluído do FECHADO)"},
  {u:"media", t:"id:80+81 — 1 par ou 2 pares distintos?"},
  {u:"media", t:"id:51 — Chuteira Adidas de Ouro: Copa 2002 ou outro torneio?"},
  {u:"media", t:"id:82 — Medalha 'Club do Gusi': qual torneio da infância?"},
  {u:"baixa", t:"ids 61+62 — Camisetas VaporKnit: identificar todas as assinaturas"},
  {u:"baixa", t:"Legendas de parede (PT/EN) para itens do acervo: não escritas"},
  {u:"baixa", t:"Tradução do app para inglês: definir prioridade"},
];


const C={
  fachada:{cor:"#F5C518",label:"FACHADA",   label_en:"FACADE",   titulo:"A Entrada",          titulo_en:"The Entrance",       range:"Entrada · lado de fora",range_en:"Entrance · outside",emoji:"✨"},
  ato1:   {cor:"#3B82F6",label:"ATO 1",     label_en:"ACT 1",    titulo:"A Origem",            titulo_en:"The Origin",         range:"1976—1993",range_en:"1976—1993",emoji:"⚽"},
  ato2:   {cor:"#22C55E",label:"ATO 2",     label_en:"ACT 2",    titulo:"Ascensão e Queda",    titulo_en:"Rise and Fall",      range:"1993—2001",range_en:"1993—2001",emoji:"↗"},
  ato3:   {cor:"#F59E0B",label:"ATO 3",     label_en:"ACT 3",    titulo:"O Fenômeno",          titulo_en:"The Phenomenon",     range:"2002—2007",range_en:"2002—2007",emoji:"⭐"},
  ato4:   {cor:"#A855F7",label:"ATO 4",     label_en:"ACT 4",    titulo:"O Homem",             titulo_en:"The Man",            range:"2007—2011",range_en:"2007—2011",emoji:"👑"},
  ato5:   {cor:"#EC4899",label:"ATO 5",     label_en:"ACT 5",    titulo:"De Volta Pra Casa",   titulo_en:"Coming Home",        range:"2012—2026",range_en:"2012—2026",emoji:"🏠"},
  encerramento:{cor:"#06B6D4",label:"SAÍDA",label_en:"EXIT",     titulo:"Em Nome dos Irmãos",  titulo_en:"In the Name of the Siblings", range:"Encerramento · lado de fora",range_en:"Closing · outside",emoji:"💛"},
};

// Textos da interface PT/EN
const T={
  pt:{percurso:"{tr.percurso}",estacoes:"{tr.estacoes}",painelProduzir:"{tr.painelProduzir}",arteFinal:"ARTE FINAL",paineis:"painéis",painel:"painel",pecas:"peças",faltando:"faltando",textoParede:"texto de parede",emExibicao:"EM EXIBIÇÃO NESTE PAINEL",confirmadas:"confirmadas",semAcervo:"{tr.semAcervo}",percursoNav:"Percurso",semFoto:"Sem foto catalogada",citado:"Citado na carta",conf:"CONFERIR",tabs:[["expo","EXPOSIÇÃO"],["acervo","ACERVO"],["ops","OPS"]],subtitulo:"{tr.subtitulo}"},
  en:{percurso:"The visitor's journey, panel by panel. Each station has its wall text and the collection pieces that will be displayed there.",estacoes:"7 STATIONS · ENTRANCE → EXIT",painelProduzir:"PANEL IN PRODUCTION",arteFinal:"FINAL ART",paineis:"panels",painel:"panel",pecas:"pieces",faltando:"missing",textoParede:"wall text",emExibicao:"ON DISPLAY AT THIS PANEL",confirmadas:"confirmed",semAcervo:"Text panel — no physical collection at this station.",percursoNav:"Journey",semFoto:"No catalogued photo",citado:"Cited in the letter",conf:"CHECK",tabs:[["expo","EXHIBITION"],["acervo","COLLECTION"],["ops","OPS"]],subtitulo:"CASA REDE RONALDO · MIAMI 2026 · CONFIDENTIAL"},
};

// Quais painéis já têm arte final
const PANEL_OF={fachada:["painel_fachada"],ato1:["painel02"],ato2:["painel03","painel_2b","painel_2c"],ato3:["painel_3a","painel_3b"],ato4:["painel_4a"],ato5:["painel_5a"],encerramento:["painel_enc"]};
const PANEL_META={
  painel02:{sub:"A Origem · 1976—1993"},
  painel03:{sub:"Ascensão · Cruzeiro a Inter · 1993—1997"},
  painel_2b:{sub:"Inter de Milão · O Fenômeno · 1997—1998"},
  painel_2c:{sub:"A Queda · Paris 98 e as lesões · 1998—2001"},
  painel_fachada:{sub:"FENÔMENO 50 ANOS · Casa Rede Ronaldo · Miami · Copa do Mundo 2026"},
  painel_3a:{sub:"O Fenômeno · Penta, Real Madrid, 15 gols em Copas · 2002—2007"},
  painel_3b:{sub:"Galácticos · Beckham, Ronaldinho e a Seleção · 2003—2006"},
  painel_4a:{sub:"O Homem · Lesão Milan, Campeão Corinthians, Aposentadoria · 2007—2011"},
  painel_5a:{sub:"De Volta Pra Casa · Fundação Fenômenos, Valladolid, Cruzeiro, Casa Rede · 2012—2026"},
  painel_enc:{sub:"Em nome de nós, irmãos e irmãs · Ronald, Alex, Maria Alice, Maria Sophia"},
};

const ORDEM=["fachada","ato1","ato2","ato3","ato4","ato5","encerramento"];

function Lightbox({src,onClose}){
  if(!src)return null;
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:100,background:"rgba(0,0,0,.95)",display:"flex",alignItems:"center",justifyContent:"center",padding:12}}>
      <button onClick={onClose} style={{position:"absolute",top:12,right:12,width:34,height:34,borderRadius:"50%",background:"#333",border:"none",color:"#fff",fontSize:16,cursor:"pointer",fontWeight:700}}>✕</button>
      <img src={src} onClick={e=>e.stopPropagation()} style={{maxWidth:"100%",maxHeight:"90vh",objectFit:"contain",borderRadius:8}} />
    </div>
  );
}

function Badge({children,color,bg}){
  return <span style={{fontSize:10,fontWeight:700,color:color||"#888",background:bg||"#1A1A1A",padding:"2px 7px",borderRadius:6,whiteSpace:"nowrap"}}>{children}</span>;
}

function ItemRow({item,cor,expanded,onToggle,onPhoto,lang,tr}){
  const ausente=!item.temos, dano=item.ok===false;
  const bc=ausente?"#EF4444":dano?"#F97316":cor;
  const foto=FOTOS[String(item.id)];
  return(
    <div onClick={onToggle} style={{background:ausente?"#150505":"#111",borderRadius:10,marginBottom:5,border:`1px solid ${ausente?"#3A1010":"#1A1A1A"}`,borderLeft:`4px solid ${bc}`,cursor:"pointer",overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",padding:"10px 12px",gap:9}}>
        {foto
          ?<img src={foto} onClick={e=>{e.stopPropagation();onPhoto(foto);}} style={{width:34,height:34,borderRadius:5,objectFit:"cover",flexShrink:0,cursor:"zoom-in",opacity:ausente?.4:1}} />
          :<div style={{width:34,height:34,borderRadius:5,background:"#1A1A1A",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#2A2A2A"}}>📷</div>}
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontSize:12,fontWeight:600,color:ausente?"#555":"#CCC",lineHeight:1.3}}>{lang==="en"?(item.item_en||item.item):item.item}</div>
          <div style={{display:"flex",flexWrap:"wrap",gap:4,marginTop:4}}>
            {item.ano&&<span style={{fontSize:10,color:"#444"}}>{item.ano}</span>}
            {item.caixa&&<Badge>{"📦 "+item.caixa}</Badge>}
            {item.col==="Rn"&&<Badge color="#60A5FA" bg="#0A1830">Ronald</Badge>}
            {item.carta&&<Badge color="#A78BFA" bg="#1A0A30">{"✉ "+item.carta}</Badge>}
            {item.imp&&<Badge color="#F5C518" bg="#1A1300">⭐</Badge>}
            {ausente&&<Badge color="#EF4444" bg="#3A0A0A">FALTANDO</Badge>}
            {dano&&<Badge color="#F97316" bg="#2A1000">⚠ DANO</Badge>}
          </div>
        </div>
        <span style={{color:"#333",fontSize:12,flexShrink:0,transform:expanded?"rotate(180deg)":"none",transition:".2s"}}>▾</span>
      </div>
      {expanded&&(
        <div style={{background:"#0A0A0A",borderTop:"1px solid #1A1A1A",padding:"10px 12px"}}>
          {foto&&<img src={foto} onClick={e=>{e.stopPropagation();onPhoto(foto);}} style={{width:"100%",maxHeight:200,objectFit:"contain",borderRadius:6,marginBottom:8,cursor:"zoom-in",background:"#000"}} />}
          {!foto&&<div style={{fontSize:11,color:"#444",fontStyle:"italic",marginBottom:6}}>📷 {tr.semFoto}</div>}
          {item.dano&&<div style={{fontSize:12,color:"#F97316",fontWeight:600,marginBottom:4}}>🔧 {lang==="en"?(item.dano_en||item.dano):item.dano}</div>}
          {item.nota&&<div style={{fontSize:12,color:"#F5C518",fontStyle:"italic",marginBottom:4}}>ℹ {lang==="en"?(item.nota_en||item.nota):item.nota}</div>}
          {item.carta&&<div style={{fontSize:12,color:"#A78BFA"}}>✉ {tr.citado}: {item.carta}</div>}
          <div style={{fontSize:10,color:"#2A2A2A",marginTop:4}}>#{item.id}</div>
        </div>
      )}
    </div>
  );
}

export default function App(){
  const [view,setView]=useState("expo");
  const [lang,setLang]=useState("pt");
  const tr=T[lang];
  const [estacao,setEstacao]=useState(null);
  const [atoF,setAtoF]=useState("todos");
  const [subF,setSubF]=useState("all");
  const [caixaF,setCaixaF]=useState("all");
  const [exp,setExp]=useState(null);
  const [lb,setLb]=useState(null);

  const total=ITEMS.length, temos=ITEMS.filter(i=>i.temos).length;
  const faltam=ITEMS.filter(i=>!i.temos).length, danos=ITEMS.filter(i=>i.ok===false).length;

  // ===== ESTAÇÃO (detalhe do painel) =====
  if(estacao){
    const cfg=C[estacao]; const cor=cfg.cor;
    const carta=CARTAS.find(c=>c.id===estacao);
    const itens=ITEMS.filter(i=>i.ato===estacao);
    const painelKeys=PANEL_OF[estacao]||[];
    const idx=ORDEM.indexOf(estacao);
    const prev=idx>0?ORDEM[idx-1]:null, next=idx<ORDEM.length-1?ORDEM[idx+1]:null;
    return(
      <div style={{background:"#0A0A0A",minHeight:"100vh",color:"#fff",fontFamily:"-apple-system,sans-serif"}}>
        <Lightbox src={lb} onClose={()=>setLb(null)}/>
        <div style={{background:"#000",borderBottom:`1px solid ${cor}33`,padding:"12px 16px",display:"flex",alignItems:"center",gap:10,position:"sticky",top:0,zIndex:20}}>
          <button onClick={()=>setEstacao(null)} style={{background:`${cor}20`,border:`1px solid ${cor}40`,color:cor,borderRadius:8,padding:"5px 12px",fontSize:12,cursor:"pointer",fontWeight:700}}>← {tr.percursoNav}</button>
          <span style={{fontSize:11,color:cor,fontWeight:800,letterSpacing:2}}>{lang==="en"?cfg.label_en:cfg.label}</span>
          <span style={{fontSize:10,color:"#444"}}>{lang==="en"?cfg.range_en:cfg.range}</span>
          <div style={{marginLeft:"auto",display:"flex",gap:2,background:"#1A1A1A",borderRadius:7,padding:2}}>
            {["pt","en"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{padding:"3px 9px",borderRadius:5,fontSize:11,fontWeight:800,border:"none",cursor:"pointer",background:lang===l?cor:"transparent",color:lang===l?"#000":"#666"}}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div style={{padding:"0 0 90px"}}>
          {/* PAINÉIS no topo (sequência de artes ou pendente) */}
          {painelKeys.length>0?(
            <div style={{borderBottom:`2px solid ${cor}`}}>
              {painelKeys.map((pk,pi)=>(
                <div key={pk} onClick={()=>setLb(PANELS[pk])} style={{cursor:"zoom-in",position:"relative",borderBottom:pi<painelKeys.length-1?"1px solid #1A1A1A":"none"}}>
                  <img src={PANELS[pk]} style={{width:"100%",display:"block"}} />
                  <div style={{position:"absolute",top:10,left:10,background:"rgba(0,0,0,.7)",borderRadius:6,padding:"3px 8px",fontSize:10,color:"#22C55E",fontWeight:700}}>✅ {tr.arteFinal}</div>
                  {painelKeys.length>1&&<div style={{position:"absolute",top:10,right:10,background:"rgba(0,0,0,.7)",borderRadius:6,padding:"3px 8px",fontSize:10,color:cor,fontWeight:700}}>{pi+1}/{painelKeys.length}</div>}
                  {PANEL_META[pk]?.sub&&<div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,.85))",padding:"20px 12px 8px",fontSize:11,color:"#ddd",fontWeight:600}}>{PANEL_META[pk].sub}</div>}
                </div>
              ))}
            </div>
          ):(
            <div style={{margin:"16px",borderRadius:12,border:`2px dashed ${cor}44`,padding:"28px 16px",textAlign:"center",background:`${cor}08`}}>
              <div style={{fontSize:30,marginBottom:6}}>{cfg.emoji}</div>
              <div style={{fontSize:12,color:cor,fontWeight:700}}>{tr.painelProduzir}</div>
              <div style={{fontSize:11,color:"#555",marginTop:2}}>arte deste ato ainda não finalizada</div>
            </div>
          )}

          <div style={{padding:"20px 18px 0"}}>
            <div style={{fontSize:30,fontWeight:900,letterSpacing:-1,marginBottom:4}}>{lang==="en"?cfg.titulo_en:cfg.titulo}</div>
            {carta&&<><div style={{fontSize:14,color:cor,fontWeight:700}}>{carta.narrador}</div>
            <div style={{fontSize:12,color:"#555",fontStyle:"italic",marginBottom:18}}>{lang==="en"?carta.papel_en:carta.papel}</div></>}

            {/* TEXTO DE PAREDE (carta) */}
            {carta&&<>
              <div style={{fontSize:10,color:"#444",letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>✉ {tr.textoParede.toUpperCase()}</div>
              {(lang==="en"?carta.texto_en:carta.texto).split(/\n\n/).map((p,i)=>(
                <p key={i} style={{fontSize:15,lineHeight:1.8,color:"#C8C8C8",marginBottom:16,fontFamily:"Georgia,serif"}}>{p}</p>
              ))}
              <div style={{marginTop:20,paddingTop:14,borderTop:`1px solid ${cor}33`}}>
                {carta.assinatura
                  ?<pre style={{fontFamily:"Georgia,serif",fontSize:14,color:"#fff",fontWeight:700,lineHeight:1.6,whiteSpace:"pre-wrap"}}>{carta.assinatura}</pre>
                  :<div style={{fontSize:15,color:"#fff",fontWeight:700}}>{carta.narrador.toUpperCase()}</div>}
                {(lang==="en"?carta.tag_en:carta.tag)&&<div style={{marginTop:8,fontSize:14,color:cor,fontStyle:"italic",fontWeight:600}}>"{lang==="en"?carta.tag_en:carta.tag}"</div>}
              </div>
              {carta.alerta&&<div style={{marginTop:16,padding:"10px 14px",background:"#1A0A00",borderRadius:8,borderLeft:"3px solid #F59E0B"}}><div style={{fontSize:12,color:"#F59E0B"}}>{carta.alerta}</div></div>}
            </>}

            {/* ITENS EM EXIBIÇÃO NESTE PAINEL */}
            {itens.length>0&&(
              <div style={{marginTop:32}}>
                <div style={{fontSize:10,color:cor,letterSpacing:2,textTransform:"uppercase",marginBottom:4,fontWeight:700}}>🏛 {tr.emExibicao}</div>
                <div style={{fontSize:12,color:"#555",marginBottom:12}}>{itens.length} {tr.pecas} · {itens.filter(i=>i.temos).length} {tr.confirmadas}{itens.filter(i=>!i.temos).length>0?` · ${itens.filter(i=>!i.temos).length} ${tr.faltando}`:""}</div>
                {itens.map(item=>(
                  <ItemRow key={item.id} item={item} cor={cor} expanded={exp===item.id} onToggle={()=>setExp(exp===item.id?null:item.id)} onPhoto={setLb} lang={lang} tr={tr}/>
                ))}
              </div>
            )}
            {itens.length===0&&<div style={{marginTop:24,fontSize:12,color:"#444",fontStyle:"italic"}}>{tr.semAcervo}</div>}
          </div>

          {/* NAV percurso */}
          <div style={{display:"flex",gap:8,padding:"24px 16px 0"}}>
            {prev&&<button onClick={()=>{setEstacao(prev);setExp(null);window.scrollTo(0,0);}} style={{flex:1,padding:12,borderRadius:10,background:"#111",border:`1px solid ${C[prev].cor}40`,color:C[prev].cor,fontSize:12,fontWeight:700,cursor:"pointer"}}>← {lang==="en"?C[prev].label_en:C[prev].label}</button>}
            {next&&<button onClick={()=>{setEstacao(next);setExp(null);window.scrollTo(0,0);}} style={{flex:1,padding:12,borderRadius:10,background:"#111",border:`1px solid ${C[next].cor}40`,color:C[next].cor,fontSize:12,fontWeight:700,cursor:"pointer"}}>{lang==="en"?C[next].label_en:C[next].label} →</button>}
          </div>
        </div>
      </div>
    );
  }

  // ===== FILTROS ACERVO =====
  const vis=ITEMS.filter(i=>{
    const aOk=atoF==="todos"||i.ato===atoF;
    const cOk=caixaF==="all"||i.caixa===caixaF;
    const sOk=subF==="all"?true:subF==="imp"?i.imp:subF==="ausentes"?!i.temos:subF==="danos"?i.ok===false:subF==="cartas"?!!i.carta:subF==="semfoto"?!FOTOS[String(i.id)]:true;
    return aOk&&cOk&&sOk;
  });

  return(
    <div style={{background:"#0A0A0A",minHeight:"100vh",color:"#fff",fontFamily:"-apple-system,sans-serif"}}>
      <style>{"*{box-sizing:border-box;margin:0;padding:0}button{border:none;cursor:pointer;font-family:inherit}::-webkit-scrollbar{display:none}"}</style>
      <Lightbox src={lb} onClose={()=>setLb(null)}/>

      {/* HEADER */}
      <div style={{background:"#000",borderBottom:"1px solid #1A1A1A",padding:"14px 16px 0",position:"sticky",top:0,zIndex:20}}>
        <div style={{fontSize:9,color:"#F5C518",letterSpacing:3,marginBottom:2}}>{tr.subtitulo}</div>
        <div style={{display:"flex",alignItems:"baseline",gap:6,marginBottom:10}}>
          <span style={{fontSize:24,fontWeight:900,letterSpacing:-1.5,color:"#fff"}}>FENÔMENO</span>
          <span style={{fontSize:24,fontWeight:900,letterSpacing:-1.5,color:"#F5C518"}}>50</span>
          <div style={{marginLeft:"auto",display:"flex",gap:2,background:"#1A1A1A",borderRadius:8,padding:2}}>
            {["pt","en"].map(l=>(
              <button key={l} onClick={()=>setLang(l)} style={{padding:"5px 12px",borderRadius:6,fontSize:12,fontWeight:800,letterSpacing:1,border:"none",cursor:"pointer",background:lang===l?"#F5C518":"transparent",color:lang===l?"#000":"#666"}}>{l.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div style={{display:"flex",borderTop:"1px solid #1A1A1A"}}>
          {tr.tabs.map(([k,l])=>(
            <button key={k} onClick={()=>setView(k)} style={{flex:1,padding:"12px 0",fontSize:11,fontWeight:800,letterSpacing:1.5,background:view===k?"#0A0A0A":"transparent",color:view===k?"#F5C518":"#444",borderBottom:view===k?"2px solid #F5C518":"2px solid transparent"}}>{l}</button>
          ))}
        </div>
      </div>

      {/* ===== EXPOSIÇÃO (percurso do museu) ===== */}
      {view==="expo"&&(
        <div style={{padding:"16px 14px 80px"}}>
          <div style={{fontSize:13,color:"#888",lineHeight:1.6,marginBottom:6}}>{tr.percurso}</div>
          <div style={{fontSize:10,color:"#333",letterSpacing:2,textTransform:"uppercase",marginBottom:14}}>{tr.estacoes}</div>
          {ORDEM.map((eid,n)=>{
            const cfg=C[eid]; const cor=cfg.cor;
            const carta=CARTAS.find(c=>c.id===eid);
            const itens=ITEMS.filter(i=>i.ato===eid);
            const painelKeys=PANEL_OF[eid]||[];
            const temPainel=painelKeys.length>0;
            return(
              <div key={eid} onClick={()=>{setEstacao(eid);setExp(null);}} style={{background:"#111",borderRadius:14,marginBottom:10,overflow:"hidden",border:"1px solid #1A1A1A",borderLeft:`5px solid ${cor}`,cursor:"pointer"}}>
                {temPainel&&<div style={{position:"relative"}}><img src={PANELS[painelKeys[0]]} style={{width:"100%",display:"block",maxHeight:130,objectFit:"cover",objectPosition:"center 30%"}} /><div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,transparent 40%,rgba(17,17,17,.95))"}}/><div style={{position:"absolute",top:8,right:8,background:"rgba(0,0,0,.6)",borderRadius:5,padding:"2px 7px",fontSize:9,color:"#22C55E",fontWeight:700}}>✅ {painelKeys.length>1?`${painelKeys.length} PAINÉIS`:"ARTE FINAL"}</div></div>}
                <div style={{padding:"12px 14px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                    <span style={{fontSize:18}}>{cfg.emoji}</span>
                    <span style={{fontSize:10,fontWeight:800,color:cor,letterSpacing:2}}>{lang==="en"?cfg.label_en:cfg.label}</span>
                    <span style={{fontSize:10,color:"#444"}}>{lang==="en"?cfg.range_en:cfg.range}</span>
                    {!temPainel&&<span style={{fontSize:9,color:"#F59E0B",marginLeft:"auto",fontWeight:700}}>{tr.painelProduzir}</span>}
                  </div>
                  <div style={{fontSize:20,fontWeight:900,letterSpacing:-0.5,marginBottom:3}}>{lang==="en"?cfg.titulo_en:cfg.titulo}</div>
                  {carta&&<div style={{fontSize:12,color:cor,fontWeight:700,marginBottom:8}}>{carta.narrador} · <span style={{color:"#555",fontWeight:400,fontStyle:"italic"}}>{lang==="en"?carta.papel_en:carta.papel}</span></div>}
                  <div style={{display:"flex",gap:12,fontSize:11,color:"#555",flexWrap:"wrap"}}>
                    {temPainel&&<span style={{color:cor}}>🖼 {painelKeys.length} {painelKeys.length>1?tr.paineis:tr.painel}</span>}
                    {carta&&<span>✉ {tr.textoParede}</span>}
                    {itens.length>0&&<span>🏛 {itens.length} {tr.pecas}</span>}
                    {itens.filter(i=>!i.temos).length>0&&<span style={{color:"#EF4444"}}>✗ {itens.filter(i=>!i.temos).length} {tr.faltando}</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ===== ACERVO ===== */}
      {view==="acervo"&&(
        <div>
          <div style={{background:"#000",borderBottom:"1px solid #1A1A1A",padding:"8px 14px"}}>
            <div style={{display:"flex",gap:6,overflowX:"auto"}}>
              {[["todos","Todos"],["ato1","ATO 1"],["ato2","ATO 2"],["ato3","ATO 3"],["ato4","ATO 4"],["ato5","ATO 5"]].map(([k,l])=>(
                <button key={k} onClick={()=>setAtoF(k)} style={{padding:"6px 14px",borderRadius:20,fontSize:12,fontWeight:700,whiteSpace:"nowrap",background:atoF===k?(C[k]?.cor||"#F5C518"):"#1A1A1A",color:atoF===k?"#000":"#666"}}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{background:"#060606",borderBottom:"1px solid #1A1A1A",padding:"6px 14px"}}>
            <div style={{display:"flex",gap:5,overflowX:"auto"}}>
              {[["all","Tudo"],["imp","⭐"],["ausentes","✗ Faltam"],["danos","⚠ Danos"],["cartas","✉ Cartas"],["semfoto","📷 Sem foto"]].map(([k,l])=>(
                <button key={k} onClick={()=>setSubF(k)} style={{padding:"5px 11px",borderRadius:14,fontSize:11,fontWeight:600,whiteSpace:"nowrap",background:subF===k?"#F5C518":"#1A1A1A",color:subF===k?"#000":"#555"}}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{background:"#050505",borderBottom:"1px solid #111",padding:"5px 14px"}}>
            <div style={{display:"flex",gap:5}}>
              {[["all","Todas"],["RR1","RR1"],["RR2","RR2"],["RR3","RR3"],["av","Avulso"]].map(([k,l])=>(
                <button key={k} onClick={()=>setCaixaF(k)} style={{padding:"3px 9px",borderRadius:10,fontSize:10,fontWeight:700,background:caixaF===k?"#444":"#111",color:caixaF===k?"#fff":"#444"}}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{padding:"6px 16px",background:"#080808",borderBottom:"1px solid #111",display:"flex",justifyContent:"space-between"}}>
            <span style={{fontSize:11,color:"#333"}}>{vis.length} itens</span>
            <div style={{display:"flex",gap:10}}>
              <span style={{fontSize:11,color:"#22C55E",fontWeight:700}}>✓ {vis.filter(i=>i.temos).length}</span>
              {vis.filter(i=>!i.temos).length>0&&<span style={{fontSize:11,color:"#EF4444",fontWeight:700}}>✗ {vis.filter(i=>!i.temos).length}</span>}
            </div>
          </div>
          <div style={{padding:"6px 10px 80px"}}>
            {vis.map(item=>(
              <ItemRow key={item.id} item={item} cor={C[item.ato]?.cor||"#F5C518"} expanded={exp===item.id} onToggle={()=>setExp(exp===item.id?null:item.id)} onPhoto={setLb} lang={lang} tr={tr}/>
            ))}
          </div>
        </div>
      )}

      {/* ===== OPS ===== */}
      {view==="ops"&&(
        <div style={{padding:"14px 14px 80px"}}>
          {ITEMS.filter(i=>!i.temos).map(item=>(
            <div key={item.id} style={{background:"linear-gradient(135deg,#1A0A00,#0A0A0A)",borderRadius:12,padding:"16px",marginBottom:20,border:"1px solid #3A2500",borderLeft:"4px solid #EF4444"}}>
              <div style={{fontSize:9,color:"#EF4444",letterSpacing:2,textTransform:"uppercase",fontWeight:800,marginBottom:6}}>★ ÚLTIMA AQUISIÇÃO PENDENTE</div>
              <div style={{fontSize:17,fontWeight:900,color:"#fff",lineHeight:1.2,marginBottom:6}}>{lang==="en"?(item.item_en||item.item):item.item}</div>
              <div style={{fontSize:12,color:"#888",lineHeight:1.5,marginBottom:8}}>Citada na carta do {item.carta}. Quando chegar, o acervo de chuteiras-prêmio fica completo: Ouro 96/97 ✓ · Ouro 2002 ✓ · Bronze 2006 pendente.</div>
              <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                <Badge color="#EF4444" bg="#3A0A0A">EM NEGOCIAÇÃO</Badge>
                <Badge color="#A855F7" bg="#1A0A30">{"✉ "+item.carta}</Badge>
                <Badge>#{item.id} · {item.ano}</Badge>
              </div>
            </div>
          ))}
          <div style={{fontSize:10,color:"#333",letterSpacing:2,textTransform:"uppercase",marginBottom:12}}>RESUMO</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:20}}>
            {[[total,"Total","#F5C518"],[temos,"Confirmados","#22C55E"],[faltam,"Faltando","#EF4444"],[danos,"Com danos","#F97316"],[ITEMS.filter(i=>i.col==="R").length,"Col. Ronaldo","#A855F7"],[ITEMS.filter(i=>i.col==="Rn").length,"Col. Ronald","#3B82F6"]].map(([n,l,c],i)=>(
              <div key={i} style={{background:"#111",borderRadius:10,padding:"12px 14px",border:"1px solid #1A1A1A"}}>
                <div style={{fontSize:24,fontWeight:900,color:c}}>{n}</div>
                <div style={{fontSize:10,color:"#444",letterSpacing:1,textTransform:"uppercase",marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:10,color:"#333",letterSpacing:2,textTransform:"uppercase",marginBottom:10}}>⚠ DANOS</div>
          {ITEMS.filter(i=>i.ok===false).map(item=>(
            <div key={item.id} style={{background:"#110A00",borderRadius:10,padding:"10px 14px",marginBottom:6,border:"1px solid #3A2500",borderLeft:"4px solid #F97316"}}>
              <div style={{fontSize:12,color:"#888",fontWeight:600,marginBottom:3}}>{lang==="en"?(item.item_en||item.item):item.item}</div>
              <div style={{fontSize:12,color:"#F97316",fontWeight:600}}>🔧 {lang==="en"?(item.dano_en||item.dano):item.dano}</div>
              {item.caixa&&<div style={{fontSize:10,color:"#444",marginTop:2}}>📦 {item.caixa}</div>}
            </div>
          ))}
          <div style={{fontSize:10,color:"#333",letterSpacing:2,textTransform:"uppercase",marginBottom:10,marginTop:20}}>📋 PENDÊNCIAS</div>
          {PENDENCIAS.map((p,i)=>(
            <div key={i} style={{background:"#0D0D0D",borderRadius:10,padding:"10px 14px",marginBottom:5,border:"1px solid #1A1A1A",borderLeft:`4px solid ${p.u==="alta"?"#EF4444":p.u==="media"?"#F59E0B":"#444"}`}}>
              <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                <span style={{fontSize:9,fontWeight:700,color:p.u==="alta"?"#EF4444":p.u==="media"?"#F59E0B":"#444",textTransform:"uppercase",flexShrink:0,marginTop:2}}>{p.u}</span>
                <span style={{fontSize:12,color:"#666",lineHeight:1.5}}>{p.t}</span>
              </div>
            </div>
          ))}
          <div style={{fontSize:10,color:"#333",letterSpacing:2,textTransform:"uppercase",marginBottom:10,marginTop:20}}>📦 POR CAIXA</div>
          {["RR1","RR2","RR3","av"].map(caixa=>{
            const its=ITEMS.filter(i=>i.caixa===caixa);
            if(!its.length)return null;
            return(
              <div key={caixa} style={{background:"#111",borderRadius:10,padding:"10px 14px",marginBottom:6,border:"1px solid #1A1A1A"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                  <span style={{fontSize:13,fontWeight:700,color:"#fff"}}>📦 {caixa.toUpperCase()}</span>
                  <span style={{fontSize:11,color:"#444"}}>{its.length} itens · {its.filter(i=>i.ok===false).length} c/ danos</span>
                </div>
                {its.map(item=>(
                  <div key={item.id} style={{fontSize:11,color:item.ok===false?"#F97316":"#444",marginBottom:2,paddingLeft:6,borderLeft:`2px solid ${item.ok===false?"#F97316":"#222"}`}}>#{item.id} {lang==="en"?(item.item_en||item.item):item.item}{item.ok===false?" ⚠":""}</div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
