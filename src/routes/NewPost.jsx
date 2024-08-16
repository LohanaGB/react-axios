import React from 'react';
import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="newPost">
      <h2>Inserir Novo Post:</h2>

      <form>
        <div className="formControl">
          <label htmlFor="title">Título:</label>
          <input
            type="text" 
            name="title" 
            id="title" 
            placeholder="Digite o título" 
          />
        </div>
        
        <div className="formControl">
          <label htmlFor="body">Conteúdo:</label>
          <textarea 
            name="body"
            id="body" 
            placeholder="Digite o conteúdo"
          ></textarea>
        </div>
        <input type="submit" value="Criar Post" className="btn" />
      </form>

    </div>
  )
}

export default NewPost;
