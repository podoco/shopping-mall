import React from 'react';
import { useQuery, QueryClientProvider, QueryClient } from 'react-query';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';
import { ProductItem } from '../components/item';
import '../../scss/index.scss'
const MyErrorBoundary = ({ error }) => {
  // 에러 처리 로직 구현
  return <div>Oops! An error occurred: {error.message}</div>;
};

const ProductList = () => {
  const queryClient = new QueryClient(); // 새로운 QueryClient 인스턴스 생성

  const { data } = useQuery<Product[]>(
    QueryKeys.PRODUCTS,
    () =>
      fetcher({
        method: 'GET',
        path: '/products',
      }),
    {
      queryClient,
    }
  );

  console.log(data);

  return (
    <>
    <div>
      <ul className ="products">
        {data?.map(product => (
          <ProductItem {...product} key={product.id}/>
        ))}
      </ul>
    </div>
  </>
  );
};

const ProductListWithQuery = () => {
  return (
    <QueryClientProvider client = {new QueryClient()} errorBoundary = {<MyErrorBoundary />}>
      <ProductList />
    </QueryClientProvider>
  );
};

export default ProductListWithQuery;
