import React, { useState } from 'react';
import {TOKEN} from './apiKey.js'
import './Usuario.css'


export function Usuario({ userId, name, email, gender, status, onDelete, updateList }) {
    const primerNombre = name.split(' ')[0]
    const [editMode, setEditMode] = useState(false);
    const [editedName, setEditedName] = useState(name);
    const [editedEmail, setEditedEmail] = useState(email);
    const [editedGender, setEditedGender] = useState(gender);
    const [editedStatus, setEditedStatus] = useState(status);

    function handleDelete() {
        onDelete(userId);
    }

    function handleEdit() {
        setEditMode(true);
    }
    function cancelEdit(){
        setEditMode(false);
    }

    async function handleSave() {
        try {
            const response = await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + TOKEN,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body : JSON.stringify({ name : editedName, email: editedEmail, gender: editedGender, status: editedStatus })
            });
            if (response.ok) { 
                setEditMode(false);
                updateList();
            } else {
                console.log('Error editando usuario');
            }
        } catch (error) {
            console.error(error);
        }
        
        
    }

    return (
        <div className="box">
            <div className="box__head">
                <img src={`https://unavatar.io/${primerNombre}`} />
            </div>
            {editMode ?
                <div className="box__content">
                    <input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                    <input data-type="email" value={editedEmail} onChange={(e) => setEditedEmail(e.target.value)} />
                    <select value={editedGender} onChange={(e) => setEditedGender(e.target.value)} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select value={editedStatus} onChange={(e) => setEditedStatus(e.target.value)} >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <button onClick={handleSave} className='guardar'>Guardar</button>
                    <button onClick={cancelEdit} className='cancelar'>Cancelar</button>
                </div>
                :
                <>
                    <div className="box__content">
                        <h2>{name}</h2>
                        <h4>{email}</h4>
                        <h4>{gender}</h4>
                        <h4>{status}</h4>
                    </div>
                    <div className="box__options">
                        <i className="bi bi-person-gear" onClick={handleEdit}></i>
                        <i className="bi bi-person-dash" onClick={handleDelete}></i>
                    </div>
                </>
            }
            
        </div>
    )
}

export default Usuario;
