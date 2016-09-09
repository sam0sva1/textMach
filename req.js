r = require('rethinkdbdash')({
		db: 'reguletter'
	});

//r.table('users').run().then(res => console.log(res));

// r.table('users')
// 	.get('de53d795-4091-496c-9e5d-e2c9bba2dd4f')

	// .update(
	// 	{
	// 		projects: r.row('projects')
	// 		.replace(function(proj) {
	// 			return proj('work_name').eq('advent')
	// 		})
	// 	}
	// )
	// .update({projects: 
	// 	r.row('projects')
	// 	.filter(it => it('work_name').eq('mount').not())
	// })
	//.filter({work_name: 'advent'})

	// .replace(function(proj) {
	// 	return proj('work_name').eq('advent')
	// })

	//.getField('projects')
	//.filter(it => it('work_name').eq('advent').not())

	//.filter({work_name: 'advent'})
	// .deleteAt()
	//.delete()
	// .run()
	// .then(res => console.log(res));




// r.table('updates').update({"update/0": { "comment/0": { "comment/00": r.literal() } }})

// 	r.table('updates').update(
//   {comments:
//     r.row('comments').filter(function(c){
//       return c('id').eq('comment/0').not();
//     })
//   }
// )