import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import {
    UsersContainer,
    UsersButtons,
    ButtonUsers,
    ListUsers,
    ItemUser,
} from "./styles";
import { api } from "../../../utils/api";
import { FormUserModal } from "../FormUserModal";
import { UserType } from "../../../types/Users";

export function Users() {
    const [isVisibleFormUsers, setIsVisibleFormUsers] = useState(false);
    const [users, setUsers] = useState<UserType[]>([]);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);

    useEffect(() => {
           setIsLoadingUsers(true);
        api.get("/users")
            .then((Response) => {
                setUsers(Response.data);
            });
            setIsLoadingUsers(false);

    }, [isLoadingUsers]);


    function onClose() {
        setIsVisibleFormUsers(false);
        setIsLoadingUsers(true);
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
                    {!isLoadingUsers && (
                        <>
                            {users.map((user) => (
                                < ItemUser key={user._id} >
                                    <div className="container-icon">
                                        {user.office === 'CLERK' && "🤵"}
                                        {user.office === 'KITCHEN_ASSISTANT' && "👨‍🍳"}
                                        {user.office === 'MANANGER' && "👨‍💻"}
                                    </div>
                                    <span>{user.name}</span>
                                    <span>{user.office === 'CLERK' && "Atendente"}
                                        {user.office === 'KITCHEN_ASSISTANT' && "Aux. de Cozinha"}
                                        {user.office === 'MANANGER' && "Gerente"}</span>
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
                        </>
                    )}
                </ListUsers>
            </UsersContainer>
        </>
    );
}