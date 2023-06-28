import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();
  const diartList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diartList.length >= 1) {
      const targetDiary = diartList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diartList]);
  return (
    <div>
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
}
