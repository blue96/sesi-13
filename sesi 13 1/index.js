import {employees, listPegawai} from './data.js';

let list = document.getElementById('listEmployee')
list.innerHTML = listPegawai(employees) 