//sử dụng toán tử spread cho phép duyệt từng phần tử trong mảng để rải vào vị trí mới 
const old = [1,2,3]
//rải các phần tử 
const newArray1 = [...old, 4, 5]
console.log(newArray1)
newArray2 = [4,5, ...old] 
console.log(newArray2)

//EX: 
const originData = [
    {"id": 1, "name": "David", "age": 20},
    {"id": 2, "name": "Alex", "age": 22},
    {"id": 3, "name": "Minh", "age": 18}
]

//add new
function addNew(){
    addList=[]
    let name = "Ha"
    let age = 15
    let id =4
    const ob = {
        id,
        name,
        age
    }
    addList=[...originData,ob]
}

addNew()
console.table(addList)
//EX2:
function sumNumber(...numbers){
    let total = 0
    for (const item of numbers) {
        console.log(item)
        if(typeof(item) === "number"){
            total+=item
        }
    }
    console.log("Output: " + total)
}

const listData = [3, "Hello", true, 3.5]
sumNumber(...listData, 3.5)