const PI=3.14
console.log(PI)

const user = {
    "name": "Nguyen Van A",
    "age": 20,
    "address":{
        "street":"hochiminh",
        "state":"thanh xuan"
    }
}
const user1 = {
    "name": "Nguyen Van B",
    "age": 20,
    "address":{
        "street":"hochiminh",
        "state":"thanh xuan"
    }
}
console.log(user)
user.name="CHANGED"

console.log(`name:${user.name}, age: ${user.age}, street: ${user.address.street}`)
const list=[
    {name:"lvhm", age:20},
    {name:"hello", age:20},
    {name:"22", age:20},
    {name:"33", age:20}
    
]
for (const key of list) {
    console.log(`name:${key.name}, age: ${key.age}`)
}

//-------------------Practices----------------------

const students = [
    {"id": 3, "name": "John", "email":"john@gmail.com"},
    {"id": 2, "name": "Mary", "email":"mary@gmail.com"},
    {"id": 1, "name": "Tom", "email":"tom@gmail.com"},
    {"id": 4, "name": "John", "email": "john1@gmail.com"},
    {"id": 5, "name": "Anh", "email": "anh1@gmail.com"}
    ]

// function Student(id,name,email) {
//     this.id=id;
//     this.name=name;
//     this.email=email;
// }
function addStudent(){
    let id=6;
    let name="Minh";
    let email="lvhm114@gmail.com"
    // let st = new Student(id,name,email)
    const st = {
        id,
        name,
        email
    }
    students.push(st)
    
}

function display(){
    console.log(students)
}

function search(text){
    for (const student of students) {
        if(student.name.includes(text)){
            console.log(student)
        }
    }
}

function editMail(id){
    for (const student of students) {
        if(student.id===id){
            student.email=""
            var check = true;
            break
        }
    }
    if(check!=true){console.log("khong tim thay id")}
}

function sortListByName(){ 
    students.sort(function(st1,st2){
        let a = st1.name.toLowerCase()
        let b = st2.name.toLowerCase()
        return a === b ? st1.id > st2.id?-1:1 : a > b ? 1 : -1
    })
} 
function deleteById(id){
    for (const st of students) {
        if(st.id === id){
            students.pop(st)
            var check = true
            break
        }
    }
    if(check!=true){console.log("khong co")}
    
}



console.log("++++++")
addStudent()
// display()
// search("n")
// editMail(5)
// sortListByName()
deleteById(7)
console.table(students)



// function findStudent(search){
//     for (const st of listStudent) {
//         if(st.name.localeCompare(search))
//     }
// }
