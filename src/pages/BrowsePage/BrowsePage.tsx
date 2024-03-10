import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from 'src/hooks/useProducts';
import { TailSpin } from 'react-loader-spinner';
import { ProductCard } from 'src/components/ProductCard/ProductCard';
import {
  Container,
  Label,
  ProductsContainer,
  LoaderContainer,
} from './BrowsePage.styled';
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';
import { PageContainer } from 'src/components/PageContainer/PageContainer';
export default function BrowsePage() {
  const navigate = useNavigate();
  const { products, loading, error } = useProducts();

  const goToProductPage = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const renderContent = () => {
    if (loading) {
      return (
        <LoaderContainer>
          <TailSpin color="#00BFFF" height={80} width={80} />
        </LoaderContainer>
      );
    }

    if (error) {
      return (
        <LoaderContainer>
          <h3>No items found, please try again!</h3>
        </LoaderContainer>
      );
    }

    return (
      <PageContainer>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            name={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            onCardClick={goToProductPage}
          />
        ))}
      </PageContainer>
    );
  };

  return (
    <>
      <Navbar />
      <PageContainer>
        <Container>
          <Label>
            <p>We insure</p>
            <h2>
              QUALITY <span>and</span> MAINTAINABILITY
            </h2>
            <p>for the bikes that we sell</p>
          </Label>
          {renderContent()}
        </Container>
      </PageContainer>
    </>
  );
}
