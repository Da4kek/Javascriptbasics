const rectangle = {
    length :10,
    width: 20,
    get Area(){
        if(rectangle.length<=rectangle.width){
            return `width cannot be bigger than length given:\nl=${rectangle.length}\nw=${rectangle.width}`
        }
        else {
            let area = rectangle.length * rectangle.width
            return `Area of the rectangle is: ${area}`
        }
    },
    set Area(value1){
        this.length = value1[0];
        this.width = value1[1];
    }
};

rectangle.length = 20;
rectangle.width = 10;
//console.log(rectangle.Area+'\n')


function AreaofRec(length=10,width=20){
    if(length <=width){
        return `width cannot be bigger or equal with length, given:\nl=${length}\nw=${width}`
    }
    else {
        let area = length * width;
        return `Area of the rectangle is: ${area}`;
    }
};


//console.log(AreaofRec(20,10));

const information = {
    title:'Job',
    requirement:['python','javascript','ruby'],
    people_name:['sample','sample1','sample2'],
    show_job(){
        this.requirement.forEach(function (req){
            for(name in this.people_name){
                console.log(this.people_name[name]);
            }
            console.log(`${this.title}:${req}`);
        },this);
    }
}

console.log(information.show_job());