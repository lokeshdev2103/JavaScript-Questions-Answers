// way to access properties in nest obejct ; 

data = [
    {
        moive : [
            {
                moive:"kalki",
                date : 24  
            },
            {
                moive:"pitha",
                date : 25
            }
        ]
    }
]

console.log(data[0]?.moive[0].moive);
