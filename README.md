Студент: Наталија Витанова
Индекс: 171023
Професор во iknow: Ристе Стојанов

За стартување на базата на податоци потребно е да се отвори проектот со наслов buildabear и да се стартува(дебагира) BuildabearApplication.
Ќе се иницијализира базата на податоци postgres и schema buildabear каде што се наоѓаат сите табели.
За стартирање на React делот потребно е во command prompt да се наоѓате во папката proektweb (која се наоѓа во папката frontend
во иницијалниот проект) и да ја повикате наредбата npm start. Се препорачува прелистувачот да биде поставен на зум од 75% за поестетско прикажување на компонентите.

Опис на проектот: Build-a-bear е веб апликација на која корисниците можат да се зачленат и да креираат оригинални мечиња играчки кои може да ги зачуваат и доколку сакаат да направат нарачка.
Spring boot дел:
Проектот беше креиран со помош на Spring Boot и ReactJS. Се користеше базата на податоци PostgreSQL додека за манипулација со податоците користев слоевита архитектура со Spring Data Jpa.
Во базата на податоци има вкупно 7 табели и 6 ентитети. Меѓу нив има 2 1:N врски и 2 M:N врски. Едната од M:N врските(Grade) содржи дополнителен аргумент(оценка). Една од табелите е табела на регистрирани корисници. За имплементација користев Rest Controllers.
React дел:
Игледот на апликацијата е правен со помош на Bootstrap. На почетната страна можат да се видат 3 табови. Home, кој не носи на почетната страна, Explore каде што можат да се видат сите креирани мечиња од сите корисници. Во делот My Bears можат да се видат мечињата кои се креирани од моментално најавениот корисник. За полесна манипулација се претпоставува дека е најавен корисник со корисничко име natv кој е веќе внесен во базата на податоци. 
При креирање ново мече, мечето автоматски му се доделува на корисникот natv. 
Во третиот дел Opinions се прикажуваат сите оцени кои најавениот корисник ги дал на мечињата. Оценката може да се избрише или промени во секој момент.
Дел за креирање мечиња:
На секое мече му се доделува име(кое е ID на мечето), животно, боја, големина(може да биде едно од XS, S, M, L, XL), 
едно парче облека од понудените(облеката ја има во база и доколку сакаме, може да додадеме наше парче облека со кликање на копчето add), и повеќе парчиња Additions(за Additions важи истото како за облека). 
Доколку сакаме да порачаме некое од мечињата може да кликнеме на копчето Order кое се наоѓа на секое мече или директно преку почетната страна со кликање на Make Order. При нарачка треба да избереме на кој датум да ни се достави и тој датум ќе се појави на календарот кој се наоѓа на почетната страна.

Базата на податоци ќе биде пополнета со неколку членови и 2 3 мечиња креирани од тие членови. Исто така, членот natv ќе биде додаден на базата заедно со неколку мечиња кои тој ги креирал. Ќе бидат додадени и неколку веќе готови Clothes i Additions.