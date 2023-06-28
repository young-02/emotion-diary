import { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

export default function New() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `New Diary`;
  }, []);

  return <DiaryEditor />;
}
