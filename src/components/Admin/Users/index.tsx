import { PencilSimple, PlusCircle, Trash } from "phosphor-react";
import { useEffect, useState } from "react";

import {
    UsersContainer,
    UsersButtons,
    ButtonUsers,
    ListUsers,
    ItemUser,
    LoadingContainerUsers,
} from "./styles";
import { api } from "../../../utils/api";
import { FormUserModal } from "../FormUserModal";
import { UserType } from "../../../types/Users";
import { toast } from "react-toastify";
import LoadingSpinner from "../../LoadingSpinner";

export function Users() {
    const [isVisibleFormUsers, setIsVisibleFormUsers] = useState(false);
    const [users, setUsers] = useState<UserType[]>([]);
    const [selectedUser, setSelectedUser] = useState<null | UserType>(null);
    const [isLoadingUsers, setIsLoadingUsers] = useState(true);

    useEffect(() => {
        if (isLoadingUsers) {
            api.get("/users")
                .then((Response) => {
                    setUsers(Response.data);
                });
            setIsLoadingUsers(false);
        }

    }, [isLoadingUsers]);

    function handleEditUser(selectedUser: UserType) {
        setSelectedUser(selectedUser);
        setIsVisibleFormUsers(true);
    }

    async function handleDeleteUser(userId: string) {
        await api.delete(`/users/${userId}`);
        setIsLoadingUsers(true);
        toast.success('Usuario deletado com sucesso!');
    }


    function onClose() {
        setIsVisibleFormUsers(false);
        setSelectedUser(null);
        setIsLoadingUsers(true);
    }

    return (
        <>
            <FormUserModal visible={isVisibleFormUsers} onClose={onClose} selectedUser={selectedUser} />
            <UsersContainer>
                <UsersButtons>
                    <strong>Usuarios</strong>
                    <ButtonUsers onClick={() => setIsVisibleFormUsers(true)}>
                        <PlusCircle size={20} /><span>Usuario</span>
                    </ButtonUsers>
                </UsersButtons>
                <ListUsers>
                    {isLoadingUsers && (
                        <LoadingContainerUsers>
                            <LoadingSpinner />
                        </LoadingContainerUsers>
                    )}
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
                                        <button className="edit-button" onClick={() => handleEditUser(user)}>
                                            <PencilSimple size={20} />
                                        </button>

                                        <button className="delete-button" onClick={() => handleDeleteUser(user._id)}>
                                            <Trash size={20} />
                                        </button>
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