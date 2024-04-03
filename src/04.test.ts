test('should take old men older them 90', () => {
	const ages = [18, 20, 30, 40, 1, 100, 90, 23, 14]

	const oldAges = ages.filter(age => age > 90)

	expect(oldAges.length).toBe(1)
	expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
	const courses = [
		{ title: 'CSS', price: 110 },
		{ title: 'JS', price: 200 },
		{ title: 'React', price: 150 },
	]

	const chipCourses = courses.filter(course => course.price < 160)

	expect(chipCourses.length).toBe(2)
	expect(chipCourses[0].title).toBe('CSS')
	expect(chipCourses[1].title).toBe('React')
})

test('get only completed and uncompleted tasks', () => {
	const tasks = [
		{ id: 1, title: 'Bread', isDone: false },
		{ id: 2, title: 'Beer', isDone: true },
		{ id: 3, title: 'Milk', isDone: false },
	]

	const completedTasks = tasks
		.filter(task => task.isDone)
	const uncompletedTasks = tasks
		.filter(task => !task.isDone)


	expect(completedTasks.length).toBe(1)
	expect(completedTasks[0].id).toBe(2)
	expect(uncompletedTasks[0].id).toBe(1)
	expect(uncompletedTasks[1].id).toBe(3)

})