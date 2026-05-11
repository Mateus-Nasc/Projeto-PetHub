import { useEffect, useState } from "react";
import axios from "axios";

function PetList() {
  // 1. Criar um "estado" para guardar os pets que vêm do banco
  const [pets, setPets] = useState([]);

  // 2. Função que vai ao backend buscar os dados (GET)
  const carregarPets = async () => {
    try {
      // Requisito: A API deve responder em JSON
      const resposta = await axios.get("http://localhost:3000/pets");
      setPets(resposta.data);
    } catch (erro) {
      console.error("Erro ao procurar pets:", erro);
    }
  };

  // 3. O useEffect faz a função rodar assim que a página abre
  useEffect(() => {
    carregarPets();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🐾 Animais para Adoção</h2>

      {pets.length === 0 ? (
        <p>A carregar pets...</p>
      ) : (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {pets.map((pet) => (
            <div
              key={pet.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{pet.nome}</h3>
              <p>Especie: {pet.especie}</p>
              <p>Idade: {pet.idade} anos</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetList;
