interface ProductProps {
    name: string;
    imgUrl: string;
    price: number;
}
export default function Products({name, imgUrl, price}: ProductProps) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
            <p>Price: {price} credits</p>
        </div>
    )
}