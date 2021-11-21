import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActionsHook } from "../hooks/useAction";

const Repositories: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActionsHook();
  const { data, error, loading } = useTypedSelector((state) => state.allReducers);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={term} onChange={changeHandler} />
        <button>SEARCH</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((item) => <div key={item}>{item}</div>)}
    </div>
  );
};

export default Repositories;
