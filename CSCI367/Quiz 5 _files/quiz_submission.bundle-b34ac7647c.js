canvasWebpackJsonp([150],{"1GugJEzHnd":function(e,t,i){"use strict"
var n=a(i("5CWMeD+DBy")),s=a(i("mOY9BNujNR"))
i("wDpNb6a9wL")
function a(e){return e&&e.__esModule?e:{default:e}}(0,s.default)(document).ready(function(){(0,s.default)("#questions.assessment_results .question").hover(function(){(0,s.default)(this).addClass("hover")},function(){(0,s.default)(this).removeClass("hover")});(0,s.default)(".quiz_response_text img").each(function(){(0,s.default)(this).css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",n.default.t("titles.this_is_an_image","This is an image, not text, and could have changed since the student submitted"))});(0,s.default)(".quiz_response_text iframe").each(function(){(0,s.default)(this).css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",n.default.t("titles.this_is_an_external_frame","This is an external frame, not text, and could have changed since the student submitted"))})
var e=(0,s.default)("nothing");(0,s.default)(".quiz_response_text").find("object,embed").each(function(){return e.add((0,s.default)(this).parents("object,embed:first"))})
return e.each(function(){var e=(0,s.default)("<span/>").css("display","inline-block")
e.before((0,s.default)(this))
e.append((0,s.default)(this))
return e.css({borderColor:"#f44",borderStyle:"solid",borderWidth:"2px",padding:2}).attr("title",n.default.t("titles.this_is_an_external_element","This is an external element, not text, and could have changed since the student submitted"))})})},"3MHqbEadI+":function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i("36QOWIB4+W"),s=i.n(n),a=i("mOY9BNujNR")
i.n(a).a.extend(!0,s.a,{translations:{ar:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"هذا عنصر خارجي، وليس نصًا، وربما قد تغير منذ أن أرسله الطالب",this_is_an_external_frame:"هذا إطار خارجي، وليس نصًا، وربما قد تغير منذ أن أرسله الطالب",this_is_an_image:"هذه صورة، وليست نصًا، وربما قدت تغير منذ أن أرسلها الطالب"}}}},cy:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Elfen allanol yw hon, dim testun, ac mae’n bosib ei bod wedi newid ers i’r myfyriwr gyflwyno",this_is_an_external_frame:"Ffrâm allanol yw hon, dim testun, ac mae’n bosib ei bod wedi newid ers i’r myfyriwr gyflwyno",this_is_an_image:"Delwedd yw hon, dim testun, ac mae’n bosib ei bod wedi newid ers i’r myfyriwr gyflwyno"}}}},da:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dette er et eksternt element, ikke tekst, og er eventuelt blevet ændret, siden den studerende afleverede",this_is_an_external_frame:"Dette er en ekstern ramme, ikke tekst, og er eventuelt blevet ændret, siden den studerende afleverede",this_is_an_image:"Dette er et billede, ikke tekst, og er eventuelt blevet ændret, siden den studerende afleverede"}}}},"da-x-k12":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dette er et eksternt element, ikke tekst, og er eventuelt blevet ændret, siden eleven afleverede",this_is_an_external_frame:"Dette er en ekstern ramme, ikke tekst, og er eventuelt blevet ændret, siden eleven afleverede",this_is_an_image:"Dette er et billede, ikke tekst, og er eventuelt blevet ændret, siden eleven afleverede"}}}},de:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dies ist ein externes Element, kein Text, und könnte seit der letzten Abgabe des Studenten geändert worden sein.",this_is_an_external_frame:"Dies ist ein externer Frame, kein Text, und könnte seit der letzten Abgabe des Studenten geändert worden sein.",this_is_an_image:"Dies ist ein Bild, kein Text, und könnte seit der letzten Abgabe des Studenten geändert worden sein."}}}},el:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Αυτό είναι ένα εξωτερικό στοιχείο, δεν είναι κείμενο, και μπορεί να έχει αλλάξει από την υποβολή από τον σπουδαστή",this_is_an_external_frame:"Αυτό είναι ένα εξωτερικό πλαίσιο, δεν είναι κείμενο, και μπορεί να έχει αλλάξει από την υποβολή από τον σπουδαστή",this_is_an_image:"Αυτή είναι εικόνα, δεν είναι κείμενο, και μπορεί να έχει αλλάξει από την υποβολή από τον σπουδαστή"}}}},"en-AU":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"This is an external element, not text, and could have changed since the student submitted",this_is_an_external_frame:"This is an external frame, not text, and could have changed since the student submitted",this_is_an_image:"This is an image, not text, and could have changed since the student submitted"}}}},"en-CA":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"This is an external element, not text, and could have changed since the student submitted",this_is_an_external_frame:"This is an external frame, not text, and could have changed since the student submitted",this_is_an_image:"This is an image, not text, and could have changed since the student submitted"}}}},"en-GB":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"This is an external element, not text, and could have changed since the student submitted",this_is_an_external_frame:"This is an external frame, not text, and could have changed since the student submitted",this_is_an_image:"This is an image, not text, and could have changed since the student submitted"}}}},"en-GB-x-lbs":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"This is an external element, not text, and could have changed since the student submitted",this_is_an_external_frame:"This is an external frame, not text, and could have changed since the student submitted",this_is_an_image:"This is an image, not text, and could have changed since the student submitted"}}}},"en-GB-x-ukhe":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"This is an external element, not text, and could have changed since the student submitted",this_is_an_external_frame:"This is an external frame, not text, and could have changed since the student submitted",this_is_an_image:"This is an image, not text, and could have changed since the student submitted"}}}},es:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Este es un elemento externo, no es texto, y pudo haber cambiado desde que el alumno lo presentó",this_is_an_external_frame:"Este es un marco externo, no es texto, y pudo haber cambiado desde que el alumno lo presentó.",this_is_an_image:"Esta es una imagen, no es texto, y pudo haber cambiado desde que el alumno lo presentó"}}}},fa:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"یک عنصر بیرونی است، نه متن، و از زمان ارسال دانشجو، ممکن است تغییر یافته باشد",this_is_an_external_frame:"یک چهارچوب بیرونی است، نه متن، و از زمان ارسال دانشجو ممکن است تغییر یافته باشد",this_is_an_image:"یک تصویر است، نه متن، و از زمان ارسال دانشجو، ممکن است تغییر یافته باشد"}}}},fr:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Ceci est un élément externe et non du texte, et il peut avoir été modifié depuis que l’étudiant l’a envoyé.",this_is_an_external_frame:"Ceci est un cadre externe et non du texte, et il peut avoir été modifié depuis que l’étudiant l’a envoyé.",this_is_an_image:"Ceci est une image et non du texte, et elle peut avoir été modifiée depuis que l’étudiant l’a envoyée."}}}},"fr-CA":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Ceci est un élément externe et non du texte, et il peut avoir été modifié depuis que l’étudiant l’a envoyé.",this_is_an_external_frame:"Ceci est un cadre externe et non du texte, et il peut avoir été modifié depuis que l’étudiant l’a envoyé.",this_is_an_image:"Ceci est une image et non du texte, et elle peut avoir été modifiée depuis que l’étudiant l’a envoyée."}}}},he:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"זהו רכיב חיצוני, לא מלל, ויכול היה להשתנות מאז התלמיד הגיש ",this_is_an_external_frame:"זוהי מסגרת חיצונית, לא מלל, אשר יכלה להשתנות מאז התלמיד הגיש ",this_is_an_image:"זוהי תמונה, לא מלל,  שיכלה להשתנות מאז התלמיד הגיש"}}}},ht:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Sa se yon eleman ekstèn, se pa tèks, e pwobab pou li chanje lè elèv la soumèt",this_is_an_external_frame:"Sa se yon kad ekstèn, se pa tèks, e pwobab pou li chanje lè elèv la soumèt",this_is_an_image:"Sa se yon imaj, se pa tèks, e pwobab pou li chanje lè elèv la soumèt"}}}},hu:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Ez egy külső elem, nem szöveg, és megváltozhatott, mióta a hallgató beadta azt",this_is_an_external_frame:"Ez egy külső keret, nem pedig szöveg, és megváltozhatott, mióta a hallgató beadta azt",this_is_an_image:"Ez egy kép, nem szöveg, és megváltozhatott, mióta a hallgató beadta azt"}}}},hy:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Սա արտաքին տարր է, ոչ թե տեքստ և կարող է փոխվել ունկնդրի ուղարկելուց հետո",this_is_an_external_frame:"Սա արտաքին շրջանակ է, ոչ թե տեքստ և կարող է փոխվել ունկնդրի ուղարկելուց հետո",this_is_an_image:"Սա պատկեր է, ոչ թե տեքստ և կարող է փոխվել ունկնդրին ուղարկելուց հետո"}}}},is:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Þetta er ytri liður, ekki texti og gæti hafa breyst síðan nemandi skilaði framlagi",this_is_an_external_frame:"Þetta er ytri rammi, ekki texti og gæti hafa breyst síðan nemandi skilaði framlagi",this_is_an_image:"Þetta er mynd, ekki texti, og gæti hafa breyst síðan nemandi skilaði framlagi"}}}},it:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Questo è un elemento esterno, non un testo, e potrebbe essere cambiato sin dalla consegna dello studente",this_is_an_external_frame:"Questo è un frame esterno, non un testo, e potrebbe essere cambiato sin dalla consegna dello studente",this_is_an_image:"Questa è un'immagine, non un testo, e potrebbe essere cambiata sin dalla consegna dello studente"}}}},ja:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"これはテキストではなく、外部要素であり、受講生が提出したときから変更されている可能性があります。",this_is_an_external_frame:"これはテキストではなく、外部フレームであり、受講生が提出したときから変更されている可能性があります。",this_is_an_image:"これはテキストではなく、画像であり、受講生が提出したときから変更されている可能性があります。"}}}},ko:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"이는 텍스트가 아닌 외부 요소로서 학생이 제출한 이후에 바뀌었을 수도 있습니다.",this_is_an_external_frame:"이는 텍스트가 아닌 외부 프레임으로서 학생이 제출한 이후에 바뀌었을 수도 있습니다.",this_is_an_image:"이는 텍스트가 아닌 이미지로서 학생이 제출한 이후에 바뀌었을 수도 있습니다."}}}},mi:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Ko te huānga waho, kahore kuputuhi tenei, a kua puta ke i taea e mai tukuna te ākonga",this_is_an_external_frame:"Ko te anga waho, kahore kuputuhi tenei, a kua puta ke i taea e mai tukuna te ākonga",this_is_an_image:"Ko te kore, image kuputuhi tenei, a kua puta ke i taea e mai tukuna te ākonga"}}}},nb:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dette er et eksternt element, ikke tekst, og kan ha blitt endret siden studenten leverte",this_is_an_external_frame:"Dette er en ekstern ramme, ikke tekst, og kan ha blitt endret siden studenten sendte inn",this_is_an_image:"Dette er et bilde, ikke tekst, og kan ha blitt endret siden studenten sendte inn"}}}},"nb-x-k12":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dette er et eksternt element, ikke tekst, og kan ha blitt endret siden eleven leverte",this_is_an_external_frame:"Dette er en ekstern ramme, ikke tekst, og kan ha blitt endret siden eleven sendte inn",this_is_an_image:"Dette er et bilde, ikke tekst, og kan ha blitt endret siden eleven sendte inn"}}}},nl:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dit is geen tekst maar een extern element dat gewijzigd kan zijn sinds de cursist het ingezonden heeft",this_is_an_external_frame:"Dit is geen tekst maar een extern frame dat gewijzigd kan zijn sinds de cursist het ingezonden heeft",this_is_an_image:"Dit is geen tekst maar een afbeelding dat gewijzigd kan zijn sinds de cursist het ingezonden heeft"}}}},nn:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Dette er eit eksternt element, ikkje tekst, som kan ha biltt endra etter at studenten leverte det",this_is_an_external_frame:"Dette er ei ekstern ramme, ikkje tekst, som kan ha blitt endra etter at studenten leverte ho",this_is_an_image:"Dette er eit eksternt bilde, ikkje tekst, som kan ha blitt endra etter at studenten leverte det"}}}},pl:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Jest to element zewnętrzny, nie tekst, który mógł się zmienić od momentu przesłania zadania",this_is_an_external_frame:"Jest to ramka zewnętrzna, nie tekst, która mogła się zmienić od momentu przesłania zadania",this_is_an_image:"Jest to obraz, nie tekst, który mógł się zmienić od momentu przesłania zadania"}}}},pt:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Este é um elemento externo, não texto, e pode ter sido alterado desde o envio do aluno",this_is_an_external_frame:"Este é um quadro externo, não texto, e pode ter sido alterado desde o envio do aluno",this_is_an_image:"Esta é uma imagem, não texto, e pode ter sido alterada desde o envio do aluno"}}}},"pt-BR":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Este é um elemento externo, não texto, e pode ter sido alterado desde o envio do aluno",this_is_an_external_frame:"Este é um quadro externo, não texto, e pode ter sido alterado desde o envio do aluno",this_is_an_image:"Esta é uma imagem, não texto, e pode ter sido alterada desde o envio do aluno"}}}},ru:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Это внешний элемент, не текст, который мог быть изменен после отправки студента",this_is_an_external_frame:"Это внешний кадр, не текст, который мог быть изменен после отправки студента",this_is_an_image:"Это изображение, не текст, которое могло быть изменено после отправки студента"}}}},sv:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Det här är ett externt element, inte text, och kan ha ändrats sedan studenten lämnade in det",this_is_an_external_frame:"Det här är en extern ram, inte text, och kan ha ändrats sedan studenten lämnade in den",this_is_an_image:"Det här är en bild, inte text, och kan ha ändrats sedan studenten lämnade in den"}}}},"sv-x-k12":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Det här är ett externt element, inte text, och kan ha ändrats sedan eleven lämnade in det",this_is_an_external_frame:"Det här är en extern ram, inte text, och kan ha ändrats sedan eleven lämnade in den",this_is_an_image:"Det här är en bild, inte text, och kan ha ändrats sedan eleven lämnade in den"}}}},tr:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Bu bir dış kaynak nesnesidir, metin değildir ve öğrenciler gönderdiğinden beri değişmiş olabilir",this_is_an_external_frame:"Bu bir metin olmayan dış kaynak çevçevesidir ve öğrenciler gönderdiğinden beri değişmiş olabilir",this_is_an_image:"Bu bir resimdir, metin değildir ve öğrenciler gönderdiğinden beri değişmiş olabilir"}}}},uk:{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"Це зовнішній елемент, а не текст, і міг змінитись після того, як студент подав",this_is_an_external_frame:"Це зовнішня рамка, а не текст, і вона могла б змінитися після того, як студент подав",this_is_an_image:"Це зображення, а не текст, і він міг змінюватися після того, як студент подав"}}}},"zh-Hans":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"这是一个外部元素而不是文本，因此学生提交后无法更改",this_is_an_external_frame:"这是一个外部框架而不是文本，因此学生提交后无法更改",this_is_an_image:"这是一幅图像而不是文本，因此学生提交后无法更改"}}}},"zh-Hant":{quizzes:{quiz_submission:{titles:{this_is_an_external_element:"這是外部因素，而不是文字，並可能會在學生提交後更改",this_is_an_external_frame:"這是外部框架，而不是文字，並可能會在學生提交後更改",this_is_an_image:"這是影像，而不是文字，並可能會在學生提交後更改"}}}}}})},"5CWMeD+DBy":function(e,t,i){var n,s
n=[i("36QOWIB4+W"),i("3MHqbEadI+"),i("PyJFCi/UoU"),i("XDPawBHrta")],void 0!==(s=function(e){return e.scoped("quizzes.quiz_submission")}.apply(t,n))&&(e.exports=s)},wDpNb6a9wL:function(e,t,i){"use strict"
var n,s=i("mOY9BNujNR");(0,((n=s)&&n.__esModule?n:{default:n}).default)(".question select").bind("mousewheel",function(e){return e.preventDefault()})}},["1GugJEzHnd"])

//# sourceMappingURL=quiz_submission.bundle-b34ac7647c.js.150-b34ac7647c.sourcemap