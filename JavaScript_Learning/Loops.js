//FOR Loop

let dishes = ['Biriyani' , 'Polao' , 'Fried-Rice'] ;
for(let i = 0 ; i < dishes.length ; ++i)
{
    console.log("Favourite dish = ", dishes[i] + '\n') ;
}

let i = 0 ;
do{
    console.log(dishes[i]) ;
    i++;
}
while(i < dishes.length);

