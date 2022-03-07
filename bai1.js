var names = ["Binh","Phuoc","Cao","Hung","Khanh"];
function allLongestStrings(names){
    let tendainhat = 0;
    for(let i = 0; i< names.length; i++){
        if (names[i].length > tendainhat){
            tendainhat = names[i].length
        }
    }
    console.log (names.filter(ten => ten.length === tendainhat));
    
}


// cach 2 //
const ketqua = ["Tung", "Khanh", "Chi"];
const longestname = ketqua.filter(ketqua => ketqua.length > 3);
console.log(longestname);