import { useEffect, useState } from 'react';
import { IoCheckmark } from 'react-icons/io5';
import { MainContainer } from '../../Components/MainContainer';
import { PageBody } from '../../Components/MainContainer/Body';
import Header from '../../Components/Header';
import { SearchArea } from '../../Components/SearchArea';
import { CategoriesSection } from '../../Components/CategoriesSection';
import { Title } from '../../Components/Title';
import { Subtitle } from '../../Components/Subtitle';
import { CardContainerArea } from '../../Components/CardContainer';
import { ProductsAreaContainer } from '../../Components/ProductsAreaContainer';
import { ShowCardContainer } from '../../Components/ProductCard/Card';
import HamburguerPng from '../../assets/hamburguer.png';
import PizzaPng from '../../assets/pizza1.png';
import RefrigerantePng from '../../assets/latinhas.png';
import { Footer } from '../../Components/Footer';
import { ProductsApi } from '../../Api/ProductsApi';
import { Produto } from '../../types/Produto';
import { useContextCategory } from '../../Contexts/CategoryContext';
import { useContextProduct } from '../../Contexts/ProductContext';
import  ModalComponent  from '../../Components/OrderModal/index';

export default function HomePage() {
  const [products, setProducts] = useState<Produto[]>([]);
  const { category } = useContextCategory();
  const { produtoSelecionado, chooseProduct } = useContextProduct();
  const [openModal, setOpenModal] = useState(false);
  const [disabledProducts, setDisabledProducts] = useState<number[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await ProductsApi.getAllProducts();
        if (result) setProducts(result);
      } catch (error) {
        console.log(error);
      }
    };
 
    fetchProducts();
   
  
  }, []);
  useEffect(() => {

    function sincronizarArrays() {
      const idsProdutos = produtoSelecionado.map((p) => p.produto_id);
      setDisabledProducts(idsProdutos);
    }
   
    sincronizarArrays();
    
  }, [produtoSelecionado]);
  return (
    <>
      <MainContainer>
        <ModalComponent openModal={openModal} setOpenModal={setOpenModal}></ModalComponent>
        <PageBody>
          <Header />
          <SearchArea />

          <CategoriesSection>
            <Title text={'Categorias'} textSize="30" />
            <Subtitle textSize="20" text={'Navegue por categoria'} />
            <CardContainerArea />
          </CategoriesSection>

          <ProductsAreaContainer>
            <div className="ProductsTextArea">
              <Title text={'Produtos'} textSize="30" />
              <Subtitle
                textSize="20"
                text={'Selecione um produto para adicionar ao seu pedido'}
              />
            </div>
            <div className="showCardsArea">
              {products.map((p) => {
                const isProductDisabled = disabledProducts.includes(p.produto_id);

                return (
                  <ShowCardContainer 
                    displayType={
                      category === 'HamburguerPng' && p.imagem === 'HamburguerPng'
                        ? 'flex'
                        : category === 'PizzaPng' && p.imagem === 'PizzaPng'
                        ? 'flex'
                        : category === 'RefrigerantePng' && p.imagem === 'RefrigerantePng'
                        ? 'flex'
                        : !category
                        ? 'flex'
                        : 'none'
                    }
                    pointerEvents={isProductDisabled ? 'none' : 'auto'}
                    key={p.produto_id}
                    onClick={() => {
                      const produtos = [...produtoSelecionado, p];
                      chooseProduct(produtos);
                      setOpenModal(true);
                      setDisabledProducts([...disabledProducts, p.produto_id]);
                    }}
                  >
                    {isProductDisabled && (
                      <div className="verde">
                        <IoCheckmark size={80} style={{ color: 'white' }} />
                      </div>
                    )}
                    <div className="ProductImageArea">
                      <img
                        src={
                          p.imagem === 'HamburguerPng'
                            ? HamburguerPng
                            : p.imagem === 'PizzaPng'
                            ? PizzaPng
                            : p.imagem === 'RefrigerantePng'
                            ? RefrigerantePng
                            : ''
                        }
                        alt="Product Image"
                      ></img>
                    </div>
                    <div className="ProductInfoArea">
                      <Title text={p.nome} textSize="20" />
                      <Subtitle text={p.descricao} textSize="20" />
                      <Title text={`R$${p.preco}`} textSize="20" />
                    </div>
                  </ShowCardContainer>
                );
              })}
            </div>
          </ProductsAreaContainer>
          <Footer />
        </PageBody>
      </MainContainer>
    </>
  );
}
