enum ShapeType {
    Rectangle,
    Circle,
    Triangle
}

class Rectangle {
    type?: ShapeType.Rectangle = ShapeType.Rectangle;
    constructor(public width: number, public height: number) {}
}

class Circle {
    type?: ShapeType.Circle = ShapeType.Circle;
    constructor(public radius: number) {}
}

class Triangle {
    type?: ShapeType.Triangle = ShapeType.Triangle;
    constructor(public base: number, public height: number) {}
}

type Shape = Rectangle | Circle | Triangle;

export { Rectangle, Circle, Triangle, Shape, ShapeType};
