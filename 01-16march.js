function solve(inputJSON) {
    let input = JSON.stringify(inputJSON);
    let obj1 = JSON.parse(input);
    let coordinatesExtracted=[];
    //let id=0;let type="";

    class GeometricFigure {
        getArea() {
            return 0;
        }

        getPerimeter() {
            return 0;
        }

        toString() {
            return Object.getPrototypeOf(this).constructor.name;
        }
    }

    class Triangle extends GeometricFigure {
        constructor(x, y, z, id) {
            super();
            this.sideA = x;
            this.sideB = y;
            this.sideC = z;
            this.id=id;
        }

        getArea() {

            let p = (this.sideA + this.sideB + this.sideC) / 2;
            let area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
            return area;
        }
        getPerimeter() {
            return this.sideA + this.sideB + this.sideC;
        }
        getId(){
            return this.id;
        }

    }

    class Rectangle extends GeometricFigure {
        constructor(x, y,id) {
            super();
            this.sideA = x;
            this.sideB = y;
            this.id=id
        }

        getArea() {
            return this.sideA * this.sideB;
        }

        getPerimeter() {
            return 2 * this.sideA + 2 * this.sideB
        }
        getId(){
            return this.id;
        }
    }


    // function handleFigures(figures) {
    //     return figures.reduce(function (sum, figure,id) {
    //         if (figure instanceof GeometricFigure) {
    //             console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea() + " - perimeter: " + figure.getPerimeter());
    //             //return sum + figure.getArea();
    //             return [figure.getArea(), figure.getPerimeter(),id]
    //         }
    //         throw Error("Incorrect data was entered");
    //     }, 0);
    //
    // }


    // let figures = [new Triangle(4, 5, 6), new Rectangle(7, 8)];
    // console.log(handleFigures(figures));

    for (let object of obj1.figures) {
        let figureArray = Object.entries(object);
        let id = Number(figureArray[0][1]);
        let type = figureArray[1][1];
        let coordinates = figureArray[2][1];
        //console.log(coordinates);

        for (let obj of coordinates) {
            let newObj = Object.entries(obj);
            newObj.forEach(e => coordinatesExtracted.push(...e))
        }
        //console.log(coordinatesExtracted);
        if(type==="triangle"){

            function handleFigures(figures) {
                return figures.reduce(function (sum, figure,id) {
                    if (figure instanceof GeometricFigure) {
                        console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea() + " - perimeter: " + figure.getPerimeter()+ figure.getId());
                        //return sum + figure.getArea();
                        return [figure.getArea(), figure.getPerimeter(),figure.getId()]
                    }
                    throw Error("Incorrect data was entered");
                }, 0);

            }

            console.log(id);
            let figures = [new Triangle(4, 5, 6,id)];
            console.log(handleFigures(figures));
        }
        if (type==="rectangle"){
            console.log(id)
            function handleFigures1(figures) {
                return figures.reduce(function (sum, figure,id) {
                    if (figure instanceof GeometricFigure) {
                        console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea() + " - perimeter: " + figure.getPerimeter()+figure.getId());
                        //return sum + figure.getArea();
                        let result=JSON.parse(`Geometric figure: ${figure.toString()} area: ${figure.getArea()} + " - perimeter: " + figure.getPerimeter()+figure.getId())
                        //return [figure.getArea(), figure.getPerimeter(),figure.getId()]
                        return result
                    }
                    throw Error("Incorrect data was entered");
                }, 0);

            }
            let figures =  [new Rectangle(7, 8,id)];
            console.log(handleFigures1(figures));
        }
    }





}
solve({
    "figures": [{
        "id": "1",
        "type": "triangle",
        "coordinates": [{
            "x": 1,
            "y": 1
        },
            {
                "x": 1,
                "y": 4
            },
            {
                "x": 5,
                "y": 4
            }]
    },{
        "id": "2",
        "type": "rectangle",
        "coordinates": [{
            "x": 1,
            "y": 1
        },
            {
                "x": 1,
                "y": 4
            },
            {
                "x": 5,
                "y": 4
            },
            {
                "x": 5,
                "y": 1
            }]
    }]
})
