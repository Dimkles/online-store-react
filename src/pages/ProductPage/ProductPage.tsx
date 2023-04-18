import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/UI/Container/Container';
import MyImage from '../../components/UI/MyImage/MyImage';
import { BACKEND_URL } from '../../consts/store';
import { useFetchProductByIdQuery } from '../../services/RTK/ProductsService';

const ProductPage = () => {
    const { id } = useParams()

    const { data: product, error } = useFetchProductByIdQuery({ id: id })
    if (error) {
        console.log(error)
    }


    return (
        <Container>
            <>
                {product?.name}
                {product?.price}
                {product?.quantity}
                <MyImage webp={`${BACKEND_URL}/${product?.imagewebp}`} jpg={`${BACKEND_URL}/${product?.imagejpg}`} height={300} />
            </>
        </Container>
    )
};

export default ProductPage;