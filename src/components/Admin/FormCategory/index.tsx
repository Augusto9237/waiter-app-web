import { useEffect, useState } from "react";

import { api } from "../../../utils/api";
import { toast } from "react-toastify";


import { Button } from "../../Button";
import { CategoryType } from "../../../types/Category";

import {
  ContentForm,
  FormCategoryContainer,
  FooterFormCategory,
} from "./styles";

interface CartModalProps {
  category?: CategoryType | null;
  onClose: () => void;

}

export function FormCategory({
 
  onClose,
  category,
}: CartModalProps) {

  const [icon, setIcon] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (category) {
      setIcon(category.icon);
      setName(category.name);
    }
  }, [category]);


  async function handleOk() {

    const route = category?._id ? `/categories/${category._id}` : '/categories';
    const path = category?._id ? api.patch : api.post;

    try {
      const response = await path(route, {
        icon,
        name,
      });
      toast.success(response.data.msg);
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
    onClose();
  }


  return (

    <>
      <ContentForm>
        <FormCategoryContainer>
          <div className="input-container">
            <span>Icone</span>
            <input
              placeholder="Insira um icone"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
            />
          </div>

          <div className="input-container">
            <span>Nome</span>
            <input
              placeholder="Digite um nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </FormCategoryContainer>
      </ContentForm>

      <FooterFormCategory>

        <Button
          onClick={handleOk}
          title="Salvar"
        />
      </FooterFormCategory>
    </>
  );
}
