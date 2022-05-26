// Story
// Eight men fell in love with a woman at the same time. Oh~~ A lucky woman and eight unfortunate men ;-). The 8 men are ready to fight a duel of life and death.

// The names of eight men:
// [
// "Asda Btry","Csrt Dks","Gjhgj Hewr","Kewrwe Lhgj",
// "Osdf Psde","Mretb Njhk","Isdf Jjhkhj","Eyui Ferd"
// ]
// The duel takes place in a room, with a round table in it. The desktop of the table can be rotated. The table is set with eight guns, filled with bullets. Each man has his own pistol, with his initials engraved on it. They put the eight pistols in a random order around the table and sit down in random order too (imagine or assume that their eyes are covered with cloth.).

//              Asda Btry   Csrt Dks
//                     \    /
//                     CD  AB
//    Eyui Ferd -- KL         MN -- Gjhgj Hewr

//  Isdf Jjhkhj -- OP         IJ -- Kewrwe Lhgj
//                     EF  GH
//                    /     \
//            Mretb Njhk   Osdf Psde
// When they remove the cloth from the eyes, the duel begins. If the gun in front of a man is his own, he can pick it up and kill his neighbors on either side of him. If no one gets their gun, they will turn the table clockwise. On the first round, they rotate it 45 degrees, on the second round 90 degrees, and so on, increasing by 45 degrees each time, until someone gets his gun.

// Note that they all shoot at the same time ! Therefore it is possible for them to be shot from multiple directions in some rounds. Also, the men who already died in the previous rounds are lying on the floor : each duelist shoots his nearest living neighbors.

// Turn 45 degrees:
//              Asda Btry   Csrt Dks
//                     \    /
//                     KL  CD
//    Eyui Ferd -- OP         AB -- Gjhgj Hewr

//  Isdf Jjhkhj -- EF         MN -- Kewrwe Lhgj
//                     GH  IJ
//                    /     \
//            Mretb Njhk   Osdf Psde

// Csrt Dks gets his gun, "PONG!PONG!PONG!!!"
// After a burst of gunfire, two men died(Asda Btry and Gjhgj Hewr).


//       Asda Btry(died)   Csrt Dks
//                     \    /
//                     KL  CD
//    Eyui Ferd -- OP         AB -- Gjhgj Hewr(died)

//  Isdf Jjhkhj -- EF         MN -- Kewrwe Lhgj
//                     GH  IJ
//                    /     \
//            Mretb Njhk   Osdf Psde
// The duel will continue until less than than 2 men are alive...

// Turn 90 degrees:
//       Asda Btry(died)   Csrt Dks
//                     \    /
//                     EF  OP
//    Eyui Ferd -- GH         KL -- Gjhgj Hewr(died)

//  Isdf Jjhkhj -- IJ         CD -- Kewrwe Lhgj
//                     MN  AB
//                    /     \
//            Mretb Njhk   Osdf Psde

// Isdf Jjhkhj and Mretb Njhk get their guns, "PONG!PONG!PONG!!!"
// After a burst of gunfire, four men died (Eyui Ferd, Isdf Jjhkhj, Mretb Njhkand and Osdf Psde).


//              Asda Btry(died)   Csrt Dks
//                          \    /
//                          EF  OP
//    Eyui Ferd(died) -- GH        KL -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- IJ        CD -- Kewrwe Lhgj
//                          MN  AB
//                          /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// The duel will continue until there are less than 2 men alive...

// Turn 135 degrees:

//              Asda Btry(died)   Csrt Dks
//                          \    /
//                          MN  IJ
//    Eyui Ferd(died) -- AB        GH -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- CD        EF -- Kewrwe Lhgj
//                          KL  OP
//                          /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// Gjhgj Hewr and Osdf Psde get their guns, 
// Unfortunately, they are already dead ;-)

// Turn 180 degrees:
//              Asda Btry(died)   Csrt Dks
//                           \    /
//                           OP  KL
//    Eyui Ferd(died) -- EF          CD -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- GH          AB -- Kewrwe Lhgj
//                           IJ  MN
//                           /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// Turn 225 degrees:
//              Asda Btry(died)   Csrt Dks
//                           \    /
//                           AB  MN
//    Eyui Ferd(died) -- CD          IJ -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- KL          GH -- Kewrwe Lhgj
//                           OP  EF
//                           /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// Turn 270 degrees:
//              Asda Btry(died)   Csrt Dks
//                           \    /
//                           IJ  GH
//    Eyui Ferd(died) -- MN          EF -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- AB          OP -- Kewrwe Lhgj
//                           CD  KL
//                           /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// Turn 315 degrees:
//              Asda Btry(died)   Csrt Dks
//                           \    /
//                           GH  EF
//    Eyui Ferd(died) -- IJ          OP -- Gjhgj Hewr(died)

//  Isdf Jjhkhj(died) -- MN          KL -- Kewrwe Lhgj
//                           AB  CD
//                           /     \
//            Mretb Njhk(died)   Osdf Psde(died)

// Kewrwe Lhgj gets his gun, "PONG!PONG!PONG!!!"
// After a burst of gunfire, Csrt Dks died. Kewrwe Lhgj is the final winner, he got the beloved girl ;-)

// Task
// Complete function duel() that accepts 2 arguments:

// names An array containing the names of the eight men as they are disposed at the beginning of the duel.

// guns An array of the men's pistols as they are diposed at the beginning of the duel. Each gun is represented by his owner's initials.

// The result should be the winner's name as a string. If no one survived, return an empty string.

// Example
// // The example in the story:
// names = [
// "Asda Btry","Csrt Dks","Eyui Ferd","Gjhgj Hewr",
// "Isdf Jjhkhj","Kewrwe Lhgj","Mretb Njhk","Osdf Psde"
// ]
// guns = ["CD", "AB","MN","IJ","GH","EF","OP","KL"]
// duel(names,guns)  ===  "Kewrwe Lhgj"

const names = [
    "Asda Btry", "Csrt Dks", "Eyui Ferd", "Gjhgj Hewr",
    "Isdf Jjhkhj", "Kewrwe Lhgj", "Mretb Njhk", "Osdf Psde"
]
const guns = ["CD", "AB", "MN", "IJ", "GH", "EF", "OP", "KL"];

const duel = (names, guns) => {
    let result = [1];
    let personInitials = [];

    names.map(item => {
        const fullNameArr = item.split(' ');
        personInitials.push(fullNameArr[0][0] + fullNameArr[1][0]);
    });

    // console.log(personInitials);
    for (let i = 0; 1 <= personInitials.length; i++) {
        if (guns[i] === personInitials[i]) {
            personInitials.splice(i - 2, i - 1);
            personInitials.splice(i, i + 1);
        } else {
            personInitials.unshift(personInitials.pop());
        }
        console.log(personInitials);
    }


    // console.log(result);
    return result;
};

duel(names, guns);