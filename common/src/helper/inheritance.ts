class Point3D extends Point {
    z: number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    public add(point: Point3D):any {
        let point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}