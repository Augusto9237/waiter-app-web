import { useEffect, useState } from "react";

import { Button } from "../../Button";

import {
  ModalBodyCart,
  ModalContent,
  OverlayFormProductModal,
  FormProduct,
  FooterFormProduct,
  HeaderModalCart,
} from "./styles";
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import { CategoryType } from "../../../types/Category";
import { api } from "../../../utils/api";
import { toast } from "react-toastify";
import { ProductType } from "../../../types/Products";

interface CartModalProps {
  categories: CategoryType[];
  visible: boolean;
  onClose: () => void;
  selectedProduct: ProductType | null;
}

interface Ingredients {
  _id?: string;
  icon: string;
  name: string;
}

interface ModalFormProps {
  name: string,
  description: string,
  image: File | null,
  price: number,
  category: string
}



export function FormProductModal({
  visible,
  onClose,
  categories,
  selectedProduct
}: CartModalProps) {
  if (!visible) {
    return null;
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const [ingredients, setIngedients] = useState<Ingredients[]>([]);
  const [ingredientsUpdate, setIngedientsUpdate] = useState<Ingredients[]>([]);
  const [inputCount, setInputCount] = useState(0);
  const [formData, setFormData] = useState<ModalFormProps>({
    name: "",
    description: "",
    image: null,
    price: 0,
    category: '',
  },);

  const newIngredients = [...ingredients, ...ingredientsUpdate];

  useEffect(() => {
    if (selectedProduct?._id) {

      api.get(`/products/${selectedProduct._id}`)
        .then((Response) => {
          setIngedientsUpdate(Response.data.ingredients);
          setFormData(Response.data);
        });
    }
  }, []);



  function handleAddInput() {
    setInputCount(inputCount + 1);
  }

  function handleDelInput() {
    setInputCount(inputCount - 1);
    const newArray = ingredients.slice(0, - 1);

    setIngedients(newArray);
  }

  function handleDelInputUpdate() {
    const newArray = ingredientsUpdate.slice(0, -1);
    setIngedientsUpdate(newArray);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | any) => {
    const { name, value, files } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const route = selectedProduct?._id ? `/products/${selectedProduct._id}` : '/products';
    const path = selectedProduct?._id ? api.patch : api.post;
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const message = selectedProduct?._id ? 'Produto atualizado com sucesso!' : 'Produto adicionado com sucesso!';


    await path(route, {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      category: formData.category,
      ingredients: JSON.stringify(newIngredients),
      image: formData.image
    }, headers);
    toast.success(message);
    onClose();
  };



  return (
    <OverlayFormProductModal>
      <ModalBodyCart>

        <HeaderModalCart>
          <div />
          <strong>{selectedProduct?._id ? 'Editar produto' : 'Novo produto'}</strong>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </HeaderModalCart>

        <ModalContent>
          <FormProduct
            onSubmit={handleSubmit} encType="multipart/form-data"
          >
            <div className="input-container">
              <span>Categoria</span>
              <select value={formData.category} name="category" onChange={handleChange} >
                <option value=''>Selecione uma categoria</option>
                {categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>{category.icon}{" "}{category.name}</option>
                  );
                })}
              </select>
            </div>

            <div className="input-container">
              <span>Nome</span>
              <input name="name" placeholder="Digite um nome" type='text' onChange={handleChange} value={formData.name} />
            </div>

            <div className="input-container">
              <span>Preço</span>
              <input name="price" placeholder="Digite o preço" type='number' onChange={handleChange} value={formData.price} />
            </div>

            <div className="input-container">
              <span>Descrição</span>
              <input name="description" placeholder="Digite a descrição do produto" onChange={handleChange} value={formData.description} />
            </div>

            <div className="input-container">
              <span>Ingredientes</span>

              {ingredientsUpdate.length > 0 && (
                ingredientsUpdate.map((ingredient) =>
                  <div key={ingredient._id} id={ingredient._id} className="input-container-ingredientsUpdate">
                    <button type="button" onClick={handleAddInput} className='button-ingredients'>
                      <PlusCircle size={20} />
                    </button>
                    <label >Icone</label>
                    <input value={ingredient.icon} className="icon-ingredient" disabled onChange={event => {
                      setIngedients([...ingredients, { icon: event.target.value, name: '' }]);
                    }} />

                    <label >nome</label>
                    <input value={ingredient.name} type="text" name='name' disabled onChange={event => {
                      const newItems = [...ingredients];
                      newItems[newItems.length - 1].name = event.target.value;
                      setIngedients(newItems);
                    }} />

                    <button type="button" onClick={() => handleDelInputUpdate()} className='button-ingredients'>
                      <MinusCircle size={20} />
                    </button>
                  </div>
                )
              )}

              {Array.from(Array(inputCount)).map((_, index) => (
                <div key={index} className="input-container-ingredients">
                  <button type="button" onClick={handleAddInput} className='button-ingredients'>
                    <PlusCircle size={20} />
                  </button>
                  <label htmlFor={`input-${index}`}>Icone</label>
                  <input className="icon-ingredient" type="text" id={`input-${index}`} name='icon' onChange={event => {
                    setIngedients([...ingredients, { icon: event.target.value, name: '' }]);
                  }} />

                  <label htmlFor={`input-${index}`}>nome</label>
                  <input type="text" id={`input-${index}`} name='name' onChange={event => {
                    const newItems = [...ingredients];
                    newItems[newItems.length - 1].name = event.target.value;
                    setIngedients(newItems);
                  }} />
                  <button type="button" onClick={handleDelInput} className='button-ingredients' disabled={inputCount > 0 ? false : true}>
                    <MinusCircle size={20} />
                  </button>
                </div>
              ))}

              <div className="button-ingredients-container">
                <button type="button" onClick={handleAddInput} className='button-ingredients'>
                  <PlusCircle size={20} />
                </button>
              </div>

            </div>

            <div className="input-container">
              <span>Imagem</span>
              <input name="image" placeholder="Digite um nome" type='file' onChange={handleChange} />
            </div>
            <FooterFormProduct>

              <Button>Salvar</Button>
            </FooterFormProduct>
          </FormProduct>
        </ModalContent>

      </ModalBodyCart>
    </OverlayFormProductModal>
  );
}