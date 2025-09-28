type UtilsLinks = {
  whatsapp: string;
  email: string;
  phone:string
};
export interface AppContextProps {
  AppName: string;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  utilsLinks: UtilsLinks;
}
