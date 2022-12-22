import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import {
    UsersContainer,
    UsersButtons,
    ButtonUsers,
    ListUsers,
    ItemUser,
} from "./styles";
import { FormCategoryModal } from "../FormCategoryModal";
import { api } from "../../../utils/api";
import { CategoryType } from "../../../types/Category";
import { ProductType } from "../../../types/Products";
import { toast } from "react-toastify";
import { FormUserModal } from "../FormUserModal";

export function Users() {
    const [isVisibleFormUsers, setIsVisibleFormUsers] = useState(false);
 
    const [isLoading, setIsLoading] = useState(true);


    function onClose() {
        setIsVisibleFormUsers(false);
    }

    return (
        <>
            <FormUserModal visible={isVisibleFormUsers} onClose={onClose} />
            <UsersContainer>
                <UsersButtons>
                    <strong>Usuarios</strong>
                    <ButtonUsers onClick={() => setIsVisibleFormUsers(true)}>
                        <PlusCircle size={20} /><span>Usuario</span>
                    </ButtonUsers>
                </UsersButtons>
                <ListUsers>

                    <ItemUser >
                        <div className="container-icon">
                          🧑‍💼
                        </div>
                        <span>Fulano</span>
                        <span>Gerente</span>
                        <span>*****</span>
                        <div className="edit-product">
                            <button className="edit-button"><PencilSimple size={20} /></button>
                            <button className="delete-button"
                                onClick={() => alert()}
                            ><Trash size={20} /></button>
                        </div>
                    </ItemUser>

                </ListUsers>
            </UsersContainer>
        </>
    );
}