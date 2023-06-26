import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  console.log("id:", id);
  console.log("mode:", mode);

  return (
    <div>
      <h1>Edit</h1>
      <button onClick={() => setSearchParams({ who: "winterlood" })}>
        Qs 바꾸기
      </button>

      <button onClick={() => navigate("/home")}>home</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
}
