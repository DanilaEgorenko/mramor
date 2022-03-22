type Sizes = 200 | 300 | 500
type Thickness = 16 | 20 | 22
type Country = 'India' | 'Poland' | 'Egypt'
type Colors = 'white' | 'green' | 'brown' | 'blue' | 'orange' | 'pink' | 'grey' | 'black' | 'violet'

export default interface Good {
    srcImg: string | string[];
    name: string;
    price: number;
    oldPrice?: number;
    title: string;
    sizes: Sizes[];
    thickness: Thickness;
    country: Country;
    colors: Colors[];
}