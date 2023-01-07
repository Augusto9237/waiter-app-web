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
import { FormUserModal } from "../FormUserModal";
import { UserType } from "../../../types/Users";

export function Users() {
    const [isVisibleFormUsers, setIsVisibleFormUsers] = useState(false);
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        api.get("/users")
            .then((Response) => {
                setUsers(Response.data);
            });
    }, [isLoading]);


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

                    {users.map((user) => (
                        < ItemUser key={user._id} >
                            <div className="container-icon">
                                🧑‍💼
                            </div>
                            <span>{user.name}</span>
                            <span>{user.office}</span>
                            <span>*****</span>
                            <div className="edit-product">
                                <button className="edit-button"><PencilSimple size={20} /></button>
                                <button className="delete-button"
                                    onClick={() => alert()}
                                ><Trash size={20} /></button>
                            </div>
                        </ItemUser>
                    )
                    )}
                </ListUsers>
            </UsersContainer>
        </>
    );
}