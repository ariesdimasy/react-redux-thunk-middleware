# REACT APP with REDUX THUNK MIDDLEWARE 

ini adalah sample project untuk memudahkan belajar react redux dengan thunk middleware 

konsep redux di project ini mengikuti tulisan yang ada disini :
https://ariesdimasy.notion.site/Introduction-to-Redux-7e2a6b29333d43e5afebb4f1fd32a755
yang mana tulisan ini akan di update

redux di bagi menjadi 3 bagian 
- Action 
- Reducer
- Store 

Action adalah kumpulan "trigger" yang me return sebuah object berupa type dan payload. dalam kasus asynchronous( async await atau Promise ) seperti melakukan request ke API , di tangani di dalam action yang nantinya di dispatch response nya dalam bentuk `{type:..., payload:...}`

Reducer adalah kumpulan function yang melakukan perubahan pada state atau mutating state. biasanya , mutating state berasal dari payload yang berasal dari action . yang nantinya semua reducer akan di tempatkan / digabung / di combine menjadi 1 tempat. dan akan di daftarkan di store

Store adalah kumpulan semua state dalam 1 wadah , dmana untuk mengambil state di dalam component itu dengan cara 
```javascript 
const contacts = useSelector((state) => state.contactReducer.contacts)
```
dan untuk dapat menjalankan action di component yang dapat merubah ( mutate ) state harus memanggilnya dengan cara 
```javascript 
import { useDispatch } from "react-redux"
import { setPage } from "../redux/actions/contactAction"

...
export default function Contact() { 
    const dispatch = useDispatch()
    ...

    return( <div>
        ...
        <Button onClick={() => dispatch(setPage(3))}></Button>
        ...
    </div>)
}
```
