// it when it call mutiple nest functions 

function add(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function expected_result (x,y,callback){
    return callback(x,y)
}

expected_result(2,3,add);
expected_result(5,3,sub);