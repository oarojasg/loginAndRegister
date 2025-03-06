import Figure from 'react-bootstrap/Figure';
import logo from '../../activos/logo.svg'
import './titulo.css';

export default function Titulo({principal, secundario}) {
    return (
        <div className='mb-3'>
            <Figure.Image src={logo} width={100} height={100} />
            <div className="child">
                <h5>{principal}</h5>
                <h5><small className='text-muted'>
                    {secundario}</small></h5>
            </div>
        </div>
    );
}