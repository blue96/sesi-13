const employees = [
    {
        name : 'Pascal',
        age : 24,
        divisi : 'SOH'
    },
    {
        name : 'Jihad',
        age : 22,
        divisi : 'SOH'
    },
    {
        name : 'Dhea',
        age : 23,
        divisi : 'SOH'
    },
    {
        name : 'Ryan',
        age : 23,
        divisi : 'SOH'
    },
    {
        name : 'Esto',
        age : 24,
        divisi : 'SOH'
    },
]

function listPegawai(empArr){
    let txt = ''
    for (let i = 0 ; i< empArr.length; i++){
        txt += `<li>Nama = ${empArr[i].name} Umur = ${empArr[i].age} divisi = ${empArr[i].divisi}</li>`
    }
    return txt
}

export {
    employees,
    listPegawai,
}
