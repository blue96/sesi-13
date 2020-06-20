import {header} from './header.js';
import {sidebar} from './sidebar.js';
import {userProfile} from './userProfile.js';
import {users} from './users.js';
import {issues} from './issues.js';

let headerHTML = document.getElementById('header')
let sidebarHTML = document.getElementById('SideBar')
let usersHTML = document.getElementById('users')
let userProfileHTML = document.getElementById('userProfile')
let issuesHTML = document.getElementById('issues')

headerHTML.innerHTML = header()
sidebarHTML.innerHTML = sidebar()
usersHTML.innerHTML = users()
userProfileHTML.innerHTML = userProfile()
issuesHTML.innerHTML = issues()