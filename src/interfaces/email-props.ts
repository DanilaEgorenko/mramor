import { Dispatch, SetStateAction } from "react";

export default interface Props {
    setStorageEmail: Dispatch<SetStateAction<string | null>>
}