import axios from "axios";
import { useState } from "react";

const CreateUser = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const createPost = (e:React.FormEvent) => {
    e.preventDefault();
    console.log("送信",name,email);

    axios.post("https://jsonplaceholder.typicode.com/users",{name,email})
  };

  return (
    <>
      <form onSubmit={createPost}>
        <h2>ユーザー登録</h2>
        <input
          value={name}
          type="text"
          placeholder="名前"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          type="email"
          placeholder="メールアドレス"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>登録</button>
      </form>
    </>
  );
};

export default CreateUser;
