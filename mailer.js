var nodemailer = require('nodemailer');
var mailTransport = nodemailer.createTransport('SMTP', {
	host: 'smtp.yandex.ru',
	secureConnection: true,
	port: 465,
	auth: {
		user: 'info@reguletter.ru',
		pass: 'Be@tr1ce'
	}
});

var letter = {
	from: ' "Reguletter" <info@reguletter.ru> ',
	to: 'dkv1993@mail.ru',
	subject: 'Оставайтесь на связи',
	text: 'Разработка Reguletter.ru - редактора, направленного на удобное управление Вашими проектами - в самом разгаре и скоро подойдет к концу.\nОстаемся на связи.'
};

mailTransport.sendMail(letter, (err, info) => {
	if(err) console.error('Письмо не отправляется потому, что ' + err);
	if(info) {
		if(info.messageId)console.log('Отправка прошла успешно. MessageId: ', info.messageId);
	}
});