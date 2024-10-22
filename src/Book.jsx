import './Book.css';
export default function Book({ book }) {
    const { name, price } = book;
    return (
        <div className='book'>
            <li> Book Name: {name}</li>
            <li> Book Price: {price}</li>
        </div>
    )
}