import { useParams } from 'react-router-dom';
import Container from '../../components/UI/Container/Container';
import { useFetchProductByIdQuery } from '../../services/RTK/ProductsService';

const ProductPage = () => {
    const { id } = useParams()

    const { data: product, isLoading } = useFetchProductByIdQuery({ id: id })


    return (
        <Container>
            {product?.name}
        </Container>
    )
};

export default ProductPage;