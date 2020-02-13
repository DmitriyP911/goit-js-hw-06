`use strict`

import { default as users } from './users.js';

const getUserNames = users => users.map( obj => obj.name );

console.log( getUserNames( users ) );
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = ( users, color ) => users.filter( eye => eye.eyeColor === color );

console.log( getUsersWithEyeColor( users, 'blue' ) ); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = ( users, gender ) => {
  return users
    .filter( male => male.gender === gender )
    .map( obj => obj.name );
}

console.log( getUsersWithGender( users, 'male' ) ); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => users.filter( online => !online.isActive );

console.log( getInactiveUsers( users ) ); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = ( users, email ) => users.find( user => user.email === email );

console.log( getUserWithEmail( users, 'shereeanthony@kog.com' ) ); // {объект пользователя Sheree Anthony}
console.log( getUserWithEmail( users, 'elmahead@omatom.com' ) ); // {объект пользователя Elma Head}

const getUsersWithAge = ( users, min, max ) => users.filter( user => user.age >= min && user.age <= max );

console.log( getUsersWithAge( users, 20, 30 ) ); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => users.reduce( ( total, user ) => total += user.balance, 0 );

console.log( calculateTotalBalance( users ) ); // 20916

const getUsersWithFriend = ( users, friendName ) => {
  return users
    .filter( userFriend => userFriend.friends.includes( friendName ) )
    .map( obj => obj.name );
}

console.log( getUsersWithFriend( users, 'Briana Decker' ) ); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log( getUsersWithFriend( users, 'Goldie Gentry' ) ); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
  return users
    .sort( ( a, b ) => a.friends.length - b.friends.length )
    .map( obj => obj.name );
}

console.log( getNamesSortedByFriendsCount( users ) );
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
  return users
    .flatMap( ob => ob.skills )
    .filter( ( item, index, arr ) => arr.indexOf( item ) === index )
    .sort();
};

console.log( getSortedUniqueSkills( users ) );
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]