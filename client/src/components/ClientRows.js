import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENTS } from "../mutations/ClientMutation";
import { GET_CLIENTS } from "./query/clientQueries";
import { GET_PROJECTS } from "./query/projectQueries";

const ClientRows = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENTS, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRows;
