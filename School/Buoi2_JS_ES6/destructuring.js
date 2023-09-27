//object destructuring
const existUser = {
    "name": "Hoang minh",
    "email": "lvhm@gmail.com",
    "password": "123456"
}

//giả sử tôi không muốn hiện pass cho người dùng 
//C1:
const {
    name,
    email
} = existUser
console.log(`welcome: ${name}, mail: ${email}`)

//C2:
const {
    name: n,
    email: e,
    age: a="none"
} = existUser
console.log(`welcome: ${n}, mail: ${e}, age: ${a}`)

//array destructuring
const data = [
    {
        'student':[
            {'id': 1, 'name': 'Minh', 'age': 20, 'class_code':1},
            {'id': 2, 'name': 'Ha', 'age': 19, 'class_code':1},
            {'id': 3, 'name': 'Linh', 'age': 23, 'class_code':2}
        ]
    },
    {
        'class': [
            {'id': 1, 'name': 'SE1747'},
            {'id': 2, 'name': 'SE1748'},
            {'id': 3, 'name': 'SE1749'}
        ]
    },
    {
        'course' : [
            {'id':1, 'code': 'FER201m'},
            {'id':2, 'code': 'MAS201'},
        ]
    }
]

// log danh sach cac: stundent, class, course

const [
    listStudent,
    listClass,
    listCourse
 ] = data

console.log(listStudent)

const {
    student
} = listStudent

console.log("list of student: ")

student.map(s => {
    s.age+=1
    // console.log(`${s.id}, ${s.name}, ${s.age}, ${s.class_code} `)
})

for (const item of student) {
    console.log(item)
}
