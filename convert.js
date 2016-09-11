var jsreport = require('jsreport');
var fs = require('fs');

var charset = '<meta charset="utf-8">';
var text = "<style type='text/css'>/*GRIDE*/.message__frame{box-sizing: border-box; width: 500px; height: 280px; margin: 40px; padding: 20px;}.message__title{margin: -10px 0 8px 0;}.message__subtitle{margin: 0 0 5px 0;}.message__paragraph{margin: 0; line-height: 20px;}/*decoration*/.message__frame{border: 1px solid black; border-radius: 10px;}/*colorisation*/.message__frame{background-color: #D6EADF; border-color: #B8E0D2;}.message__title{color: #809BCE;}.message__subtitle{color: #95B8D1;}.message__paragraph{color: #809BCE;}</style><div class='message__frame'><h1 class='message__title'>Unicorns</h1><hr color='#EAC4D5'><h3 class='message__subtitle'>Generation</h3><p class='message__paragraph'>The unicorn has at various times been identified or confused with the rhinoceros, with various species of antelope, or with other animals having a horn (or horns) or horn-like projection from the head. According to Pliny it had a body resembling that of a horse, the head of a deer, the feet of an elephant, and the tail of a lion, with one black horn projecting from the middle of the forehead. In biblical translation, unicorn may be used for a kind of wild ox.</p></div><div class='message__frame'><h1 class='message__title'>Unicorns</h1><hr color='#EAC4D5'><h3 class='message__subtitle'>Generation</h3><p class='message__paragraph'>The unicorn has at various times been identified or confused with the rhinoceros, with various species of antelope, or with other animals having a horn (or horns) or horn-like projection from the head. According to Pliny it had a body resembling that of a horse, the head of a deer, the feet of an elephant, and the tail of a lion, with one black horn projecting from the middle of the forehead. In biblical translation, unicorn may be used for a kind of wild ox.</p></div><div class='message__frame'><h1 class='message__title'>Unicorns</h1><hr color='#EAC4D5'><h3 class='message__subtitle'>Generation</h3><p class='message__paragraph'>The unicorn has at various times been identified or confused with the rhinoceros, with various species of antelope, or with other animals having a horn (or horns) or horn-like projection from the head. According to Pliny it had a body resembling that of a horse, the head of a deer, the feet of an elephant, and the tail of a lion, with one black horn projecting from the middle of the forehead. In biblical translation, unicorn may be used for a kind of wild ox.</p></div>";
var content = charset + text;


jsreport.render({ template: { content: content, engine: 'jsrender', recipe: 'phantom-pdf' } })
	.then(function(out) {
		out.stream.pipe(fs.createWriteStream('./result')); //Вместо потока на запись файла можно указать res внутри express
	}).catch(function(e) {    
		res.end(e.message);
	});