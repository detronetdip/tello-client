import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentTheme } from "../context";

export function useTheme() {
  const {theme} = useRecoilValue(currentTheme);
  const changeTheme = useSetRecoilState(currentTheme);
  const setCurrentTheme = (th: string) => {
    localStorage.setItem("THEME",th)
    changeTheme((old) => {
      return {
        ...old,
        theme: th,
      };
    });
  };
  return { theme, setCurrentTheme };
}
