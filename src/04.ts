const ages = [18, 20, 30, 40, 1, 100, 90, 23, 14]

const predicatate = (age: number) => {
	return age > 90
}

const oldAges = [100]

type CourseType = {
	title: string;
	price: number
}

const courses = [
	{ title: 'CSS', price: 110 },
	{ title: 'JS', price: 200 },
	{ title: 'React', price: 150 },
]

const chipPredicate = (course: CourseType) => {
	return course.price < 160
}

const chipCourses = [
	{ title: 'CSS', price: 110 },
	{ title: 'React', price: 150 },
]